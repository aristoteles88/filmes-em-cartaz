import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import FlatComponent from './components/FlatComponent';
import DropDownPicker from 'react-native-dropdown-picker'


const Tela1 = () => {

  const [selectedCategory, setSelectedCategory] = useState("all")
  const [openCategoryDialog, setOpenCategoryDialog] = useState(false)
  const [categories, setCategories] = useState([{label: "Todas", value: "all"}])
  
  const data = [
    { key: '0', filme: 'SCOOBY! O filme', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', 
      image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg', 
      descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.' },
    { key: '1', filme: 'Vingadores: Ultimato', ano: 2019, estilo: 'Aventura', direcao: 'Anthony Russo/Joe Russo', 
      image: 'https://m.media-amazon.com/images/M/MV5BNTRkZDU0NDQtYzdkNS00MGMzLTk3MmEtYjgyMWNhYzRkZDc4XkEyXkFqcGdeQXVyMTI5ODk3NDU1._V1_.jpg', 
      descricao: 'Após os eventos devastadores de Vingadores: Guerra Infinita , o universo está em ruínas, e com a ajuda de aliados os Vingadores se reúnem para desfazer as ações de Thanos e restaurar a ordem.' },
    { key: '2', filme: 'Tenet', ano: 2020, estilo: 'Ação', direcao: 'Christopher Nolan', 
      image: 'https://m.media-amazon.com/images/M/MV5BMTkwZDcwYmEtMDgxZi00MzE3LWFkNTctYTJhZTE1ZDJkMTEzXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg', 
      descricao: 'O projeto é descrito como um épico de ação que gira em torno do mundo da espionagem internacional.' },
    { key: '3', filme: 'Amnésia', ano: 2000, estilo: 'Suspense', direcao: 'Christopher Nolan', 
      image: 'https://m.media-amazon.com/images/M/MV5BNWQ5YjRkYTEtZWJmNi00ZjhjLWE2YTgtMDE5ODlkNzdhYTRhXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_FMjpg_UX1000_.jpg', 
      descricao: 'Um homem com perda da memória de curto prazo tenta investigar o homicídio da sua esposa.' },
    { key: '4', filme: 'Homem-Aranha: Sem Volta para Casa', ano: 2021, estilo: 'Aventura', direcao: 'Jon Watts', 
      image: 'https://m.media-amazon.com/images/M/MV5BMTJkYzI0M2QtMDhiOC00MDczLTgyYzQtZmUzMmUxNmVkN2VhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_FMjpg_UX1000_.jpg', 
      descricao: 'Com a identidade do Homem-Aranha revelada, Peter pede ajuda ao Doutor Strange. Quando um feitiço corre mal, inimigos perigosos de outros mundos começam a aparecer, forçando Peter a descobrir o que realmente significa ser o Homem-Aranha.' },
    { key: '5', filme: 'Red: Crescer é uma Fera', ano: 2022, estilo: 'Animação', direcao: 'Domee Shi', 
      image: 'https://m.media-amazon.com/images/M/MV5BNjY0MGEzZmQtZWMxNi00MWVhLWI4NWEtYjQ0MDkyYTJhMDU0XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_FMjpg_UX1000_.jpg', 
      descricao: 'Uma jovem vive um ano de formação na companhia de um enorme panda vermelho.' },
    { key: '6', filme: 'Encanto', ano: 2021, estilo: 'Animação', direcao: 'Jared Bush/Byron Howard', 
      image: 'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_FMjpg_UX1000_.jpg', 
      descricao: 'Na Colômbia, uma jovem lida com a frustração de ser o único membro da família que não tem poderes mágicos.' },
    { key: '7', filme: 'Halloween', ano: 1978, estilo: 'Terror', direcao: 'John Carpenter', 
      image: 'https://m.media-amazon.com/images/M/MV5BNmQxOTYxM2ItZjYxNS00NThhLTgxOTAtNmRiOTgwZmVjMWFiXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_FMjpg_UX1000_.jpg', 
      descricao: 'Quinze anos depois de assassinar sua irmã na noite de Halloween em 1963, Michael Myers escapa do hospício e retorna para a pequena cidade de Haddonfield para matar novamente.' }
  ]

  let dropDownPickerOptions = categories
  
  useEffect(() => {
    const tempCategories = []
    data.filter((item) => {
      if (!tempCategories.includes(item.estilo)){
      tempCategories.push(item.estilo)
      dropDownPickerOptions.push({label: item.estilo, value: item.estilo})
      }
    })
    setCategories(dropDownPickerOptions)
  }, [])
  
  const filteredData = data.filter((item) => {
    if (selectedCategory === "all") {
      return item
    }
    else if (item.estilo === selectedCategory) {
      return item
    }
  })

  return (
    <View>
      <DropDownPicker
                open={openCategoryDialog}
                value={selectedCategory}
                items={categories}
                setOpen={setOpenCategoryDialog}
                setValue={setSelectedCategory}
            />
      <FlatList data={filteredData} renderItem={({item}) => <FlatComponent data={item} />} />
    </View>
  );
}

export default Tela1;