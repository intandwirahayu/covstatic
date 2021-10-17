import axios from 'axios';
import React, { useEffect } from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {HeaderMain, ItemRegionProvinsi} from '../components';

const DataProvinsi = () => {
    const stateDataProvinsi = useSelector(state => state.reducerProvinsi);
    const dispatch = useDispatch();

    useEffect(() => {
        getDataProvinsi();
    },[]);

    const getDataProvinsi = async () => {
        try{
            await axios.get('https://data.covid19.go.id/public/api/prov.json')
            .then((result) => {
                dispatch({type: 'SET_SINGLE_STATE', keyItem: 'dataProvinsi', valueItem: result.data.list_data});
            })
            .catch((err) => {
                console.log(err);
            })
        }catch(err){
            console.log(err);
        }
    }

    const {dataProvinsi} = stateDataProvinsi;

    return(
        <ScrollView style={styles.containerPage}>
            <HeaderMain namePage="Data Provinsi"/>

            <View style={styles.containerItemData}>
                {
                    dataProvinsi.map((itemData) => {
                        return(
                            itemData.map((item, index) => {
                                return(
                                    <ItemRegionProvinsi 
                                        key={index}
                                        region={item.key} 
                                        positiv={item.jumlah_kasus} 
                                        healed={item.jumlah_sembuh} 
                                        dead={item.jumlah_meninggal} 
                                        goPage="DetailDataProvinsi"
                                        allData={item}
                                    />
                                )
                            })
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default DataProvinsi;

const styles = StyleSheet.create({
    containerPage: {
        padding: 20,
        paddingTop: 12,
        backgroundColor: 'white'
    },
    containerItemData: {
        width: '100%', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap',
        marginBottom: 50
    }
});