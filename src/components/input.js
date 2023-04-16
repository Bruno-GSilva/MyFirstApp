import React from "react";
import { Text, TextInput} from "react-native";

export default function Input(props) {
  return (
    <>
      <Text className="font-medium text-base text-white my-2">{props.text?props.text:"Insira Algo..."}</Text>
      <TextInput className="border-2 border-yellow-500 rounded-lg px-2 text-slate-300 mb-2 w-60" secureTextEntry={!props.password?false:true}/>
    </>
  );
}