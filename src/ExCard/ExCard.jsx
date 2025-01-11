import React, { useContext } from 'react'
import styles from "./ExCard.module.css"
import { dataContext } from '../App';

const ExCard = (props) => {
//    const ctx = useContext(dataContext);
//    console.log(props.gifUrl);
   
    
  return (
    <div  className={styles.card_con}>
        <div className={styles.card_img}>
            <img src={props.gifUrl} alt="ex" />
        </div>
        <div className={styles.card_targets}>
            {
                props.
                secondaryMuscles.map((ele , i) =>{
                    return <span key={i}>{ele}</span>
                })
                
            }
        </div>
        <h2>{props.name}</h2>
    </div>
  )
}

export default ExCard;