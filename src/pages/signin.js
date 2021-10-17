import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { IconEmail, IconPassword } from '../assets';
import { FormButton, FormInput } from '../components';
import { cblack, cpurple, nextra, nregular } from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';

const SignIn = ({navigation}) => {
    const stateSignin = useSelector(state => state.reducerSignin);
    const {email, password} = stateSignin;

    const dispatch = useDispatch();

    const onChangeText = (nameForm, value) => {
        dispatch({type: 'SET_STATE', nameForm, value});
    }

    const onSigninPress = async () => {
        try{
            if(email == '' || password == ''){
                Alert.alert('Gagal Masuk', 'Form tidak boleh kosong!');
            }else{
                auth().signInWithEmailAndPassword(email, password)
                .then((result) => {
                    dispatch({type: 'SET_STATE', nameForm: 'email', value: ''});
                    dispatch({type: 'SET_STATE', nameForm: 'password', value: ''});

                    Alert.alert('Berhasil Masuk', 'Selamat anda berhasil masuk akun');
                    navigation.navigate('MainApp');
                })
                .catch((err) => {
                    Alert.alert('Gagal Masuk', err.message);
                })
            }
        }catch(e){
            console.log(e);
        }
    }

    return(
        <ScrollView style={styles.containerPage}>
            <Text style={styles.logo}>covstatic</Text>

            <View style={{marginTop: 50}}>
                <Text style={styles.namePage}>Selamat Datang!</Text>
                <Text style={styles.descPage}>Masuk ke akun anda dan dapatkan informasi mengenai statistik covid-19</Text>
            </View>

            <View style={{marginTop: 50}}>
                <FormInput 
                    mrgBottom={30} 
                    iconLabel={<IconEmail/>} 
                    label="Email" 
                    value={email} 
                    onChangeText={(value) => onChangeText('email', value)}
                />

                <FormInput 
                    mrgBottom={55} 
                    iconLabel={<IconPassword/>} 
                    label="Password" 
                    value={password} 
                    onChangeText={(value) => onChangeText('password', value)}
                />

                <FormButton label="Masuk" isAction={onSigninPress}/>
            </View>

            <View style={styles.containerLink}>
                <Text style={styles.textLink}>Belum punya akun? </Text>

                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={[{textDecorationLine: 'underline'}, styles.textLink]}>Daftar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    containerPage: {
        backgroundColor: 'white', 
        padding: 20
    },
    logo: {
        fontFamily: nextra,
        fontSize: 18,
        color: cpurple,
        textAlign: 'center'
    },
    namePage: {
        fontFamily: nextra,
        fontSize: 20,
        color: cblack,
        marginBottom: 7
    },
    descPage: {
        width: '90%',
        fontFamily: nregular,
        fontSize: 13,
        color: cblack
    },
    containerLink: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    textLink: {
        fontFamily: nregular,
        fontSize: 13,
        color: cblack
    }
});