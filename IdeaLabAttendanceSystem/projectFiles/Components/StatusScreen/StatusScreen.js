import { Text, View, Alert } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import axios from 'axios';

const baseAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

export class StatusScreen extends Component {

    endSession = async () => {
        const response = await baseAPI.post('posts/', {


            title: 'foo',
            body: 'bar',
            userId: 1,
        });
        if (response.status == 201) {
            this.props.navigation.navigate('Dashboard')
        }
        console.log(response.status)
    }


    render() {
        return (
            <View>
                <View style={{ backgroundColor: 'green', padding: 20, }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'white' }}>Active</Text>
                </View>
                <View style={{ padding: 10, }}>
                    <Text style={{ color: 'black', fontSize: 18 }}>Time Elapsed:</Text>
                    <Text style={{ textAlign: 'center', marginVertical: 30, fontSize: 50, color: 'black' }}>01:45 Hrs</Text>
                </View>
                <View style={{ padding: 20 }}>
                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, fontWeight: '500' }}>SessionId: <Text style={{ fontWeight: '400' }}>3rklnlk312</Text> </Text>
                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, fontWeight: '500' }}>Date: <Text style={{ fontWeight: '400' }}>18/05/2022</Text></Text>
                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, fontWeight: '500' }}>Start Time: <Text style={{ fontWeight: '400' }}>12:05:08 Hrs</Text></Text>

                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, fontWeight: '500' }}>Purpose: <Text style={{ fontWeight: '400' }}>3D printing, Laser Cutting</Text> </Text>
                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, fontWeight: '500' }}>Enrollment Id: <Text style={{ fontWeight: '400' }}>180110120001</Text> </Text>

                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, fontWeight: '500' }}>Name: <Text style={{ fontWeight: '400' }}>Darshan</Text> </Text>
                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, fontWeight: '500' }}>College: <Text style={{ fontWeight: '400' }}>GH Patel College of Engineering and Technology</Text> </Text>
                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, fontWeight: '500' }}>Branch: <Text style={{ fontWeight: '400' }}>Mechatronics</Text> </Text>
                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, fontWeight: '500' }}>Year: <Text style={{ fontWeight: '400' }}>2nd</Text> </Text>


                </View>
                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <Button
                        onPress={() => {
                            Alert.alert('AICTE Idealab', 'Are you sure you want to logout?',
                                [{
                                    text: "Cancel",
                                    onPress: () => console.log("Cancel Pressed"),
                                    style: "cancel"
                                },
                                { text: "OK", onPress: () => this.endSession() }])
                        }}
                        buttonStyle={{ backgroundColor: '#2957a4' }}
                        titleStyle={{ fontSize: 20 }}
                        containerStyle={{ width: '50%', borderRadius: 10 }}
                        title={'End Session'}
                    ></Button>
                </View>
            </View>
        )
    }
}

export default StatusScreen