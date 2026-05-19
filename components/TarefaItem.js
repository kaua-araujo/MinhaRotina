import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

export default function TarefaItem({ item, onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.texto}>
        {item.nome}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12
  },

  texto: {
    fontSize: 16
  }
});