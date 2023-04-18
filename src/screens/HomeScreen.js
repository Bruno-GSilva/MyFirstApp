import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { DataAnime } from "../components/Contexts/DataAnimesContext";

export default function HomeScreen() {

  return (
    <View className="flex-1 items-center bg-black">
      <Header />
      <View className="w-full flex-row items-center justify-around">
        <Text className="text-2xl font-bold text-white my-8">Minha Lista</Text>
        <Button text={"Adicionar"} />
      </View>
      <ScrollView>
        <Card/>
        {DataAnime.map((e) => (
          <Card
          url={e.image}
          titule={e.titule}
          description={e.description}
          name={e.name}
          id={e.id}
          key={e.id}
          eps={e.episode}
          launch={e.launch}
          status={e.status}
        />
        ))}
      </ScrollView>
    </View>
  );
}
