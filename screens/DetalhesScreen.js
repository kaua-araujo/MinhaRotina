import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import { supabase } from '../supabase';

export default function DetalhesScreen({ route, navigation }) {
  const [tarefa, setTarefa] = useState(route.params.tarefa);

  async function alterarStatus() {
    const novoStatus = !tarefa.concluida;

    const { error } = await supabase
      .from('tarefas')
      .update({
        concluida: novoStatus
      })
      .eq('id', tarefa.id);

    if (error) {
      console.log(error);
      alert('Erro ao atualizar.');
      return;
    }

    setTarefa({
      ...tarefa,
      concluida: novoStatus
    });
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Detalhes da Tarefa
      </Text>

      <Text style={styles.label}>
        Nome:
      </Text>

      <Text style={styles.valor}>
        {tarefa.titulo}
      </Text>

      <Text style={styles.label}>
        Status:
      </Text>

      <Text
        style={[
          styles.status,
          tarefa.concluida
            ? styles.concluida
            : styles.pendente
        ]}
      >
        {tarefa.concluida ? 'Concluída' : 'Pendente'}
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={alterarStatus}
      >
        <Text style={styles.textoBotao}>
          {tarefa.concluida
            ? 'Marcar como Pendente'
            : 'Marcar como Concluída'}
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
    padding: 25,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2'
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center'
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15
  },

  valor: {
    fontSize: 18,
    marginTop: 5
  },

  status: {
    fontSize: 20,
    marginTop: 8,
    fontWeight: 'bold'
  },

  concluida: {
    color: 'green'
  },

  pendente: {
    color: 'red'
  },

  botao: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40
  },

  botaoVoltar: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});