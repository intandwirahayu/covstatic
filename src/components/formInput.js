import React, {useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { cblack, cgray, nbold, nregular } from '../utils';
import { IconHide, IconShow } from '../assets';
import { useDispatch, useSelector } from 'react-redux';

const FormInput = (props) => {
    const showData = useSelector(state => state.reducerSignin.showData);
    const dispatch = useDispatch();

    const changeShowData = () => {
        dispatch({type: 'SET_SHOW_DATA', valueShow: !showData});
        Icon();
    }

    const Icon = () => {
        if(showData == false) return <IconHide/>;
        if(showData == true) return <IconShow/>;
    }

    return(
        <View style={{marginBottom: props.mrgBottom}}>
            <View style={styles.containerLabel}>
                {props.iconLabel}
                <Text style={styles.label}>{props.label}</Text>
            </View>

            {
                props.label !== 'Password' ?
                    (
                        <TextInput style={styles.textInput} value={props.value} onChangeText={props.onChangeText} secureTextEntry={false}/>
                    )
                :
                    (
                        <View style={styles.containerInput}>
                            <TextInput
                                style={[{width: '87.5%'}, styles.textInput]}
                                value={props.value} 
                                onChangeText={props.onChangeText}
                                secureTextEntry={showData}
                            />

                            <TouchableOpacity style={styles.touchIconInput} onPress={() => changeShowData()}>
                                <Icon/>
                            </TouchableOpacity>
                        </View>
                    )
            }
            
        </View>
    )
};

export default FormInput;

const styles = StyleSheet.create({
    containerLabel: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        marginBottom: 10
    },
    label: {
        fontFamily: nbold,
        fontSize: 13,
        color: cblack,
        marginLeft: 10
    },
    textInput: {
        backgroundColor: cgray,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontFamily: nregular,
        fontSize: 13,
        color: cblack,
    },
    containerInput: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: cgray,
        borderRadius: 10
    },
    touchIconInput: {
        backgroundColor: cgray,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 7,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
})
