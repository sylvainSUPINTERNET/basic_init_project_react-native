'use strict';


import React, {Component} from 'react';


import {
    Text,
} from 'react-native';


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);


    };

    static navigationOptions = {
        drawerLabel: 'Login',
        title: 'Connecté vous !',

    };


    render() {
        return (
            <Text>
                Ma page Login
            </Text>
        );
    };


}