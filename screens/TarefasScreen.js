import { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function TarefasScreen({ route, navigation }) {
  const { nomeUsuario } = route.params;

  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (tarefa.trim() === '') {
      alert('Digite uma tarefa antes de adicionar.');
      return;
    }

    const novaTarefa = {
      id: Date.now().toString(),
      nome: tarefa
    };

    setTarefas([...tarefas, novaTarefa]);
    setTarefa('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Olá, {nomeUsuario}!
      </Text>

      <Text style={styles.subtitulo}>
        Organize suas tarefas de hoje.
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
          Adicionar Tarefa
        </Text>
      </TouchableOpacity>

      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              navigation.navigate('Detalhes', {
                tarefa: item.nome
              })
            }
          >
            <Text style={styles.textoItem}>
              {item.nome}
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
    marginBottom: 20,
    color: '#555'
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15
  },

  botao: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },

  item: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12
  },

  textoItem: {
    fontSize: 16
  }
});