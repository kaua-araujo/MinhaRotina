import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function DetalhesScreen({ route, navigation }) {
  const { tarefa } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Detalhes da Tarefa
      </Text>

      <View style={styles.card}>
        <Text style={styles.nomeTarefa}>
          {tarefa}
        </Text>

        <Text style={styles.descricao}>
          Essa atividade faz parte da sua rotina diária.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },

  card: {
    
    width: '100%',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 12,
    marginBottom: 30
  },

  nomeTarefa: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },

  descricao: {
    fontSize: 16,
    color: '#555'
  },

  botao: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10
  },

  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});