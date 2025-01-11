import React from 'react'
import styles from './ExDetails.module.css'
// import { GiStrong } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { GiStrong } from "react-icons/gi";

const ExDetails = () => {
  return (
    <div className={styles.exDetails_con}>

        <div className={styles.left}>
            <img src="https://sp.yimg.com/ib/th?id=OIP.vcO8n4EJtZuU3ljhz0IjTQHaE7&pid=Api&w=148&h=148&c=7&dpr=2&rs=1" alt="" />
        </div>
        <div  className={styles.right}>
             <h1>Barbell Alteranate Rows</h1>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda beatae voluptatibus maxime quasi, saepe dicta provident odit maiores voluptatem omnis culpa non sit enim rem itaque, soluta velit distinctio harum sed vel nemo quia quidem voluptas qui! Necessitatibus dolor itaque vel, nostrum libero sunt cumque aspernatur, voluptatibus nemo laudantium voluptatem.</p>
             <div className={styles.list}>
                <div> <GiStrong className={styles.div} role='div'/><h3>hamstring</h3></div>
                <div><GiStrong className={styles.div} role='div' /><h3>hamstring</h3></div>
                <div><GiStrong className={styles.div}  role='div' /><h3>hamstring</h3></div>
                <div><GiStrong className={styles.div} role='div' /><h3>hamstring</h3></div>
                <div><GiStrong className={styles.div} role='div' /><h3>hamstring</h3></div>
             </div>
             <IoArrowBack className={styles.button} role='button' />
        </div>

    </div>
  )
}

export default ExDetails