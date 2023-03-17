import * as React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
export default function HomeScreen({ navigation }) {
    return (
        <View style={[styles.container, { flexDirection: 'column', }]}>
            <View style={[styles.textContainer, styles.flagImage]}>
                <Image style={styles.flagImage} source={require('../../assets/drapeau.png')} />
                <Text style={styles.textPresentation}>Cours pour votre FMIR ?</Text>
                <Text style={styles.textPresentation}>Révisions pour vos classes ?</Text>
                <Text style={styles.textPresentation}>Reçu, vous êtes au bon endroit !</Text></View>
            <Pressable style={styles.buttonHomePage}  ><Text style={styles.textButtonHomePage}>Accès aux cours direct</Text></Pressable>
            <Text style={styles.textAffiche}>Que vous soyez soldat en incorporation ou sous officier, ces cours vous permettront de réviser toutes les parties des cours militaires ! </Text>
            <Pressable style={styles.buttonHomePage}  ><Text style={styles.textButtonHomePage}>Les essentiels pour la FMIR</Text></Pressable>
        </View>
    );
}

const greenButton = "#534E24";
const backgroundColor = '#324E19';
const greenBg = "#2B3224";
const fontColorOnBg = "#E1DCC1";
const whiteZone = '#E9E9E9';


const styles = StyleSheet.create({
    container: {
        backgroundColor: greenBg,
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    textContainer: {
        alignItems: 'center',
        backgroundColor: whiteZone,
        width: '100%',
        height: '50%'
    },
    textPresentation: {
        fontSize: 20,
        color: backgroundColor,
        fontFamily: 'BlackOpsOne',
        marginTop: 5,

    },
    flagImage: {
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        width: '100%',
    },
    buttonHomePage: {
        backgroundColor: greenButton,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '5%',
        borderRadius: 30,
        marginTop: "10%",
        marginBottom: "10%",
    },
    textButtonHomePage: {
        color: "white",
        fontFamily: 'AlegreyaSansSC',
        fontSize: 22,
    },
    textAffiche: {
        color: fontColorOnBg,
        fontSize: 22,
        fontFamily: 'AlegreyaSansSC',
        textAlign: 'center',
        width: '95%',
    }

});


export { styles };