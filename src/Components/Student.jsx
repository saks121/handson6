import React from 'react'
import NavBar from './NavBar'
import { s } from './ContextData';
import {useContext} from 'react';
import { Link } from 'react-router-dom';

export default function Student() {
  const [dataval] = useContext(s);
   return (
    <div>
      <NavBar />
      <div className='table-stu'>
      
        {dataval.filter((i)=>i?.Course ==="MERN").map((i,index)=>{
          console.log("Student data:",i);
           return(
          <div className='tabl' key={index}>
            <table className='table'>
            <tbody>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th>Batch</th>
              <th>Change</th>
            </tr>

            <tr>
              <td>{i.Name}</td>
              <td>{i.Age}</td>
              <td>{i.Course}</td>
              <td>{i.Batch}</td>
              <td style={{color:'blue',textDecoration:'underlined'}}><Link to='/addnewstudent' />Edit</td>
            </tr>

            <tr>
              <td>{i.Name}</td>
              <td>{i.Age}</td>
              <td>{i.Course}</td>
              <td>{i.Batch}</td>
              <td style={{color:'blue',textDecoration:'underlined'}}><Link to='/addnewstudent' />Edit</td>
            </tr>

            <tr>
              <td>{i.Name}</td>
              <td>{i.Age}</td>
              <td>{i.Course}</td>
              <td>{i.Batch}</td>
              <td style={{color:'blue',textDecoration:'underlined'}}><Link to='/addnewstudent' />Edit</td>
            </tr>

            <tr>
              <td>{i.Name}</td>
              <td>{i.Age}</td>
              <td>{i.Course}</td>
              <td>{i.Batch}</td>
              <td style={{color:'blue',textDecoration:'underlined'}}><Link to='/addnewstudent' />Edit</td>
            </tr>

            <tr>
              <td>{i.Name}</td>
              <td>{i.Age}</td>
              <td>{i.Course}</td>
              <td>{i.Batch}</td>
              <td style={{color:'blue',textDecoration:'underlined'}}><Link to='/addnewstudent' />Edit</td>
            </tr>

            <tr>
              <td>{i.Name}</td>
              <td>{i.Age}</td>
              <td>{i.Course}</td>
              <td>{i.Batch}</td>
              <td style={{color:'blue',textDecoration:'underlined'}}><Link to='/addnewstudent' />Edit</td>
            </tr>
            </tbody>
                
            </table>
          </div>
          );  
      })}
        
      </div>

  
        
      
  </div>
  )
}
