'use client'
import { useState, useEffect } from 'react'
import { firebaseApp } from 'app/firebase/config';
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import Image from "next/image";
const likeIcon = "/assets/icons/thumb-up-full.svg"
const dislikeIcon = "/assets/icons/thumb-up.svg"

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
    <div className='flex items-center align-center'>
      {count > 0 ?
        <>
          <button onClick={() => handleClick()}>
            <Image
                src={icon ? likeIcon : dislikeIcon}
                width={30}
                height={30}
                alt="like icon"
              />
          </button>
          <span className='text-lg'>{count > 0 ? count : ""}</span>
        </>
      :""}
    </div>
  )
}