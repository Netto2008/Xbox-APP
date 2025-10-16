import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');

export default function TelaJogos({ navigation }) {
  return (
    
    <View style={{flex: 1}}>
      <ImageBackground source={require('../../assets/fundo-xcloud.png')} style={{flex: 1}} resizeMode="cover">
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.tituloVerde}>Jogos em 4k</Text>
          <Text style={styles.subtitulo}>Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.</Text>

          {/* Forza Horizon 5 */}
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Forza Horizon 5</Text>
            <Image source={require('../../assets/jogo-2.png')} style={styles.cardImagem} resizeMode="cover" />
            <Text style={styles.cardDescricao}>
              Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México.
            </Text>
          </View>

          {/* Cyberpunk 2077 */}
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Cyberpunk 2077</Text>
            <Image source={require('../../assets/jogo-3.png')} style={styles.cardImagem} resizeMode="cover" />
            <Text style={styles.cardDescricao}>
              Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt.
            </Text>
          </View>

          {/* Halo 5 */}
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>Halo 5</Text>
            <Image source={require('../../assets/jogo-4.png')} style={styles.cardImagem} resizeMode="cover" />
            <Text style={styles.cardDescricao}>
              Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.
            </Text>
          </View>
        </ScrollView>
        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    padding: 20,
    // alignItems: 'center', // Removido para permitir rolagem correta
  },
  tituloVerde: {
    color: '#3ed14c',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitulo: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  card: {
    backgroundColor: '#181818',
    borderRadius: 12,
    marginBottom: 24,
    width: width * 0.92,
    alignItems: 'flex-start',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitulo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardImagem: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardDescricao: {
    color: '#ccc',
    fontSize: 14,
    textAlign: 'left',
  },
});