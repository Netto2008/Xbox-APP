import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import imgfundo from '../../assets/logo.png';

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo Xbox */}
      <View style={styles.logoContainer}>
        <Image source={imgfundo} style={styles.logoImage} />
        <Text style={styles.title}>Xbox</Text>
      </View>

      {/* Subtítulo */}
      <Text style={styles.subtitle}>
        Abre a conta agora e aproveite nossas lojas para Microsoft.
        Pegue uma taxa mais alta usando este codigo.
      </Text>

      {/* Botão Consoles */}
      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate('Consoles')}
      >
        <View style={styles.buttonContent}>
          <View style={styles.iconPlaceholder}>
            <Text style={styles.iconText}><Image source={require("../../assets/xbox.jpg")} style={styles.Image}/></Text>
          </View>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTitle}>Confira os</Text>
            <Text style={styles.buttonSubtitle}>consoles</Text>
          </View>
        </View>
      </Pressable>

      {/* Botão Jogos */}
      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate('Jogos')}
      >
        <View style={styles.buttonContent}>
          <View style={styles.iconPlaceholder}>
            <Text style={styles.iconText}><Image source={require("../../assets/jogo.png")} style={styles.Image}/></Text>
          </View>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTitle}>Confira os</Text>
            <Text style={styles.buttonSubtitle}>jogos</Text>
          </View>
        </View>
      </Pressable>

      {/* Botão Nuvem */}
      <Pressable 
        style={styles.button}
        onPress={() => navigation.navigate('Nuvem')}
      >
        <View style={styles.buttonContent}>
          <View style={styles.iconPlaceholder}>
            <Text style={styles.iconText}><Image source={require("../../assets/xcloud-1.png")} style={styles.Image}/></Text>
          </View>
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonTitle}>Confira a</Text>
            <Text style={styles.buttonSubtitle}>nuvem</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    padding: 20,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  logoImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  logoText: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: 'bold',
  },
  title: {
    color: '#107c10',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#a0a0a0',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
    lineHeight: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#107c10',
    borderRadius: 8,
    marginVertical: 8,
    overflow: 'hidden',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  iconPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#0e6b0e',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  iconText: {
    fontSize: 24,
  },
  buttonTextContainer: {
    flex: 1,
  },
  buttonTitle: {
    color: '#ffffff',
    fontSize: 14,
  },
  buttonSubtitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});