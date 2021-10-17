import { useNavigation } from "@react-navigation/core";
import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { cpurple, nextra } from "../utils";

const FormButton = (props) => {
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.touchButton} onPress={() => props.isAction()}>
            <Text style={styles.labelButton}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchButton: {
        backgroundColor: cpurple,
        padding: 16,
        borderRadius: 10
    },
    labelButton: {
        fontFamily: nextra,
        fontSize: 14,
        color: 'white',
        textAlign: 'center'
    }
});

export default FormButton;