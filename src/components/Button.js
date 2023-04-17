import React from 'react';
import { Text, Pressable } from 'react-native';

export default function Button(props) {
  return (
    <Pressable
        className="border-2 border-black h-10 justify-center items-center rounded-lg bg-yellow-500 my-4 active:bg-amber-500"
        onPress={props.route}>
        <Text className="text-white m-2">{props.text}</Text>
  </Pressable>
  );
}