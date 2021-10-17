import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { IconMenuBeranda } from '../assets';
import { cpurple } from '../utils';
import ItemBottomTab from './itemBottomTab';


const BottomTab = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.containerMenu}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <ItemBottomTab key={index} onPress={onPress} onLongPress={onLongPress} isFocused={isFocused} label={label}/>
        );
      })}
    </View>
  );
}

export default BottomTab;

const styles = StyleSheet.create({
  containerMenu: { 
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: cpurple,
    paddingVertical: 18
  }
})
