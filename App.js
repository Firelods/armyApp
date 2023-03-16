import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    BlackOpsOne: require('./assets/fonts/BlackOpsOne.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Image style={styles.flagImage} source={require('./assets/drapeau.png')} />
        <Text style={styles.textPresentation}>Cours pôur votre FMIR ?</Text>
        <Text style={styles.textPresentation}>Révisions pour vos classes ?</Text>
        <Text style={styles.textPresentation}>Reçu, vous êtes au bon endroit !</Text></View>
      <Text>Test !</Text>
    </View>
  );
}

const backgroundColor = '#324E19';
const greenBg = "#2B3224"
const whiteZone = '#E9E9E9'


const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: greenBg,
    alignItems: 'center',
  },
  textContainer: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: whiteZone,
  },
  textPresentation: {
    fontSize: 20,
    color: backgroundColor,
    fontFamily: 'BlackOpsOne'
  },
  flagImage: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  }
});
