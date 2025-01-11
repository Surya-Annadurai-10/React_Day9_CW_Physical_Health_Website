import styles from './SearchSection.module.css'

const SearchSection = () =>{
   return (
    <>
     <div className={styles.search_con}>  
         <div className={styles.search_box}> 
            <input type="text" name="" id="" placeholder={"Search"} />
            <button className={styles.search_btn}>Search</button>
         </div>
        
     </div>
    </>
   )

}

export default SearchSection ;