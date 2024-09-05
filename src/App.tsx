import React, { Component, PropsWithChildren, useState } from 'react'
import { Text, StyleSheet, View, ImageSourcePropType, Image, Button, Pressable } from 'react-native'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <Image style={styles.diceImage} source={imageUrl} />
  )
}

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rolldicetap = () => {

    let randomNumber = Math.floor(Math.random() * 6) + 1

  switch (randomNumber) {
    case 1:
      setDiceImage(DiceOne)
      break;
    case 2:
      setDiceImage(DiceTwo)
      break;
    case 3:
      setDiceImage(DiceThree)
      break;
    case 4:
      setDiceImage(DiceFour)
      break;
    case 5:
      setDiceImage(DiceFive)
      break;
    case 6:
      setDiceImage(DiceSix)
      break;
    default:
      setDiceImage(DiceOne)
      break;

  }
    ReactNativeHapticFeedback.trigger("effectTick", options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rolldicetap} style={styles.btnView}>
        <Text style={styles.btntxt}>Roll the dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2'
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  btnView:{
    borderColor: '#E5E0FF',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  btntxt: {
    fontSize: 20,
    color:'#8EA7E9',
    fontWeight: '800',
    textTransform: 'uppercase'
  }
})
