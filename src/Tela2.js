import React from 'react';
import { View, Text, Image } from 'react-native';

import { useRoute } from '@react-navigation/native';

const Tela2 = () => {

  const route = useRoute();

  const data = route.params.data;

  return (
    <View>
      <View style={{justifyContent: "center", alignItems: "center"}}>
        <Image source={{ uri: data.image }} style={{ width: 200, height: 300 }} />
      </View>
      <Text>FILME: {data.filme}</Text>
      <Text>ANO: {data.ano}</Text>
      <Text>ESTILO: {data.estilo}</Text>
      <Text>DESCRIÇÃO: {data.descricao}</Text>
      <Text>Teste</Text>
    </View>
  );
}

export default Tela2;