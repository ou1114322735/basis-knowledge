import React,{useState} from "react";
import styles from './index.css'
import avator from '@/assets/img1.jpg';
export default function () {
    const [number,setNumber] = useState(0)
    return (
        <div>
            <h1>{number}</h1>
            <img src={avator} alt="" />
            <div className={styles.avatar}></div>
            <button className={styles.btn} onClick={()=>setNumber(number+1)}>add</button>
        </div>
    )
}