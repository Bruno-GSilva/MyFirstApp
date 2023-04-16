import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import Button from "../components/Button";

export default function HomeScreen() {
  // const [dataCards, setDataCards] = useState(Data);

  const Data = [
    {
      id: "01",
      name: "Boku No Hero",
      status: "Complete",
      titule: "My Hero Academia",
      launch: "Terça-feira",
      description:
        "Por toda a sua vida, Izuku sonhou ser um heroi — um objetivo ambicioso para qualquer um, mas especialmente desafiador para um garoto sem superpoderes. Isso mesmo: em um mundo onde 80% da população tem algum tipo de Dom especial, Izuku teve a má sorte de nascer completamente normal. Mas isso não vai impedi-lo de se matricular em uma das academias de herois mais prestigiosas do mundo",
      episode: "138",
      image:
        "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/aa31911c746c4d7d027b190f2e184834.jpe",
    },
    {
      id: "02",
      name: "BOFURI",
      status: "Complete",
      titule: "BOFURI",
      launch: "Quarta-feira",
      description:
        "Maple quer evitar se machucar em seu jogo de VRMMO, então ela coloca todos os seus pontos de habilidade na defesa até não conseguir nem mesmo se movimentar. E funciona??",
      episode: "23",
      image:
        "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/2583f9f13ed1f26108ae4279f5b50c94.jpe",
    },
    {
      id: "03",
      name: "BORUTO",
      status: "Em Andamento",
      titule: "BORUTO",
      launch: "Quinta-feira",
      description:
        "Uzumaki Boruto, filho de Uzumaki Naruto, o Sétimo Hokage, se inscreveu na Academia Ninja para aprender a ser um verdadeiro ninja. Os outros estudantes o ignoram por ser 'apenas o filho do Hokage', mas a paixão e a personalidade do Boruto vai acabar com todos esses preconceitos. Quando uma série de misteriosos eventos começa a se desenrolar, cabe a Boruto e seus novos amigos a investigá-los. Como um tornado, Boruto entra no coração de todos: sua história está prestes a começar!",
      episode: "293",
      image:
        "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/bdbd4f4e247f7290eb847025021e133b.jpe",
    },
    {
      id: "04",
      name: "Demon Slayer",
      status: "Complete",
      titule: "Kimetsu no Yaiba",
      launch: "Sabado",
      description:
        "Japão, era Taisho. Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova e única sobrevivente, também foi transformada num demônio. Arrasado com esta sombria realidade, Tanjiro decide se tornar um matador de demônios para fazer sua irmã voltar a ser humana, e para matar o demônio que matou sua família. Um triste conto sobre dois irmãos, onde os destinos dos humanos e dos demônios se entrelaçam, começa agora.",
      episode: "125",
      image:
        "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f7adcedd1d7c53ae18d851003a3cfae4.jpe",
    },
  ];

  return (
    <View className="flex-1 items-center bg-black">
      <Header />
      <View className="w-full flex-row items-center justify-around">
        <Text className="text-2xl font-bold text-white my-8">Minha Lista</Text>
        <Button text={"Adicionar"} />
      </View>
      <ScrollView>
        <Card />
        {Data.map((e) => (
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
