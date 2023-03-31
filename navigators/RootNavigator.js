import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "../components/WelcomeScreen";
import SubscribeScreen from "../components/SubscribeScreen"



const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="welcome" screenOptions={{ headerTitleAlign: 'center' }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Subscribe" component={SubscribeScreen} />
        </Stack.Navigator>
    );
};

export default RootNavigator;
