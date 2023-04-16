import React from "react";
import { Image, Pressable, Text, View } from "react-native";

function Card() {
  return (
    <View className="w-auto h-48 flex-row px-4 py-6 my-2 mx-2 items-center border-2 rounded-xl bg-black shadow-2xl shadow-white border-yellow-500 overflow-hidden">
      <Pressable className="h-full w-32 mr-6 border-2 rounded-md border-white overflow-hidden active:border-yellow-500">
        <Image
          source={{
            uri: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/251524e3b5517b689317437d881eccf0.jpe",
          }}
          className="flex-1"
        />
        <Text className="text-center bg-amber-500">Nome do Anime</Text>
      </Pressable>
      <View className="w-48 overflow-y-hidden">
        <Text className='text-base font-semibold text-white'>Descrição do Anime</Text>
        <Text className='text-sm text-slate-500'>loremsksdkjakjsdhkahsdkhaksjhdkjahskjdhkjahskdjhakjshdjkhajkshdkjahjsdhkajhsjdkhakjhsdkjhajkshdkjashdjkhasdalksjdlkajs...</Text>
      </View>
    </View>
  );
}

export default Card;
