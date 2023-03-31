import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './components/MenuScreen';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import RootNavigator from './navigators/RootNavigator';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// code for stack navigation
// const Stack = createStackNavigator();
// function LogoTitle(){
//   return(
//     <Image source={require('./img/logo.png')}
//     style={{
//       height:40,
//       width:300,
//       resizeMode:'contain',
//       alignSelf:'center'
//     }}
//     />
//   )
// }

// code for tab navigation
// const Tab = createBottomTabNavigator()

// code for drawer navigation

// const Drawer = createDrawerNavigator()
export default function App() {
  return (
    <>
      {/* // code for stack navigation */}
      {/* <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerStyle: { backgroundColor: '#333333' }, headerTintColor: '#fff', headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} options={{title:"MenuScreen",headerTitle:(props)=><LogoTitle {...props}/>}} />
          </Stack.Navigator>
          <LittleLemonFooter />
        </View>

      </NavigationContainer> */}
      {/* // code for tab navigation */}
      {/* <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Welcome') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home-outline';
              } else if (route.name === 'Login') {
                iconName = 'ios-enter';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="Login" component={LoginScreen} />
          <Tab.Screen name="Welcome" component={WelcomeScreen} />

        </Tab.Navigator>

      </NavigationContainer> */}

      {/* Code for drawer navigation */}
      <NavigationContainer>
        {/* <View style={styles.container}>
          <LittleLemonHeader />
          <Drawer.Navigator initialRouteName="Login" screenOptions={{
            headerStyle: { backgroundColor: '#333333' }, headerTintColor: '#fff', headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }} useLegacyImplementation>
            <Drawer.Screen name="Welcome" component={WelcomeScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
            <Drawer.Screen name="Menu" component={MenuScreen} options={{ title: "MenuScreen", headerTitle: (props) => <LogoTitle {...props} /> }} />
          </Drawer.Navigator>
          <LittleLemonFooter />
        </View> */}
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

