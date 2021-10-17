import React, { useEffect } from 'react';
import axios from 'axios';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import { IconBeranda, IconMeninggal, IconNotif, IconPositif, IconSembuh, IconPositifGlobal, IconSembuhGlobal, IconMeninggalGlobal } from '../assets/icons';
import { ItemDataGlobal, ItemDataDunia, ItemDataIndonesia } from '../components';
import {nextra, cpurple, nbold, nregular, cyellow, cblack} from '../utils/index';
import { useDispatch, useSelector } from 'react-redux';

const Beranda = ({navigation}) => {
    const stateBeranda = useSelector(state => state.reduceBeranda);

    const { positif, sembuh, meninggal,
            positifGlobal, sembuhGlobal, meninggalGlobal, 
            dataDunia} = stateBeranda;

    const dispatch = useDispatch();

    useEffect(() => {
        getDataIndonesia();
        getDataGlobal();
        getDataDunia();
    },[]);

    const getDataIndonesia = async () => {
        try{
            await axios.get('https://api.kawalcorona.com/indonesia')
            .then((result) => {
                dispatch({type: 'SET_ITEM', nameItem: 'positif', valueItem: result.data[0].positif});
                dispatch({type: 'SET_ITEM', nameItem: 'sembuh', valueItem: result.data[0].sembuh});
                dispatch({type: 'SET_ITEM', nameItem: 'meninggal', valueItem: result.data[0].meninggal});
            })
            .catch((err) => {
                console.log(err);
            });
        }catch(e){
            console.log(e);
        }
    }

    const getDataDunia = async () => {
        try{
            await axios.get('https://covid-api.mmediagroup.fr/v1/cases')
            .then((result) => {
                dispatch({type: 'SET_STATE_WORLD', data: result.data})
            })
            .catch((err) => {
                console.log(err);
            });
        }catch(e){
            console.log(e);
        }
    }

    const getDataGlobal = async () => {
        try{
            //positif global
            await axios.get('https://api.kawalcorona.com/positif')
            .then((result) => {
                dispatch({type: 'SET_ITEM', nameItem: 'positifGlobal', valueItem: result.data.value})
            })
            .catch((err) => {
                console.log(err);
            });

            //sembuh global
            await axios.get('https://api.kawalcorona.com/sembuh')
            .then((result) => {
                dispatch({type: 'SET_ITEM', nameItem: 'sembuhGlobal', valueItem: result.data.value})
            })
            .catch((err) => {
                console.log(err);
            });

            //meninggal global
            await axios.get('https://api.kawalcorona.com/meninggal')
            .then((result) => {
                dispatch({type: 'SET_ITEM', nameItem: 'meninggalGlobal', valueItem: result.data.value})
            })
            .catch((err) => {
                console.log(err);
            });
        }catch(e){
            console.log(e);
        }
    }
    
    return(
        <ScrollView style={styles.containerPage}>
            <View style={styles.containerHeader}>
                <Text style={styles.logo}>covstatic</Text>

                <TouchableOpacity>
                    <IconNotif/>
                </TouchableOpacity>
            </View>

            <View style={styles.containerContent1}>  
                <View>
                    <Text style={styles.textOpening}>Selamat Datang!</Text>
                    <Text style={styles.descContent1}>dapatkan data statistik covid-19 disini</Text>

                    <View style={styles.containerButtonStart}>
                        <TouchableOpacity style={styles.touchStart} onPress={() => navigation.navigate('Dunia')}>
                            <Text style={styles.labelTouchStart}>Mulai</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <IconBeranda/>
            </View>

            <View style={{marginBottom: 25}}>
                <Text style={[{textAlign: 'center'}, styles.titleContainer]}>Data Indonesia</Text>

                <View style={styles.itemContent2}>
                    <ItemDataIndonesia iconData={<IconPositif/>} dataCount={positif} dataName="Total Positif"/>
                    <ItemDataIndonesia iconData={<IconSembuh/>} dataCount={sembuh} dataName="Total Sembuh"/>
                    <ItemDataIndonesia iconData={<IconMeninggal/>} dataCount={meninggal} dataName="Total Meninggal"/>
                </View>
            </View>

            <View style={{marginBottom: 25}}>
                <Text style={styles.titleContainer}>Data Dunia</Text>
                
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        Object.entries(dataDunia).map((itemDunia, index) => {
                            if(index < 5){
                                return(
                                    <ItemDataDunia 
                                        key={index} 
                                        country={itemDunia[1].All.country} 
                                        positiv={itemDunia[1].All.confirmed} 
                                        healed={itemDunia[1].All.recovered} 
                                        dead={itemDunia[1].All.deaths}
                                        goPage='DetailDataDunia'
                                    />
                                )
                            }
                        })
                    }
                </ScrollView>
            </View>

            <View style={{marginBottom: 50}}>
                <Text style={styles.titleContainer}>Data Global</Text>

                <View>
                    <ItemDataGlobal iconData={<IconPositifGlobal/>} titleData="Total Positif" countData={positifGlobal}/>
                    <ItemDataGlobal iconData={<IconSembuhGlobal/>} titleData="Total Sembuh" countData={sembuhGlobal}/>
                    <ItemDataGlobal iconData={<IconMeninggalGlobal/>} titleData="Total Meninggal" countData={meninggalGlobal}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default Beranda;

const styles = StyleSheet.create({
    containerPage: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: 'white'
    },
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    logo: {
        fontFamily: nextra,
        fontSize: 18,
        color: cpurple
    },
    containerContent1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: cpurple,
        borderRadius: 10,
        padding: 20,
        paddingBottom: 24,
        marginBottom: 25
    },
    textOpening: {
        fontFamily: nbold,
        fontSize: 18,
        color: 'white'
    },
    descContent1: {
        fontFamily: nregular,
        fontSize: 11.3,
        color: 'white',
        opacity: 0.8,
        marginBottom: 20
    },
    containerButtonStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    touchStart: {
        backgroundColor: cyellow,
        paddingVertical: 6.5,
        paddingHorizontal: 20,
        borderRadius: 7,
    },
    labelTouchStart: {
        fontFamily: nregular,
        fontSize: 11,
        color: cblack,
        textAlign: 'center'
    },
    titleContainer: {
        fontFamily: nbold,
        fontSize: 15,
        color: cblack,
        marginBottom: 20
    },
    itemContent2: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },
    itemContent3: {
        
    }
});