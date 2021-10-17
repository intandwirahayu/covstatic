import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconSplash} from '../assets/index';
import { nextra, nregular } from '../utils';
import { cpurple } from '../utils/palleteColors';

const Splashscreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Signin');
        }, 5000)
    }, []);

    return(
        <View style={styles.containerPage}>
            <View>
                <IconSplash/>
                
                <Text style={styles.nameApp}>covstatic</Text>
                <Text style={styles.descApp}>data akurat mengenai statistik covid-19</Text>
            </View>
        </View>
    )
}

export default Splashscreen;

const styles = StyleSheet.create({
    containerPage: {
        height: '100%',
        backgroundColor: cpurple,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nameApp: {
        fontFamily: nextra,
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        marginTop: 6
    },
    descApp: {
        fontFamily: nregular,
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        opacity: 0.8
    }
});