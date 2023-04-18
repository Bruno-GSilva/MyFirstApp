import React from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";



export function Header() {
  const { goBack } = useNavigation()
  return (
    <View className="w-full m-4 border-b-2 border-slate-700 p-4 flex-row justify-between items-center bg-black">
      <View className="w-10 h-10 border-2 border-white rounded-full justify-center items-center scale-110">
        <Text className="text-green-500 text-xl font-bold">B</Text>
      </View>
      <Pressable 
        onPress={goBack} 
        className="w-20 px-2 py-3 border-2 border-yellow-500 justify-center items-center active:bg-yellow-500 rounded-md">
        <Text className="text-white">Sair</Text>
      </Pressable>
    </View>
  );
}