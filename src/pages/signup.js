import React from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { IconEmail, IconPassword, IconUsername } from '../assets';
import { FormButton } from '../components';
import FormInput from '../components/formInput';
import { cblack, cpurple, nextra, nregular } from '../utils';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';

const SignUp = ({navigation}) => {
    const stateSignup = useSelector(state => state.reducerSignup);
    const {username, email, password} = stateSignup;

    const dispatch = useDispatch();

    const onChangeText = (nameForm, value) => {
        dispatch({type: 'SET_STATE', nameForm, value});
    }

    const onSignupPress = async () => {
        try{
            if(username == '' || email == '' || password == ''){
                Alert.alert('Gagal Daftar', 'Form tidak boleh kosong!');
            }else{
                auth().createUserWithEmailAndPassword(email, password)
                .then((result) => {
                    dispatch({type: 'SET_STATE', nameForm: 'username', value: ''});
                    dispatch({type: 'SET_STATE', nameForm: 'email', value: ''});
                    dispatch({type: 'SET_STATE', nameForm: 'password', value: ''});
    
                    Alert.alert('Berhasil Daftar', 'Selamat anda berhasil daftar akun');
                    navigation.navigate('Signin');
                })
                .catch((err) => {
                    Alert.alert('Gagal Daftar', err.message);
                })
            }
        }catch(e){
            console.log(e);
        }
    }

    return(
        <ScrollView style={styles.containerPage}>
            <Text style={styles.logo}>covstatic</Text>

            <View style={{marginTop: 25}}>
                <Text style={styles.namePage}>Daftar Akun</Text>
                <Text style={styles.descPage}>Buat akun anda dan dapatkan informasi menganai statistik covid-19</Text>
            </View>

            <View style={{marginTop: 33}}>
                <FormInput 
                    mrgBottom={20} 
                    iconLabel={<IconUsername/>} 
                    label="Username"
                    value={username} 
                    onChangeText={(value) => onChangeText('username', value)}
                />

                <FormInput 
                    mrgBottom={20} 
                    iconLabel={<IconEmail/>} 
                    label="Email"
                    value={email} 
                    onChangeText={(value) => onChangeText('email', value)}
                />

                <FormInput 
                    mrgBottom={45} 
                    iconLabel={<IconPassword/>} 
                    label="Password"
                    value={password} 
                    onChangeText={(value) => onChangeText('password', value)}
                />

                <FormButton label="Daftar" isAction={onSignupPress}/>
            </View>

            <View style={styles.containerLink}>
                <Text style={styles.textLink}>Sudah punya akun? </Text>

                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                    <Text style={[{textDecorationLine: 'underline'}, styles.textLink]}>Masuk</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    containerPage: {
        backgroundColor: 'white', 
        paddingTop: 20,
        paddingHorizontal: 20
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