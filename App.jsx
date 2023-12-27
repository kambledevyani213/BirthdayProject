import {  useState } from "react"
import Data from "./Project1 Birthday/Data"
import './Project1 Birthday/BirthdayData.css'


const Card = () => {
    const[data,setData]=useState(Data)
    const handleClick = () => {
      setData([]);
    };
    
  return (
    <div className="Profile">
      <section className="Card">
        <h3 className="black">Today Birthday {data.length} 😀</h3>
        {data.map((e, i) => {
          return (
            <div className="cont" key={i}>
              <img src={e.image}></img>
              <div className="sub-cont">
                <label>{e.name}</label>
                <p>{e.age}</p>
              </div>
            </div>
          );
        })}
        <button onClick={handleClick}>Clear All</button>
      </section>
    </div>
    
    
  )
}

export default Card