import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export function ModalDelete({ open }) {
    const { navigate } = useNavigation()
    const [deleteCard, setDeleteCard] = useState(false)
        if (open) {
            return (
                <Pressable className="absolute bottom-0 h-1/2 w-full justify-center items-center text-center bg-red-900 active:bg-amber-500" onLongPress={()=> navigate("Home", {data: deleteCard}) & setDeleteCard(true) }>
                    <Icon name="trash" size={32} />
                </Pressable>
                )
        }   
}