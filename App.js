'use strict';

import React, {Component} from 'react';


import {
    AppRegistry,
} from 'react-native';

import {
    DrawerNavigator,
} from 'react-navigation'


import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';



export default class AppEntry extends Component {
    constructor(props){
        super(props);

    }


    render(){


    }

}


/* MENU DRAWER */
const pfeAppMenu = DrawerNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    LoginScreen: {
        screen: LoginScreen,
    },

});



AppRegistry.registerComponent('pfe_phone', () => pfeAppMenu);
