import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { Button } from 'react-native-elements'
export class Home extends Component {
  render() {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
      <Image
        style={{ height: 200, width: 200 }}
        source={{ uri: "https://www.gcet.ac.in/assets/img/gcet_img/idea_lab.png" }}

      ></Image>
      <Button
        onPress={() => {
          this.props.navigation.navigate('Login')
        }}
        containerStyle={{ backgroundColor: '#2957a4', width: '50%', color: 'white', marginTop: 50 }}
        title="Login"
        titleStyle={{ color: 'white', fontSize: 20 }}
        type="Solid"
      />
      <Button
        onPress={() => {
          this.props.navigation.navigate('Register')
        }}
        buttonStyle={{ borderColor: '#2957a4' }}
        containerStyle={{ width: '50%', color: 'white', marginTop: 20 }}
        title="Register"
        titleStyle={{ color: '#2957a4', fontSize: 20 }}
        type="outline"
      />
      <Text style={{ color: 'white' }}>Home</Text>
    </View>
    )
  }
}

export default Home