'use strict';


import React, {Component} from 'react';


import {
    Text,
    TextInput,
    View,
} from 'react-native';

import NavBar from 'react-native-navbar';





export default class LoginScreen extends Component {
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

    };

    static navigationOptions = {
        drawerLabel: 'Login',
        title: 'Connecté vous !',

    };


    render() {

        const screenConfigNavbar = {
            title: 'Login',
        };

        const screenConfigNavbarButtonLeft = {
            title: 'Accueil',
            handler: () => this.props.navigation.navigate('HomeScreen'),
        };

        return (
            <View>
                <NavBar title={screenConfigNavbar} leftButton={screenConfigNavbarButtonLeft} />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(nickname) => this.setState({nickname})}
                    value={this.state.nickname}
                />
                <Text>
                    Votre pseudo : {this.getNickname()}
                </Text>
            </View>
        );
    };


}