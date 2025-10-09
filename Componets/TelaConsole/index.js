import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';


export default function TelaConsole({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Consoles Xbox</Text>
      {/* Conteúdo dos consoles aqui */}
    </View>
  );
}