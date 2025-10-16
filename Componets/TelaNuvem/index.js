import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground  } from 'react-native';
import imgFundo from "../../assets/fundo-xcloud.png";


export default function TelaNuvem({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={imgFundo} style={{flex: 1}} resizeMode="cover">
      <View style={styles.content}>
        <Text style={styles.tituloVerde}>Xbox Cloud Gaming</Text>
        <Text style={styles.tituloBranco}>Serviço de streaming de jogos</Text>
        <Text style={styles.textoBranco}>
          Jogue mais de 100 jogos de console de alta qualidade{"\n"}
          no seu dispositivo favorito.{"\n\n"}
          Desktop, Notebook, console ou até mesmo celular{"\n"}
          pode se tornar um XBOX.{"\n\n"}
          Através de uma assinatura você terá um XBOX virtual{"\n"}
          sempre que precisar.
        </Text>
        <Image source={require('../../assets/xcloud-2.png')} style={styles.imagemCentral} resizeMode="contain" />
      </View>
      <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  tituloVerde: {
    color: '#3ed14c',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  tituloBranco: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  textoBranco: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  imagemCentral: {
    width: width * 0.8,
    height: width * 0.4,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginTop: 10,
  },
});