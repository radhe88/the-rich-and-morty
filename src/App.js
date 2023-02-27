import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([
    {
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      name: "Alexander",
      status: "Dead",
      species: "Human",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      },
      location: {
        name: "Anatomy Park",
        url: "https://rickandmortyapi.com/api/location/5"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
    },
    {
      name: "Alexander",
      status: "Dead",
      species: "Human",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      },
      location: {
        name: "Anatomy Park",
        url: "https://rickandmortyapi.com/api/location/5"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
    },
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: ""
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      id: 3,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
    {
      id: 4,
      name: "Beth Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    },
    {
      id: 5,
      name: "Jerry Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    }
   

  ])
  return (
    <div className="main">
      {
        data.map((el) => {
          console.log(el.name);
          return <Card image={el.image} name={el.name}/>
        })
      }
      
    </div>
  );
}

export default App;
