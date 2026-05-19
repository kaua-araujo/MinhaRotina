import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [nome, setNome] = useState('');

  function entrarApp() {
    if (nome.trim() === '') {
      alert('Digite seu nome.');
      return;
    }

    navigation.navigate('Tarefas', {
      nomeUsuario: nome
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Minha Rotina
      </Text>

      <Text style={styles.descricao}>
        Organize suas tarefas diárias de forma simples.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={entrarApp}
      >
        <Text style={styles.textoBotao}>
          Entrar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoFrase}
        onPress={() => navigation.navigate('Frase')}
      >
        <Text style={styles.textoBotao}>
          Frase do Dia
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10
  },

  descricao: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555'
  },

  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20
  },

  botao: {
    width: '100%',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },

  botaoFrase: {
    width: '100%',
    backgroundColor: '#6f42c1',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});