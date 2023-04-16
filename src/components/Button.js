import React from 'react';
import { Text, Pressable } from 'react-native';

export default function Button(props) {
  return (
    <Pressable
        className="border-2 border-black w-40 h-10 justify-center items-center rounded-lg bg-yellow-500 m-4 active:bg-amber-500"
        onPress={props.route}>
        <Text className="text-white">{props.text}</Text>
  </Pressable>
  );
}