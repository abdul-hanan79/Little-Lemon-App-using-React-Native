
import react from 'react'
import { StyleSheet } from 'react-native'
import { Pressable } from 'react-native'
import { Text, View } from 'react-native'

const MenuScreen = ({navigation}) => {
    return (
        <View>
            <Text>Hello this is MenuScreen</Text>
         <Pressable onPress={()=>navigation.goBack()}><Text>Go back to welcome screen</Text></Pressable>
        </View>

    )
}
const styles = StyleSheet.create({
    buttonText: {
        color: "white"
    }
})


export default MenuScreen