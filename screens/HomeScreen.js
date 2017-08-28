'use strict';


import React, {Component} from 'react';


import {
    Text,
} from 'react-native';


export default class HomeScreen extends Component {


    static navigationOptions = {
        drawerLabel: 'Home',
        title: 'Accueil',

    };


    render() {
        return (
            <Text>
                Voici la page d'accueil
            </Text>
        );
    }
}