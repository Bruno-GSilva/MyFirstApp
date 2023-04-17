import React, { useState } from "react";
import { Text, View, Pressable} from "react-native";

export default function ModalInfo({ open, quantidade, status, launch}) {
  const [counter, setCounter] = useState(0);

  if (open) {
    return (
      <View className="absolute w-48 right-0 h-full justify-center items-center mr-4 px-0 py-4 rounded-md  border-2 border-white bg-black">
        <View className="w-full flex-row justify-end items-center my-2 mr-4 gap-2">
          <Text className="text-md text-white text-center font-semibold">
            Status:{" "}
            {status === "Complete" ? (
              <Text className="text-green-500">{status}</Text>
            ) : (
              <Text className="text-red-500">{status}</Text>
            )}
          </Text>
          {/* <Pressable className="w-8 h-8 border-2 border-yellow-500 active:bg-amber-500"/> */}
        </View>
        <Text className="text-md text-white font-semibold">
          Lançamento: {!launch ? "???" : launch}
        </Text>
        <Text className="text-xl text-white font-normal">
          Episodios:{" "}
          <Pressable onPress={() => setCounter(counter + 1)}>
            <Text className="text-white font-normal text-xl top-[6px]">
              {counter}
            </Text>
          </Pressable>
          /{!quantidade ? "?" : quantidade}
        </Text>
      </View>
    );
  }
}
