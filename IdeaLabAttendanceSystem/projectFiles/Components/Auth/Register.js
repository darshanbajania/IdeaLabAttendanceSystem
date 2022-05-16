import { Text, View, TextInput, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native-elements'

export class Register extends Component {
  render() {
    return (
        <View style={{ backgroundColor: 'white', flex: 1,  alignItems:'center'}}>
        <Image
            style={{ height: 100, width: 100, marginVertical: 50 }}
            source={{ uri: "https://www.gcet.ac.in/assets/img/gcet_img/idea_lab.png" }}

        ></Image>
        <ScrollView 
        contentContainerStyle={{alignItems: 'center'}}
        style={{width:'100%', }}>

        <View style={{ width: '60%', }}>
            <Text style={{ color: 'black', fontSize: 18, marginBottom: 10 }}>Username</Text>

            <TextInput
                style={{ color: 'black', width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, borderWidth: 1, fontSize: 20, paddingLeft: 15 }}
                placeholderTextColor={'grey'}
                placeholder={''}
                >
            </TextInput>
        </View>
        <View style={{ width: '60%', marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 18, marginBottom: 10 }}>Email</Text>

            <TextInput
                style={{ color: 'black', width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, borderWidth: 1, fontSize: 20, paddingLeft: 15 }}
                placeholderTextColor={'grey'}
                placeholder={''}
                
                >
            </TextInput>
        </View>

        <View style={{ width: '60%', marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 18, marginBottom: 10 }}>Phone</Text>

            <TextInput
                style={{ color: 'black', width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, borderWidth: 1, fontSize: 20, paddingLeft: 15 }}
                placeholderTextColor={'grey'}
                placeholder={''}
                
                >
            </TextInput>
        </View>

        <View style={{ width: '60%', marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 18, marginBottom: 10 }}>College</Text>

            <TextInput
                style={{ color: 'black', width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, borderWidth: 1, fontSize: 20, paddingLeft: 15 }}
                placeholderTextColor={'grey'}
                placeholder={''}
                
                >
            </TextInput>
        </View>

        <View style={{ width: '60%', marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 18, marginBottom: 10 }}>Branch</Text>

            <TextInput
                style={{ color: 'black', width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, borderWidth: 1, fontSize: 20, paddingLeft: 15 }}
                placeholderTextColor={'grey'}
                placeholder={''}
                
                >
            </TextInput>
        </View>

        <View style={{ width: '60%', marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 18, marginBottom: 10 }}>Enrollment Id</Text>

            <TextInput
                style={{ color: 'black', width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, borderWidth: 1, fontSize: 20, paddingLeft: 15 }}
                placeholderTextColor={'grey'}
                placeholder={''}
                secureTextEntry={true}
                
                >
            </TextInput>
        </View>
        <View style={{ width: '60%', marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 18, marginBottom: 10 }}>College</Text>

            <TextInput
                style={{ color: 'black', width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, borderWidth: 1, fontSize: 20, paddingLeft: 15 }}
                placeholderTextColor={'grey'}
                placeholder={''}
                
                >
            </TextInput>
        </View>

        <View style={{ width: '60%', marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 18, marginBottom: 10 }}>Branch</Text>

            <TextInput
                style={{ color: 'black', width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, borderWidth: 1, fontSize: 20, paddingLeft: 15 }}
                placeholderTextColor={'grey'}
                placeholder={''}
                
                >
            </TextInput>
        </View>

        <View style={{ width: '60%', marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 18, marginBottom: 10 }}>Sem</Text>

            <TextInput
                style={{ color: 'black', width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, borderWidth: 1, fontSize: 20, paddingLeft: 15 }}
                placeholderTextColor={'grey'}
                placeholder={''}
                secureTextEntry={true}
                
                >
            </TextInput>
        </View>
        <View style={{ width: '60%', marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 18, marginBottom: 10 }}>Confirm Password</Text>

            <TextInput
                style={{ color: 'black', width: '100%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 10, borderWidth: 1, fontSize: 20, paddingLeft: 15 }}
                placeholderTextColor={'grey'}
                placeholder={''}
                secureTextEntry={true}
                >
            </TextInput>
        </View>

        <Button
            containerStyle={{ width: '50%', marginVertical: 40, }}
            buttonStyle={{ alignItems: 'center', borderRadius: 10, backgroundColor: '#2957a4' }}
            titleStyle={{ fontSize: 20, textAlign: 'center' }}
            title={'Login'}
            type={'solid'}
        />




            </ScrollView>
    </View>
    )
  }
}

export default Register