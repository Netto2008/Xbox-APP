import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


export default function TelaNuvem({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Nuvem Xbox</Text>
      {/* Conteúdo da nuvem aqui */}
    </View>
  );
}