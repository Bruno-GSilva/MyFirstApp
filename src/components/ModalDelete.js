import React, { useState , useEffect} from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// export const globalState = {
//   boolean: true,
// };

export function ModalDelete({ open }) {

  const [deleteCard, setDeleteCard] = useState(true);

  // useEffect(() => {
  //   globalState.boolean = deleteCard;
  // }, [deleteCard]);

  if (open) {
    return (
      <Pressable
        className="absolute bottom-0 h-1/2 w-full justify-center items-center text-center bg-red-900 active:bg-amber-500" onLongPress={ ()=> setDeleteCard(!deleteCard)}>
        <Icon name="trash" size={32} />
      </Pressable>
    );
  }
}
