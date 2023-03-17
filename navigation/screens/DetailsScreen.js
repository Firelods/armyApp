import * as React from 'react';
import { Text, View, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { styles } from './HomeScreen';
export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Pressable style={styles.buttonHomePage} onPress={() => navigation.navigate('Glossaire')}  ><Text style={styles.textButtonHomePage}>Glossaire</Text></Pressable>

        </View>
    );
}



const stylesDetails = StyleSheet.create({

});