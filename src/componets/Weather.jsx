
import styled from "styled-components";

const WeatherInfoIcons = {
    sunset: "/icons/sunset.png",
    sunrise: "/icons/sunrise.png",
    humidity: "/icons/humidiy.png",
    wind:      "/icons/wind.png",
    pressure:  "/icons/pressure.png",
}

const weatherIcons = {
    "01d": "/icons/sunny.png",
    "01n": "/icons/night.png",
    "02d": "/icons/day.png",
    "02n": "/icons/cloudy-night.png",
    "03d": "/icons/cloudy.png",
    "03n": "/icons/cloudy.png",
    "04d": "/icons/cloudy.png",
    "04n": "/icons/cloudy-night.png",
    "09d": "/icons/rainy-day.png",
    "09n": "/icons/rainy-night.png",
    "10d": "/icons/rainy-day.png",
    "10n": "/icons/rainy-night.png",
    "11d": "/icons/storm.png",
    "11n": "/icons/storm.png",
    "13d": "/icons/snow.png",
    "13n": "/icons/snow.png",
    "50n": "/icons/foggy-night.png",
    "50d": "/icons/snow.png",
}

const WeatherReport = styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:100%;
justify-content:space-between;
margin:20px auto;
`;

const Temp = styled.span`
margin: 20px auto;
font-size:17px;

& span{
     font-size:40px;
 }
`;

const Logo = styled.img`
display:flex;
    width:100px;
    height:100px;
    margin:5px auto;   
`;
// const Logo2 = styled.img`
// display:flex;
//     width:10px;
//     height:10px;
//     margin:5px auto;   
// `;

const Location = styled.span`
font-size:30px;
font-weight:bold;
`;

const WeatherInfoLabel  = styled.span`
font-size:18px;
font-weight:bold;
margin:30px 35px 15px;
text-align: start;
width:90%
`;

const WeatherInfoContainer = styled.div`
display:flex;
width:90%;
flex-direction:row;
justify-content:space-between;
align-items:center;
flex-wrap:wrap
`;

const InfoContainer = styled.div`
display:flex;
flex-direction:row;
margin:10px 10px;
justify-content: space-evenly;
align-items:center;
`;
const InfoIcon = styled.img`
width:40px;
height:40px;
`;
const InfoHeading = styled.span`
display: flex;
flex-direction: column;
font-size: 16px;
margin: 18px;
& span {
  font-size: 12px;
  text-transform: capitalize;
}
`;

const WeatherInfoComponents = (props) => {
    const {name, value}= props  //destructure
    return(
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]} />
            <InfoHeading>
               { value}
                <span>{name}</span>
                
            </InfoHeading>
        </InfoContainer>
    )
}


 const Weather = (props) => {
     const {weather} = props;
     const isDay = weather?.weather[0].icon?.includes('d');
     const getTime = (timeSlap) =>{
         return `${new Date(timeSlap * 1000).getHours()} :
                 ${new Date(timeSlap * 1000).getMinutes()}`
     }

    return (
        <>
          <WeatherReport>
              {/* <logo2 src='/icons/thermometer.png'/> */}

              <Temp> 
              <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
              {`  |  ${weather?.weather[0].description}`}
              </Temp>
              <Logo src={weatherIcons[weather?.weather[0].icon]} />
          </WeatherReport>

          <Location>{`${weather?.name} | ${weather?.sys?.country}` }</Location>
          <WeatherInfoLabel> Weather Information </WeatherInfoLabel>
          <WeatherInfoContainer>
              {/* <WeatherInfoComponents name='sunset' value= {weather?.sys?.sunset} /> */}

              <WeatherInfoComponents 
               name={ isDay? "sunset" : "sunrise"}
               value= {`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`} />

              <WeatherInfoComponents name='humidity' value= {weather?.main?.humidity} />
              <WeatherInfoComponents name='wind'     value= {weather?.wind?.speed}/>
              <WeatherInfoComponents name='pressure'  value= {weather?.main?.pressure} />
          </WeatherInfoContainer>
        </>
    )
}
export default Weather;
