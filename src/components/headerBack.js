import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { IconArrowLeft} from '../assets';
import {cblack, nextra} from '../utils';

const HeaderBack = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.touchBack} onPress={() => navigation.goBack()}>
                <IconArrowLeft />
            </TouchableOpacity>

            <View style={styles.containerNamePage}>
                <Text style={styles.titlePage}>{props.namePage}</Text>
            </View>
        </View>
    );
};

export default HeaderBack;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    touchBack: {
        width: '10%',
        paddingVertical: 10
    },
    containerNamePage: {
        width: '90%',
    },
    titlePage: {
        fontFamily: nextra,
        fontSize: 18,
        color: cblack,
        textAlign: 'center'
    },
});
