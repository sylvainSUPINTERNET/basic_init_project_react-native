'use strict';


import React, {Component} from 'react';


import {
    Text,
    View,
    TouchableHighlight,

} from 'react-native';



import {
    Transitioner
} from 'react-navigation'



export default class RandomScreen extends Component {


    //Drawer Menu Options
    static navigationOptions = {
        drawerLabel: 'TEST',
    };


    constructor(props) {
        super(props);

        this.state = {nickname: ""};

    };


    render() {

        return (
            <View>

                <Text>
                    RANDOM TEST ICI
                </Text>

            </View>

        );

    };


}
