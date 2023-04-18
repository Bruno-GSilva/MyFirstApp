import React from "react";
import { Text, View } from "react-native";
import { Input } from "../components/input";
import { Button } from "../components/Button";

export default function RegisterScreen({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <View className="h-auto justify-around items-start px-8 py-10 border-4 border-yellow-700 rounded-xl scale-110 bg-black shadow-2xl shadow-white">
        <Text className="font-bold text-xl text-white mb-6">
          Faça seu cadastro aqui
        </Text>
        <View>
          <Input text={"Email"} />
          <Input text={"Login"} />
          <Input text={"Password"} password={true}/>
          <Button text={"Cadastrar"} />
          <Text className=" text-white mt-2">
            Já possui login?
            <Text
              className="text-amber-500"
              onPress={() => navigation.navigate("Login")}>
              {" "}
              entre Aqui!
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}