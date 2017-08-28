'use strict';


import React, {Component} from 'react';


import {
    Text,
    TextInput,
    View,
    Button,
    Alert
} from 'react-native';

import NavBar from 'react-native-navbar';


export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {nickname: ""};


        //Getters
        this.getState = () => {
            return this.state;
        };

        this.getNickname = () => {
            return this.state.nickname
        };


        //Setters


        //other

        this.submitForm = () => {
            Alert.alert(`HELLO ${this.getNickname()}`);
        }



    };

    static navigationOptions = {
        drawerLabel: 'Register',
        title: 'Inscrivez - vous !',

    };


    render() {

        const screenConfigNavbar = {
            title: 'Register',
        };

        const screenConfigNavbarButtonLeft = {
            title: 'Accueil',
            handler: () => this.props.navigation.navigate('HomeScreen'),
        };


        return (
            <View>
                <NavBar title={screenConfigNavbar} leftButton={screenConfigNavbarButtonLeft}/>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(nickname) => this.setState({nickname})}
                    value={this.state.nickname}
                    returnKeyLabel = {"nickname"}

                />
                <Text>
                    Votre pseudo : {this.getNickname()}
                </Text>
                <Button title="registration" onPress={() => this.submitForm()}/>
            </View>
        );
    };


}