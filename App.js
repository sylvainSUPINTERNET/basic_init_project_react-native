'use strict';

import React, {Component} from 'react';



import {
    AppRegistry,
} from 'react-native';

import {
    DrawerNavigator,
    Transitioner
} from 'react-navigation'


// HOME - accueil
import HomeScreen from './screens/HomeScreen';

//Connexion / Deconnexion / Inscription
import RegisterScreen from './screens/connection/RegisterScreen';

//test perso
import RandomScreen from './screens/test/RandomScreen';
import WelcomeText from "react-native/local-cli/templates/HelloNavigation/views/welcome/WelcomeText.android";



export default class AppEntry extends Component {
    constructor(props){
        super(props);

    }
    render(){
        return (
            <WelcomeText/>
        );
    }

}


/* MENU DRAWER */
const pfeAppMenu = DrawerNavigator({
    HomeScreen: {
        screen: HomeScreen
    },
    RegisterScreen: {
        screen: RegisterScreen,
    },
    RandomScreen: {
        screen: RandomScreen
    }

});



AppRegistry.registerComponent('pfe_phone', () => pfeAppMenu);
