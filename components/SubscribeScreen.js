import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import { TextInput } from 'react-native';
import { Image } from 'react-native';
import { View, Text } from 'react-native';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const handlePress = () => {
    // console.log("hello");
    Alert.alert("hello")

  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/little-lemon-logo-grey.png')}
        style={{
          height: 400,
          width: 300,
          resizeMode: 'contain',
          alignSelf: 'center'
        }}

      />
      <Text>
        Subscribe to our newsletter for our lastest delicious recepies!
      </Text>

      <TextInput
        style={{ height: 30, width: 300, borderColor: 'gray', borderWidth: 1 }} />
      <Pressable onPress={handlePress}>
        <Text style={styles.btn}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  text: {
    color: 'black',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  btn: {
    backgroundColor: 'grey',
    color: "white",
    fontSize: '16px',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 12
  }
})
export default SubscribeScreen;
