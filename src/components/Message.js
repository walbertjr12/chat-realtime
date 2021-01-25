import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import letterColors from '../utils/letterColors';

export default function Message(props) {
    const {message: {userName, text, time}, name} = props;
    const [bgColorLetter, setBgColorLetter] = useState(null)
    const thisIsMe = name === userName;

    useEffect(() => {
        const char = userName.trim()[0].toUpperCase();
        const indexLetter = char.charCodeAt() - 65;
        setBgColorLetter(letterColors[indexLetter])
        console.log(letterColors[indexLetter])
    }, [])

    const conditionalStyle = {
        container:{
            justifyContent: thisIsMe ? 'flex-end' : 'flex-start'
        },
        viewMessage: {
            backgroundColor: thisIsMe ? '#f0f0f1' : '#4b86f0'
        },
        message: {
            color: thisIsMe ? "#000" : "#fff",
            // textAlign: thisIsMe ? "right" : "left"
        }
    }

    return (
        <View style={[styles.container, conditionalStyle.container]}>
           {!thisIsMe && <View style={[styles.letterView, {backgroundColor: `rgb(${bgColorLetter})`}]}>
                <Text style={styles.letter}>{userName.substr(0,1).toUpperCase()}</Text>
            </View>}
            <View style={[styles.viewMessage, conditionalStyle.viewMessage]}>
                <Text style={[styles.message, conditionalStyle.message]}>{text}</Text>
                <Text style={[styles.time, thisIsMe ? styles.timeRight : styles.timeLeft]}>{time}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        margin: 5,
        alignItems: "center",
    },
    letterView:{
        height: 35,
        width: 35,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        backgroundColor: "#f00"
    },
    letter:{
        fontSize: 18,
        color: "#fff"
    },
    viewMessage:{
        borderRadius: 20,
        minWidth: "40%",
        minHeight: 35,
        maxWidth: "80%"
    },
    message: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        paddingBottom: 20
    },
    time:{
        fontSize: 10,
        position: 'absolute',
        bottom: 5,
        right: 10
    },
    timeRight:{
        color: "#000",
    },
    timeLeft:{
        color: "#fff",
    }
})
