import React from 'react'
import { createContext, useState } from 'react';
export const s =createContext();

export default function ContextData(props) {
    const[data,setData]= useState([
      {
        Name:"Satyam SIngh",
        Age:"21",
        Course:"MERN",
        Batch:"October"

      },

      {
        Name:"Shyam Sunder",
        Age:"23",
        Course:"MERN",
        Batch:"October"

      }
      ,
      {
        Name:"Mryam SIngh",
        Age:"21",
        Course:"MERN",
        Batch:"October"

      }
      ,
      {
        Name:"Manila SIngh",
        Age:"23",
        Course:"MERN",
        Batch:"October"

      }
      ,
      {
        Name:"Anupam SIngh Jadon",
        Age:"21",
        Course:"MERN",
        Batch:"October"

      }
      ,
      {
        Name:"Shourya SIngh",
        Age:"21",
        Course:"MERN",
        Batch:"October"

      }
      ,
      {
        Name:"Pradeep SIngh",
        Age:"21",
        Course:"MERN",
        Batch:"October"

      }
      ,
      {
        Name:"Rashid Singh",
        Age:"21",
        Course:"MERN",
        Batch:"October"

      }
      ,
      {
        Name:"Manoj SIngh",
        Age:"21",
        Course:"MERN",
        Batch:"October"

      }
      ,
      {
        Name:"Ashu Singh",
        Age:"21",
        Course:"MERN",
        Batch:"October"

      }

    ]);
  
  return (
    <div>
      <s.Provider value={[data,setData]}>
        {props.children} 
      </s.Provider>
    </div>
  )
}
