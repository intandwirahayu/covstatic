import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconMenuBeranda, IconMenuBerandaActiv, IconMenuDunia, IconMenuDuniaActiv, IconMenuProfil, IconMenuProfilActiv, IconMenuProvisi, IconMenuProvisiActiv } from '../assets'
import { cpurple, nbold } from '../utils'

const ItemBottomTab = ({onPress, onLongPress, isFocused, label}) => {
    const Icon = () => {
        if(label == 'Beranda') return isFocused ? <IconMenuBerandaActiv/> : <IconMenuBeranda/>;
        if(label == 'Dunia') return isFocused ? <IconMenuDuniaActiv/> : <IconMenuDunia/>;
        if(label == 'Provinsi') return isFocused ? <IconMenuProvisiActiv/> : <IconMenuProvisi/>;
        if(label == 'Profil') return isFocused ? <IconMenuProfilActiv/> : <IconMenuProfil/>;
    }

    return (
      <TouchableOpacity style={styles.containerItem(isFocused)} onPress={onPress} onLongPress={onLongPress}>
        <Icon/>

        <Text style={styles.titleButton(isFocused)}>{label}</Text>
      </TouchableOpacity>
    )
}

export default ItemBottomTab;

const styles = StyleSheet.create({
  containerItem: (isFocused) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    backgroundColor: isFocused ? 'white' : cpurple
  }),
  titleButton: (isFocused) => ({
    fontFamily: nbold,
    fontSize: 11,
    color: isFocused ? cpurple : 'white',
    marginLeft: 7
  })
})
