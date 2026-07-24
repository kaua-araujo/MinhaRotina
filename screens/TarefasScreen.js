import { useCallback, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { useFocusEffect } from '@react-navigation/native';
import { supabase } from '../supabase';

export default function TarefasScreen({ route, navigation }) {
  const { nomeUsuario } = route.params;

  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  useFocusEffect(
    useCallback(() => {
      carregarTarefas();
    }, [])
  );

  async function carregarTarefas() {
    const { data, error } = await supabase
      .from('tarefas')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      console.log(error);
      return;
    }

    setTarefas(data);
  }

  async function adicionarTarefa() {
    if (!tarefa.trim()) {
      alert('Digite uma tarefa.');
      return;
    }

    const { error } = await supabase
      .from('tarefas')
      .insert([
        {
          titulo: tarefa,
          concluida: false
        }
      ]);

    if (error) {
      console.log(error);
      return;
    }

    setTarefa('');
    carregarTarefas();
  }

  async function concluirTarefa(item) {
    const { error } = await supabase
      .from('tarefas')
      .update({
        concluida: !item.concluida
      })
      .eq('id', item.id);

    if (error) {
      console.log(error);
      return;
    }

    carregarTarefas();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Olá, {nomeUsuario}!
      </Text>

      <Text style={styles.subtitulo}>
        Organize suas tarefas.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={adicionarTarefa}
      >
        <Text style={styles.textoBotao}>
          Adicionar
        </Text>
      </TouchableOpacity>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.item,
              item.concluida && styles.itemConcluido
            ]}
            onPress={() =>
              navigation.navigate('Detalhes', {
                tarefa: item
              })
            }
          >
            <Text
              style={[
                styles.textoItem,
                item.concluida && styles.textoConcluido
              ]}
            >
              {item.titulo}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2'
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20
  },

  subtitulo: {
    fontSize: 16,
    marginBottom: 20
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15
  },

  botao: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    marginVertical: 15,
    alignItems: 'center'
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  },

  item: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 10
  },

  itemConcluido: {
    backgroundColor: '#d4edda'
  },

  textoItem: {
    fontSize: 16
  },

  textoConcluido: {
    textDecorationLine: 'line-through',
    color: '#777'
  }
});