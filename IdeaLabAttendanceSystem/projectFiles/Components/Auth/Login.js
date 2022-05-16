import { Text, View, Image, TextInput } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native-elements'

export class Login extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1, alignItems: 'center' }}>
                <Image
                    style={{ height: 200, width: 200, marginVertical: 50 }}
                    source={{ uri: "https://www.gcet.ac.in/assets/img/gcet_img/idea_lab.png" }}

                ></Image>
                <View style={{ width: '60%', }}>
                    <Text style={{ color: 'black', fontSize: 18, marginBottom: 10 }}>Username</Text>

                    <TextInput
                        style={{ color: 'black', width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, borderWidth: 1, fontSize: 20, paddingLeft: 15 }}
                        placeholderTextColor={'grey'}
                        placeholder={''}
                        con
                    >
                    </TextInput>
                </View>
                <View style={{ width: '60%', marginTop: 20 }}>
                    <Text style={{ color: 'black', fontSize: 18, marginBottom: 10 }}>Password</Text>

                    <TextInput
                        style={{ color: 'black', width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, borderWidth: 1, fontSize: 20, paddingLeft: 15 }}
                        placeholderTextColor={'grey'}
                        placeholder={''}
                        secureTextEntry={true}
                        con
                    >
                    </TextInput>
                </View>

                <Button
                    onPress={() => {
                        this.props.navigation.navigate('Dashboard')
                    }}
                    containerStyle={{ width: '50%', marginTop: 40, }}
                    buttonStyle={{ alignItems: 'center', borderRadius: 10, backgroundColor: '#2957a4' }}
                    titleStyle={{ fontSize: 20, textAlign: 'center' }}
                    title={'Login'}
                    type={'solid'}
                />




            </View>
        )
    }
}

export default Login