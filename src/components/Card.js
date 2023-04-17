import React, { useState } from "react";
import { Image, Pressable, Text, View} from "react-native";

import ModalInfo from "./ModalInfo";
import { ModalDelete } from "./ModalDelete";

import { useRoute } from "@react-navigation/native";

export default function Card(props) {
  const route = useRoute();
  const dataMode = route.params
  const [Info, setModalInfo] = useState(false);
  const [Delete, setModalDelete] = useState(false);

  if(!dataMode){
    return (
      <View className="w-auto h-48 flex-row px-4 py-6 my-2 mx-2 items-center border-2 rounded-xl bg-black shadow-2xl shadow-white border-yellow-500 overflow-hidden">
        {/* image anime */}
        <Pressable
          className="h-full w-32 mr-6 border-2 rounded-md border-white overflow-hidden active:border-yellow-500" 
          onPress={() => setModalInfo(!Info)}
          onLongPress={() => setModalDelete(!Delete)}>
          <Image
            source={{
              uri: `${!props.url
                ? "https://avatars.githubusercontent.com/u/40152459?v=4"
                : props.url
                }`,
            }}
            className="flex-1"
          />
          <ModalDelete open={Delete}/>
        </Pressable>
        {/* description anime */}
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
        {/* modal info */}
        <ModalInfo
          open={Info}
          quantidade={props.eps}
          status={props.status}
          launch={props.launch}
        />
      </View>
    );
  }
}
