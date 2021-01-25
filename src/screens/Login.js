import { Button, Input, Item, Text } from 'native-base';
import React, { useState } from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import logoApp from '../assets/chatLogo.png';

export default function Login(props) {
    const {setUserName} = props;
    const [name, setName] = useState('')

    const OnSubmit = () => {
        setUserName(name)
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View>
                <Image source={logoApp} resizeMode="contain" style={styles.logo}/>
            </View>
            <Item>
                <Input placeholder="Nombre del usuario" style={{color: "#fff"}} placeholderTextColor="grey" value={name} onChange={(e) => setName(e.nativeEvent.text)}/>
            </Item>
            <Button style={styles.btnLogin} onPress={OnSubmit}>
                <Text>Entrar</Text>
            </Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 50,
        marginVertical: 30
    },
    logo:{
        width: "100%",
        height: 200,
        marginBottom: 30
    },
    btnLogin: {
        marginTop: 40,
        justifyContent: 'center',
        backgroundColor: "#0098d3",
        width: "100%"
    }
})
