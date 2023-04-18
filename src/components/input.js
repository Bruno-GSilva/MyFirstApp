import React, { useEffect, useState } from "react";
import { Text, TextInput} from "react-native";
import { DataUser } from "./Contexts/DataUserContext";


export function Input(props) {
  
  const [users, setUsers] = useState([]);
  const [passwords, setPasswords] = useState([]);
  
  useEffect(() => {
    const usersData = DataUser.map(user => user.login);
    const passwordsData = DataUser.map(user => user.password);
  
    setUsers(usersData);
    setPasswords(passwordsData);
  }, [DataUser]);
  
  console.log(passwords, users);
  


  return (
    <>
      <Text className="font-medium text-base text-white my-2">{props.text?props.text:"Insira Algo..."}</Text>
      <TextInput className="focus:bg-slate-800 border-2 border-yellow-500 rounded-lg px-2 text-slate-300 mb-2 w-60" secureTextEntry={!props.password?false:true} placeholder="typing here..." onChangeText={(e)=> console.log(e)}/>
    </>
  );
}