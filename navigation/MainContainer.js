import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import GlossaireScreen from './screens/GlossaireScreen';
//Screen names
const homeName = "Home";
const detailsName = "Details";
const settingsName = "Settings";
const glossaireName = "Glossaire";


const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator

                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';

                        } else if (rn === detailsName) {
                            iconName = focused ? 'list' : 'list-outline';

                        } else if (rn === settingsName) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#324E19',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 80 },

                }}>

                <Tab.Screen options={{ headerShown: false }} name={homeName} component={HomeScreen} />
                <Tab.Screen options={{ headerShown: false }} name={detailsName} component={DetailsScreen} />
                <Tab.Screen options={{ headerShown: false }} name={settingsName} component={SettingsScreen} />
                <Tab.Screen options={{
                    tabBarButton: (props) => null, //like this
                    tabBarStyle: { display: 'none' }, //this is additional if you want to hide the whole bottom tab from the screen version 6.x
                    headerShown: false,
                }} name={glossaireName} component={GlossaireScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
