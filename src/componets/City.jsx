
import styled from "styled-components";

const Logo = styled.img`
display:flex;
    width:130px;
    height:140px;
    margin:50px auto;
    justify-content:center;
`;

const Label = styled.span`
color:black;
font-size: 19px;
font-weight:bold;
margin:10px auto
`;

const SearchBox = styled.form`
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin: 20px;
border: black solid 1px;
border-radius: 2px;
   
& input {
    padding:9px;
    font-Size:17px;
    border:none;
    outline:none;
    font-weight:bold
 }

 & button{
     color:red;
     padding:10px;
     font-size:12px;
     background-color:black;
     border:none;
     outline:none;
     font-weight:bold;
     cursor:pointer
 }
`;


 const City = (props) => {
     const {updateCity, fetchWeatherData}=props
    return (
         <>
        <Logo src="/icons/rainy-day.png" /> 
        <Label> Know Your City Weather Condition !</Label> 
        <SearchBox onSubmit={fetchWeatherData}>
            <input 
            placeholder="City Name" 
             onChange={(e)=>updateCity(e.target.value)}/>
            <button type="submit">Search</button>
        </SearchBox>
          
         </>
    )
}
export default City;