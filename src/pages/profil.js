import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconLogout, IconProfilAvatar} from '../assets';
import { cblack, cgray, cpurple, cyellow, nbold, nregular } from '../utils';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

const Profil = ({navigation}) => {
    const stateProfil = useSelector(state => state.reducerProfil);
    const dispatch = useDispatch();

    useEffect(() => {
        const useInfo = auth().currentUser;
        dispatch({type: 'SET_STATE', nameForm: 'email', value: useInfo.email});
    }, []);

    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.header}>
                <View style={styles.containerAvatar}>
                    <IconProfilAvatar/>
                </View>

                <View style={styles.containerInfoUser}>
                    <Text style={styles.nameUser}>Hello!</Text>
                    <Text style={styles.emailUser}>{stateProfil.email}</Text>
                </View>
            </View>

            <View style={styles.containerContent}>
                <Text style={styles.titleContainer}>Ingin meninggalkan akun?</Text>
                
                <TouchableOpacity style={styles.touchLogout} onPress={() => navigation.replace('Signin')}>
                    <IconLogout/>
                    <Text style={styles.titleTouch}>Keluar Akun</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Profil;

const styles = StyleSheet.create({
    header: {
        height: 170,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: cpurple,
    },
    containerAvatar: {
        width: 68,
        height: 68,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        backgroundColor: cyellow,
    },
    nameUser: {
        fontFamily: nbold,
        fontSize: 19,
        color: 'white',
        marginBottom: 2
    },
    emailUser: {
        fontFamily: nregular,
        fontSize: 13,
        color: 'white',
        opacity: 0.8,
    },
    containerContent: {
        padding: 20,
        paddingBottom: 28,
        borderRadius: 10,
        marginHorizontal: 20,
        borderWidth: 1.5,
        borderColor: cgray,
        borderRadius: 20,
        marginVertical: 50
    },
    titleContainer: {
        fontFamily: nbold,
        fontSize: 15,
        color: cblack,
        textAlign: 'center',
        marginBottom: 25
    },
    touchLogout: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        backgroundColor: cgray,
    },
    titleTouch: {
        fontFamily: nbold,
        fontSize: 15,
        color: '#F14A4A',
        marginLeft: 15
    }
})
