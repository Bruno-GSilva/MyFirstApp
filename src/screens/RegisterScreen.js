import React from "react";
import { Text, TextInput, View, Pressable } from "react-native";
// import Button from "../components/Button";

function RegisterScreen({ navigation }) {
  return (
    <View className="w-full h-screen justify-center items-center bg-black">
      <View className="h-auto justify-around items-start px-8 py-10 border-4 border-yellow-700 rounded-xl scale-110 bg-black shadow-2xl shadow-white">
        <Text className="font-bold text-xl text-white mb-6">
          Faça seu cadastro aqui
        </Text>
        <View>
          <Text className="font-medium text-base text-white my-2">Email</Text>
          <TextInput className="border-2 border-yellow-500 rounded-lg px-2 text-slate-300" />
          <Text className="font-medium text-base text-white my-2">Login</Text>
          <TextInput className="border-2 border-yellow-500 rounded-lg px-2 text-slate-300" />
          <Text className="font-medium text-base text-white my-2">
            Password
          </Text>
          <TextInput className="border-2 border-yellow-500 rounded-lg mb-5 px-2 text-slate-300" secureTextEntry={true}/>
          <Pressable
            className="border-2 border-black w-52 h-10 justify-center items-center rounded-lg bg-yellow-500 m-2 active:bg-amber-500">
            <Text className="text-white">Cadastrar</Text>
          </Pressable>
          <Text className=" text-white mt-2">
            já possui login?
            <Text
              className="text-amber-500"
              onPress={() => navigation.navigate("Login")}>
              {' '}entre Aqui!
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default RegisterScreen;