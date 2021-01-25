import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input.js';
import firebase from '../utils/firebase';
import 'firebase/database';
import moment from 'moment';
import { Body, Header, Title } from 'native-base';
import { map } from 'lodash';
import Message from '../components/Message.js';

export default function Chat(props) {

    const {userName} = props
    const [messages, setMessages] = useState([])
    const chatsScrollRef = useRef()
    
    console.log(messages)
    useEffect(() => {
        const chat = firebase.database().ref("general");
        chat.on("value", (snapshot) => {
            setMessages(snapshot.val())
        })
    }, [])

    useEffect(() => {
        chatsScrollRef.current.scrollTo({y: 1000000000000000000000000})
    }, [messages])

    const sendMessage = (message) => {
        const time = moment().format("hh:mm a")

        firebase.database().ref("general").push({
            userName,
            text: message,
            time
        })
    }

    return (
        <>
            <Header style={styles.header} iosBarStyle="light-content">
                <Body>
                    <Title style={{color:"#fff"}}>Chat App</Title>
                </Body>
            </Header>
            <View style={styles.content}>
                <ScrollView style={styles.chatView} ref={chatsScrollRef}>
                    {map(messages, (message, index) =>(
                        <Message key={index} message={message} name={userName}/>
                    ))}
                </ScrollView>
                <Input sendMessage={sendMessage}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent: "space-between"
    },
    header:{
        backgroundColor: "#16202b"
    },
    chatView:{
        backgroundColor: "#1b2734"
    }
})
