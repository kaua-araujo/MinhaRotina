import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

export default function FraseScreen({ navigation }) {
  const [frase, setFrase] = useState('');
  const [loading, setLoading] = useState(true);

  async function buscarFrase() {
  try {
    setLoading(true);

    const response = await fetch(
      'https://dummyjson.com/quotes/random'
    );

    const data = await response.json();

    setFrase(data.quote);

  } catch (error) {
    console.log(error);

    setFrase(
      'Não foi possível carregar a frase.'
    );
  } finally {
    setLoading(false);
  }
}
  useEffect(() => {
    buscarFrase();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Frase do Dia
      </Text>

      <View style={styles.card}>
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#007bff"
          />
        ) : (
          <Text style={styles.frase}>
            "{frase}"
          </Text>
        )}
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={buscarFrase}
      >
        <Text style={styles.textoBotao}>
          Nova Frase
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>
          Voltar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2'
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30
  },

  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    marginBottom: 20
  },

  frase: {
    fontSize: 22,
    textAlign: 'center',
    color: '#333'
  },

  botao: {
    width: '100%',
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15
  },

  botaoVoltar: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});