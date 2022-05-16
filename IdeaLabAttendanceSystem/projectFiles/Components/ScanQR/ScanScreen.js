import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React, { Component } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Button } from 'react-native-elements';
import axios from 'axios';

const baseAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
export class ScanScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            Scannedurl: ''
        }
    }

    registerEntry= async()=>{
        const response=  await baseAPI.post('possts/',{


            title: 'foo',
            body: 'bar',
            userId: 1,
          });
          if(response.status  == 200){
              this.props.navigation.navigate('')
          }
        console.log(response.data)
    }

    onSuccess = e => {
        console.log(e.data)
        this.setState({Scannedurl: e.data})
    // this.registerEntry()

        // Linking.openURL(e.data).catch(err =>
        //   console.error('An error occured', err)
        // );
      };
  render() {
    return (

        <QRCodeScanner
        ref={(node)=> {this.scanner=node}}
        onRead={this.onSuccess}
        reactivate={true}
        reactivateTimeout= {5000}
        cameraTimeout={10000}
        flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
Scan QR for Entry
          </Text>
        }
        bottomContent={
            <View>
                <Text style={{fontSize:20, color:'black', marginVertical:10, paddingVertical:10}}>{this.state.Scannedurl}</Text>
            
            <Button
            onPress={()=>{
                this.registerEntry()
            }}
            containerStyle={{opacity:this.state.Scannedurl != ''?1:0.25}}
            buttonStyle={{backgroundColor:'#2957a4',}}
            title={'Proceed'}
            >

            </Button>
            </View>
        }
      />

    )
  }
}

export default ScanScreen

const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777'
    },
    textBold: {
      fontWeight: '500',
      color: '#000'
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
      padding: 16
    }
  });