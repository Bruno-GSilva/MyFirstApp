import React from "react";
import { Pressable, Text, View } from "react-native";

function HomeScreen() {
  return (
    <View className="relative w-full h-screen bg-slate-600">
      {/* Header */}
      <View className="w-full p-4 flex-row justify-between items-center bg-black">
        <View className="w-10 h-10 border-2 border-white rounded-full justify-center items-center scale-110">
          <Text className="text-green-500 text-xl font-bold">B</Text>
        </View>
        <Pressable className="w-20 px-2 py-3 border-2 border-yellow-500 justify-center items-center active:bg-yellow-500 rounded-md">
          <Text className="text-white">Sair</Text>
        </Pressable>
      </View>
      {/* Grid */}
      <View className="w-full flex-row flex-wrap justify-center items-center p-2">
        <View className="w-32 h-full bg-yellow-500 border-2 border-black mr-2">
          <Text>image 01</Text>
        </View>
        <View className='gap-2'>
          <View className="w-60 h-48 bg-yellow-500 border-2 border-black">
            <Text> image 02</Text>
          </View>
          <View className="w-60 h-48  bg-yellow-500 border-2 border-black">
            <Text>image 03</Text>
          </View>
        <View className="w-60 h-48 bg-yellow-500 border-2 border-black mr-2">
          <Text>image 04</Text>
        </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
