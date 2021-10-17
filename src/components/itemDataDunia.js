import { useNavigation } from "@react-navigation/core";
import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { IconDunia } from "../assets/";
import { cblack, cgray, cpurple, nbold, nregular } from "../utils";

const ItemDataDunia = (props) => {
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.containerItem} onPress={() => navigation.navigate(props.goPage, {nameCountry: props.country})}>
            <IconDunia/>
            <Text style={styles.nameCountry}>{props.country}</Text>
            
            <View style={styles.containerLine}>
                <View style={styles.valueLine}/>
            </View>

            <View style={styles.containerContent}>
                <View>
                    <Text style={styles.titleContent}>Positif</Text>
                    <Text style={styles.titleContent}>Sembuh</Text>
                    <Text style={styles.titleContent}>Meninggal</Text>
                </View>

                <View>
                    <Text style={styles.countContent}>{props.positiv}</Text>
                    <Text style={styles.countContent}>{props.healed}</Text>
                    <Text style={styles.countContent}>{props.dead}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ItemDataDunia;

const styles = StyleSheet.create({
    containerItem: {
        width: 200,
        backgroundColor: cgray,
        borderRadius: 10,
        padding: 15,
        paddingBottom: 13,
        marginRight: 16
    },
    nameCountry: {
        fontFamily: nbold,
        fontSize: 13,
        color: cblack,
        marginVertical: 10
    },
    containerLine: {
        width: '100%',
        height: 3,
        borderRadius: 50,
        backgroundColor: '#C4C4C4',
    },
    valueLine: {
        width: '70%',
        height: 3,
        borderRadius: 50,
        backgroundColor: cpurple,
    },
    containerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    titleContent: {
        fontFamily: nbold,
        fontSize: 11,
        color: cblack,
        marginBottom: 6
    },
    countContent: {
        fontFamily: nregular,
        fontSize: 11,
        color: cblack,
        opacity: 0.8,
        marginBottom: 6,
        textAlign: 'right'
    }
});