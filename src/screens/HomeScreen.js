import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center bg-black">
      <Header />
      <View className='w-full flex-row items-center justify-around'>
        <Text className="text-2xl font-bold text-white my-8">Minha Lista</Text>
        <Button text={'Adicionar'}/>
      </View>
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}
