'use client'
import { useState, useEffect } from 'react'
import { firebaseApp } from 'app/firebase/config';
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { ThumbUpFull, ThumbUp } from '@components/Icons';

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
  const [icon, setIcon] = useState(false)

  useEffect(()=>{
    async function fetchLikes() {
        const docSnap = await getDoc(docRef);
        const todayInfo = docSnap.data();
        setCount(todayInfo?.likes)
      }
      fetchLikes();
  }, [])

  const handleClick = () =>{
    icon ? setCount(count - 1) : setCount(count + 1)
    setIcon(!icon)
}

count > 0 ? updateLikes(count) : ""

  return (
    <div className=''>
      {count > 0 ?
        <div className='flex items-center'>
          <div>
          <button onClick={() => handleClick()}>
            {icon ? <ThumbUpFull /> : <ThumbUp />}
          </button>
          </div>
          <div className='text-base text-sky-900 pl-2 hover:text-sky-700 hover:font-bold'>{count > 0 ? count : ""}</div>
        </div>
      :""}
    </div>
  )
}