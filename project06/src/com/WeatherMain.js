import WeatherDay from "./WeatherDay";
//재랜더링 정의
import {useState} from 'react';

function WeatherMain() {
  let [day, setDay] = useState(3);

  const handleClick = (d) => {
    setDay(d);
    console.log(d);
  }
  return (
    <>
    <h1>날씨예보</h1>
    <form>
      <button onClick={(e)=>{e.preventDefault(); handleClick(3);}}>3일 후 날씨</button>
      <button onClick={(e)=>{e.preventDefault(); handleClick(4);}}>4일 후 날씨</button>
      <button onClick={(e)=>{e.preventDefault(); handleClick(5);}}>5일 후 날씨</button>
      <button onClick={(e)=>{e.preventDefault(); handleClick(6);}}>6일 후 날씨</button>
    </form>
    <WeatherDay d={day}/>
    </>
  );
}

export default WeatherMain;