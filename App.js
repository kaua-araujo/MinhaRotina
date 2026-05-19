import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetalhesScreen from './screens/DetalhesScreen';
import HomeScreen from './screens/HomeScreen';
import TarefasScreen from './screens/TarefasScreen';
import FraseScreen from './screens/FraseScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Stack.Screen
          name="Tarefas"
          component={TarefasScreen}
          options={{ title: 'Minhas Tarefas' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={DetalhesScreen}
          options={{ title: 'Detalhes da Tarefa' }}
        />
        <Stack.Screen
          name="Frase"
          component={FraseScreen}
          options={{ title: 'Frase do Dia' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}