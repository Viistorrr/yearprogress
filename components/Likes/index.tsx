'use client'
import { useState, useEffect } from 'react'
import { firebaseApp } from 'app/firebase/config';
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";

const db = getFirestore(firebaseApp)
let docRef = doc(db, "yearprogress", "today");
  
const updateLikes = async (likes:number) => {
    const currentDay = doc(db, "yearprogress", "today");
    updateDoc(currentDay, {
      likes: likes
    });
  }

export default function Likes() {
  const [count, setCount] = useState(0)


  const handleClick = () =>{
    setCount(count + 1)
}

  useEffect(()=>{
    async function fetchLikes() {
        const docSnap = await getDoc(docRef);
        const todayInfo = docSnap.data();
        setCount(todayInfo?.likes)
      }
      fetchLikes();
  }, [])

  updateLikes(count)
 
  return (
    <>
      {count}
      <button onClick={() => handleClick()}>
        <Image
            src="assets/icons/heart-angle-color.svg"
            width={30}
            height={30}
            alt="like icon"
          />
      </button>
    </>
  )
}