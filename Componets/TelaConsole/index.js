import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');

export default function TelaConsole({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Xbox Series S */}
        <View style={styles.section}>
          <Image source={require('../../assets/XboxX.png')} style={styles.consoleImage} resizeMode="contain" />
          <Text style={styles.tituloVerde}>XBOX SERIES S</Text>
          <Text style={styles.subtitulo}>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
          <Text style={styles.descricao}>
            O Series S é pra quem busca jogos de nova geração gastando pouco. é o console mais barato da nova geração. Ele é o equilibrio entre gráfico e performance.
          </Text>
        </View>

        {/* Xbox Series X */}
        <View style={styles.section}>
          <Image source={require('../../assets/xbox.jpg')} style={styles.consoleImage} resizeMode="contain" />
          <Text style={styles.tituloVerde}>XBOX SERIES X</Text>
          <Text style={styles.subtitulo}>O Xbox mais rápido e poderoso de todos os tempos.</Text>
          <Text style={styles.descricao}>
            O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.
          </Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    padding: 24,
    alignItems: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 32,
    width: width * 0.95,
    alignItems: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  consoleImage: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  tituloVerde: {
    color: '#3ed14c',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subtitulo: {
    color: '#222',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  descricao: {
    color: '#444',
    fontSize: 14,
    textAlign: 'center',
  },
});