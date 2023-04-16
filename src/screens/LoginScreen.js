import React from "react";
import { Text, View} from "react-native";
import Button from "../components/Button";
import Input from "../components/input";

export default function LoginScreen({ navigation }) {
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <View className="h-auto justify-around items-start px-8 py-10 border-4 border-yellow-700 rounded-xl scale-110 bg-black shadow-2xl shadow-white">
        <Text className="font-bold text-xl text-white mb-6">
          Faça seu login aqui
        </Text>
        <View>
          <Input text={'Login'}/>
          <Input text={'Password'} password={true}/>
          <Button text={'Entrar'} route={() => navigation.navigate("Home")}/>
          <Text className=" text-white mt-2">
            Não tem login?
            <Text
              className="text-amber-500"
              onPress={() => navigation.navigate("Register")}>
               {' '}cadastrar-se aqui!
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}