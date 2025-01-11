import React, { useContext, useState } from 'react'
import styles from "./Exercises.module.css"
import { dataContext } from '../App';
import axios from 'axios';
import { useEffect } from 'react'
import ExCard from '../ExCard/ExCard';
import { MdArrowBackIosNew } from "react-icons/md";

const Exercises = () => {
    const {setShowEx,part,data,setBodyPart,setData} = useContext(dataContext);
    const [page , setPage] = useState(1);
    // console.log(part);



const handleFirst =() =>{
  setPage(prev => prev - 2)

}

const handleSecond =() =>{
  setPage(prev => prev - 1)
  
}

const handleThird =() =>{
  setPage(prev => prev )
  
}

const handleFourth =() =>{
  setPage(prev => prev + 1)
  
}

const handleFifth =() =>{
  setPage(prev => prev + 2)
  
}

const handlePrevious =() =>{
  setPage(prev => prev - 1)
  
}
const handleNext =() =>{
  setPage(prev => prev + 1)
}




console.log("data",data);
useEffect(() =>{
  const url = ` https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}?limit=120&offset=0`; 

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '43b8e663b5msh58f9b2e18ba2c15p1537c5jsnf761c6446f17',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};
const axo = async () =>{
 try {
  const res = await axios.get(url, options);
  console.log("res :" , res.data);

setData([
    ...res.data
 ])
 } catch (error) {
  console.log("error :" , error);
 }
}  
axo();
},[part]);

let endingPoint = page * 12 ;
let startingPoint = endingPoint - 12 ;

    
  return (
    <>
   <div className={styles.ex_container}>
   <div>
       <div className={styles.show_con}>
      <div className={styles.back} onClick={() => { 
         setShowEx(false)
         setData([])}}> <MdArrowBackIosNew className={styles.button}  role='button'/></div>
       <h1 className={styles.show_header}>Showing <span className={styles.part}>  {part} </span>Exercises :</h1>
       </div>
     <div className={styles.ex_con}>
     {
           data.slice(startingPoint , endingPoint).map((ex, i) =>{
                // console.log(ex);
               return  <ExCard {...ex} key={i} />
            })
        }


     </div>

    </div>
    {
      page >= 3 ? <div className={styles.pagination}>
     <a href="#"> <span   onClick={handlePrevious} >Previous</span></a>
     <a href="#"> <span  onClick={handleFirst}>{page-2}</span></a>
      <a href="#"><span  onClick={handleSecond}>{page-1}</span></a>
   <a href="#">   <span style={{backgroundColor : "red" ,
         fontWeight : "bold",
         color: "white",
         border: "1px solid red"}}  onClick={handleThird}>{page}</span></a>
      {
        page > 9 ? null :  <a href="#"><span  onClick={handleFourth}>{page + 1}</span> </a>
      }
      {
        page > 8 ? null :    <a href="#"><span  onClick={handleFourth}>{page + 2}</span> </a>
      }
    
      {
        page > 8 ? null :   <a href="#"><span  onClick={handleNext} >Next</span> </a>
      }

    </div>  : 
    <div className={styles.pagination}>

    <span style={{backgroundColor : "red" ,
         fontWeight : "bold",
         color: "white",
         border: "1px solid red"}} onClick={() => setPage(1) }>1</span>
    <a href="#"><span onClick={() => setPage(2) }>2</span></a>
<a href="#">    <span onClick={() => setPage(3) }>3</span></a>
<a href="#">    <span onClick={() => setPage(4) }>4</span></a>
<a href="#">    <span onClick={ () => setPage(5) }>5</span></a>
   <a href="#"> <span onClick={() => setPage(prev => prev + 1) }>Next</span></a>

  </div>
    }
   </div>
    </>
  )
}

export default Exercises