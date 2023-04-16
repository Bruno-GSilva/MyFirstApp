import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Modal from "./Modal";

export default function Card(props) {
  const [openModal, setOpenModal] = useState(false);
  const [deleteCard, setDeleteCard] = useState(false);
  // console.log(openModal)
  return (
    <View className="w-auto h-48 flex-row px-4 py-6 my-2 mx-2 items-center border-2 rounded-xl bg-black shadow-2xl shadow-white border-yellow-500 overflow-hidden">
      <Pressable
        className="h-full w-32 mr-6 border-2 rounded-md border-white overflow-hidden active:border-yellow-500"
        onPress={() => setOpenModal(!openModal)}
        onLongPress={deleteCard}>
        <Image
          source={{
            uri: `${
              !props.url
                ? "https://avatars.githubusercontent.com/u/40152459?v=4"
                : props.url
            }`,
          }}
          className="flex-1"
        />
        <Text className="text-center bg-amber-500">
          {!props.name ? "Nome do Anime" : props.name}
        </Text>
      </Pressable>
      <View className="w-48 overflow-y-hidden">
        <Text className="text-base font-semibold text-white">
          {!props.titule ? "Descrição do Anime" : props.titule}
        </Text>
        <Text className="text-sm text-slate-500">
          {!props.description
            ? "Substitute Soul Reaper Ichigo Kurosaki spends his days fighting against Hollows..."
            : props.description}
        </Text>
      </View>
      <Modal
        open={openModal}
        quantidade={props.eps}
        status={props.status}
        launch={props.launch}
      />
    </View>
  );
}
