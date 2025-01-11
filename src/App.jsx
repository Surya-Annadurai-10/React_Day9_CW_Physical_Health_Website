import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './Headers/Headers'
import axios from 'axios'
import { createContext } from 'react'
import NavSection from './NavSection/NavSection'
import SearchSection from './SearchSection/SearchSection'
import Exercises from './Exercises/Exercises'

export const dataContext = createContext();
function App() {
  const [data , setData] = useState([]);
  const [bodyPart , setBodyPart] = useState([]);
 const [showEx , setShowEx] = useState(false);
const [part ,setPart] = useState("")


  useEffect(() =>{
  
    // const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0';
    const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';
    // const url = 'https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0';
    // const url = 'https://exercisedb.p.rapidapi.com/exercises/name/%7Bbicepscurls%7D?offset=0&limit=10';
    // const url = 'https://exercisedb.p.rapidapi.com/exercises/equipment/assisted?limit=10&offset=0';


    // const url = 'https://exercisedb.p.rapidapi.com/status';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '43b8e663b5msh58f9b2e18ba2c15p1537c5jsnf761c6446f17',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };
    
   async function name(params) {
    try {
      // const res = await axios.get(url , options)
      // // const result = await response.text();
      // console.log(res.data);
      // setBodyPart([
      //     ...res.data
      // ])

      setBodyPart(['back', 'cardio', 'chest', 'lower arms', 'lower legs', 'neck', 'shoulders', 'upper arms', 'upper legs', 'waist'])
    } catch (error) {
      console.error(error);
    }
   }

   name();

    // const axo = async () =>{
    //      try {
    //       const res = await axios.get(url, options);

    //       setBodyPart([
    //         ...res.data
    //      ])
    //      } catch (error) {
    //       console.log("error :" , error);
          
    //      }

     
        
    // }  
    // axo();

  },[]);

// if(!part){
//   useEffect(() =>{
//     const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0';
//     const axo = async () =>{
//      try {
//       const res = await axios.get(url, {
//         headers: {
//         'x-rapidapi-key': 'f2c52f8900mshe07c1309a8f59d2p14d669jsn8a692d343fb4',
//         'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
//       }});

//       setBodyPart([
//         ...res.data
//      ])
//      } catch (error) {
//       console.log("error :" , error);
      
//      }

 
    
// }  
// axo();
// },[part]);
// }

  return (
    <dataContext.Provider value={{part , setPart,data, setData , bodyPart , setBodyPart ,showEx , setShowEx} }>
       <Headers />
       <SearchSection />
      {showEx ? <Exercises /> : <NavSection />}
    </dataContext.Provider>
  )
}

export default App
