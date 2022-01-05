 
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import City from './componets/City';
import Weather from './componets/Weather.jsx';
import Axios from 'axios';
import './index.css'


// const API_key= "12706520cdaf3c527e1f262ec09b9fc3";
const API_key= "fe4feefa8543e06d4f3c66d92c61b69c";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content:center;
  width: 400px;
  // height:500px;
  padding: 20px 10px;
  margin: auto;
  margin-top:50px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
   rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  background: white;
  font-family: 'Oswald', sans-serif;
`;

const Label = styled.span`
color:black;
font-size:40px;
font-weight:bold;
font-family: 'Oswald', sans-serif;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

const fetchWeatherData =async(e)=>{
  e.preventDefault();
  const response = await
  Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`);
  console.log(response);
  updateWeather(response.data)
}


  return (
    <>
    <Container> 
     <Label> Weather Application </Label>
     {weather? //if weather data available
     <Weather  weather={weather}/>:
      <City updateCity={updateCity}  fetchWeatherData={fetchWeatherData} />}
      
    </Container>
    </>
  );
}

export default App;
