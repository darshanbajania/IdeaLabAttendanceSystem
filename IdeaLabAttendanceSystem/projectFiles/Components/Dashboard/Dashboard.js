import { Text, View, Image, Alert } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native-elements'

export class Dashboard extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
                <Text style={{ color: '#2957a4', fontSize: 30, marginVertical: 20, textAlign: 'center', width: '80%' }}>Welcome to AICTE IdeaLab</Text>
                <Image
                    style={{ height: 100, width: 100, marginVertical: 20 }}
                    source={{ uri: "https://www.gcet.ac.in/assets/img/gcet_img/idea_lab.png" }}

                ></Image>
                <View>

                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, textAlign: 'left', width: '80%' }}>Username: abc@gmail.com</Text>
                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, textAlign: 'left', width: '80%' }}>College: GCET</Text>
                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, textAlign: 'left', width: '80%' }}>Branch: Mechatronics</Text>
                    <Text style={{ color: 'black', fontSize: 20, marginVertical: 5, textAlign: 'left', width: '80%' }}>Enrollment id: 180110120001</Text>
                </View>

                <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 50 }}>
                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('ScanScreen')
                        }}
                        containerStyle={{ width: '40%', borderRadius: 5, }}
                        buttonStyle={{ backgroundColor: '#2957a4' }}
                        titleStyle={{ fontSize: 20 }}
                        title={'Scan'}
                    />
                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('VisitHistory')
                        }}
                        containerStyle={{ width: '40%', borderRadius: 5, }}
                        buttonStyle={{ backgroundColor: '#2957a4' }}
                        titleStyle={{ fontSize: 20 }}
                        title={'Visit Logs'}
                    />
                </View>
                <Button
                    onPress={() => {
                        Alert.alert('AICTE Idealab', 'Are you sure you want to logout?',
                            [{
                                text: "Cancel",
                                onPress: () => console.log("Cancel Pressed"),
                                style: "cancel"
                            },
                            { text: "OK", onPress: () => this.props.navigation.navigate('Home') }])
                    }}
                    containerStyle={{ width: '40%', borderRadius: 5, marginTop: 30, borderWidth: 1, borderColor: '#2957a4' }}
                    buttonStyle={{}}
                    titleStyle={{ fontSize: 20 }}
                    title={'Logout'}
                    type={'outline'}
                >

                </Button>
            </View>
        )
    }
}

export default Dashboard