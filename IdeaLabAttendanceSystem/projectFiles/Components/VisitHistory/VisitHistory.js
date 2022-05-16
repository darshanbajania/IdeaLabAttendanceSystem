import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios';

const baseAPI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
export class VisitHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visits: [],
            showModal: false
        }
    }

    getVisitHistory = async () => {
        const response = await baseAPI.get('posts/');
        this.setState({ visits: response.data })
        console.log(response.data)
    }
    componentDidMount() {
        this.getVisitHistory();
    }


    render() {
        return (
            <View>
                <Modal
                    style={{}}
                    transparent={true}
                    onRequestClose={() => { this.setState({ showModal: false }) }}
                    visible={this.state.showModal}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{ backgroundColor: 'white', width: '90%', height: '75%', borderRadius: 10, elevation: 5 }}>
                            <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 20, color: '#2957a4' }}>IdeaLab Visit Details</Text>
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
                        </View>
                    </View>
                </Modal>
                <Text style={{ textAlign: 'center', paddingVertical: 20, color: 'white', fontSize: 22, backgroundColor: '#2957a4' }}>Your Previous Visits</Text>
                <View>
                    <ScrollView style={{ padding: 20, backgroundColor: 'white', height: 700 }}>
                        {
                            this.state.visits.length != 0 ?
                                this.state.visits.map((visit, index) => {
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => { this.setState({ showModal: true }) }}
                                            style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginBottom: 20, elevation: 5, margin: 10 }}>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>

                                                <Text style={{ fontSize: 20, color: 'black' }}>Sid: 1kwef24124d</Text>
                                                <Text>12/05/2022</Text>
                                            </View>
                                            <Text style={{ fontSize: 18 }}>3D printing, Laser Cutting, 3D printing</Text>
                                        </TouchableOpacity>
                                    )
                                })
                                : <Text style={{ textAlign: 'center', fontSize: 25 }}>No Details Found</Text>
                        }

                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default VisitHistory