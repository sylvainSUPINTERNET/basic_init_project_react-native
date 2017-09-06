'use strict';


import React, {Component} from 'react';


import {
    Text,
    TextInput,
    View,
    Button,
    Alert,
    ProgressBarAndroid,
    AsyncStorage
} from 'react-native';

import NavBar from 'react-native-navbar';

import {combineReducers, createStore} from 'redux';
import {sessionReducer, sessionService} from 'redux-react-native-session';


export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nickname: "",
            password: "",
            passwordConfirmed: ""
        };


        //Getters
        this.getState = () => {
            return this.state;
        };

        this.getNickname = () => {
            return this.state.nickname
        };


        this.getPassword = () => {
            return this.state.password
        };


        this.getPasswordConfirmed = () => {
            return this.state.passwordConfirmed
        };


        //Setters


        //other REGISTER METHODES
        this.submitForm = () => {

            //Verification BASIC afin d'éviter de surcharger en requête API inutile le serveur
            if (this.getNickname().length < 3 || typeof this.getNickname() !== 'string' || this.getPassword().length < 6 || typeof this.getPassword() !== 'string' || this.getPasswordConfirmed() !== this.getPassword()) {

                Alert.alert(`Votre nom doit faire plus de 3 charactère, votre mot de passe doit faire plus de 6 caractères`);

            } else {

                //SI LA VERIF BASIC PASSE ALORS ON REQUETE LES VERIF COTE API PLUS APPROFONDIES
                //Creer un nouveau fichier dans api-pfe
                // creer une nouvelle classe PhoneUser.js (verif userExist) + requete MYSQL pour voir si il y un user
                // creer une nouvelle route sur app.js => get /api/phone/verifUser par exemple


                let nickname = this.getNickname();
                let password = this.getPassword();
                let confirmedPassword = this.getPasswordConfirmed();

                fetch(`http://10.0.2.2:8000/api/phone/userExist/${nickname}`, {method: "GET"}) //return json => exit: true si PAS USER sinon return plein deJSON si il existe
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.exist === 'no') {
                            //insertion si succès

                            fetch('http://10.0.2.2:8000/signUp', {
                                method: 'POST',
                                headers: ({
                                    'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
                                }),
                                body: `firstname=${nickname}&password=${password}&confirmPassword=${confirmedPassword}` // <-- Post parameters
                            }).then((response) => response.text()) //text() car on s'en fou de la reponse les verif sont deja faites
                                .then((responseText) => {
                                    Alert.alert('Enregistré avec succès !');

                                    // TO DO
                                    // REDIRECTION + SET UNE SESSION
                                    // CHANGER REGISTER DANS LE MENU EN LOGIN
                                    // RENDRE CETTE PAGE INCASSIBLE SI LA SESSION EXISTE


                                    //Session

                                })
                                .catch((error) => {
                                    console.warn(error);
                                    if (error !== '') {
                                        //ERROR registration
                                        Alert.alert('Erreur d\'enregistrement! ');
                                    }
                                });


                        } else {
                            Alert.alert(`${nickname} existe déjà !`);
                        }
                    })


                /*

                 fetch(`http://10.0.2.2:8000/api/phone/userExist/?firstname=${this.getNickname()}`, {method: "GET"})
                 .then((response) => response.json())
                 .then((responseData) => {
                 Alert.alert(responseData);
                 })
                 .catch((error) => {
                 console.warn(error);
                 Alert.alert("Error was occured, please try again !");
                 });

                 */


            }


            //SI AUCUNE ERREUR EST TROUVEE ALORS INSERER L4USER VIA LAPI + cree une session pour l'user + generer son token + redireciton + changement dans le menu


            /*
             let password = "";
             let confirmedPassword = "";
             let firstname = "";


             let responseTest;
             fetch('http://10.0.2.2:8000/signUp', {
             method: 'POST',
             headers: ({
             'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
             }),
             body: "firstname=sylvainExemple&password=exemple&confirmPassword=exemple" // <-- Post parameters
             }).then((response) => response.json())
             .then((responseText) => {
             console.log(responseTest = responseText);
             })
             .catch((error) => {
             console.warn(error);
             if (error !== '') {
             //ERROR
             Alert.alert('Error was occured ! Please retry to register');
             }


             //SUCCESS
             Alert.alert(`HELLO ${this.getNickname()} ${responseTest}`);

             });

             */

        }
    }

    render() {

        //MENU options
        const navigationOptions = {
            drawerLabel: 'Register',
            title: 'Inscrivez - vous !',

        };

        //Style naveBar
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
                    returnKeyLabel={"nickname"}

                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    returnKeyLabel={"password"}

                />
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(passwordConfirmed) => this.setState({passwordConfirmed})}
                    value={this.state.passwordConfirmed}
                    returnKeyLabel={"passwordConfirmed"}

                />
                <Text>
                    Votre pseudo : {this.getNickname()}
                    Votre password : {this.getPassword()}
                    Votre passwordConfriemd : {this.getPasswordConfirmed()}
                </Text>
                <Button title="registration" onPress={() => this.submitForm()}/>
            </View>
        );
    };


};



