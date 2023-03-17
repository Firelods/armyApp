import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, Image, Button, Pressable } from 'react-native';
import MainContainer from './navigation/MainContainer.js';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    BlackOpsOne: require('./assets/fonts/BlackOpsOne.ttf'),
    AlegreyaSansSC: require('./assets/fonts/AlegreyaSansSC.ttf'),
  });
  if (!loaded) {
    return null;
  }
  // return (
  //   <View style={[styles.container, { flexDirection: 'column', }]}>
  //     <View style={[styles.textContainer, styles.flagImage]}>
  //       <Image style={styles.flagImage} source={require('./assets/drapeau.png')} />
  //       <Text style={styles.textPresentation}>Cours pour votre FMIR ?</Text>
  //       <Text style={styles.textPresentation}>Révisions pour vos classes ?</Text>
  //       <Text style={styles.textPresentation}>Reçu, vous êtes au bon endroit !</Text></View>
  //     <Pressable style={styles.buttonHomePage}  ><Text style={styles.textButtonHomePage}>Accès aux cours direct</Text></Pressable>
  //     <Text style={styles.textAffiche}>Que vous soyez soldat en incorporation ou sous officier, ces cours vous permettront de réviser toutes les parties des cours militaires ! </Text>
  //     <Pressable style={styles.buttonHomePage}  ><Text style={styles.textButtonHomePage}>Les essentiels pour la FMIR</Text></Pressable>
  //   </View>
  // );
  return (<MainContainer />);
}

