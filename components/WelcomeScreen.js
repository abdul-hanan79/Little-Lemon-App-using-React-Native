import * as React from 'react';
import { Pressable } from 'react-native';
import { StyleSheet, View, Image, Text } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (

    <View style={styles.container}>
      <Image source={require('../assets/little-lemon-logo.png')}
        style={{
          height: 400,
          width: 300,
          resizeMode: 'contain',
          alignSelf: 'center'
        }}
      />
      <Text style={styles.text}>Little Lemon, your local Mediterranean Bistro</Text>

      <Pressable onPress={() => { navigation.navigate('Subscribe') }} >
        <Text style={styles.btn}>Newsletters</Text>
      </Pressable>
    </View>

  );
};
const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:10,
  },
  text: {
    color: 'black',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  btn: {
    backgroundColor: 'green',
    color: "white",
    fontSize: '16px',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 12
  }
})
export default WelcomeScreen;
