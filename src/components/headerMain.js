import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {cblack, nextra} from '../utils';

const HeaderMain = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.titlePage}>{props.namePage}</Text>
        </View>
    );
};

export default HeaderMain;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    titlePage: {
        fontFamily: nextra,
        fontSize: 18,
        color: cblack,
        textAlign: 'center'
    },
});
