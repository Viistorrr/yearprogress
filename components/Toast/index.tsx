'use client'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {firebaseApp} from "../../app/firebase/config"
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebaseApp)

export default function Toast(){
    const [quote, setQuote] = useState("")

    useEffect(()=>{
        async function fetchQuotes() {
            let docRef = doc(db, "yearprogress", "today");
            const docSnap = await getDoc(docRef);
            const todayInfo = docSnap.data();
            let randQuoute = Math.floor(Math.random() * todayInfo?.quotes.length) + 1;
            setQuote(todayInfo?.quotes[randQuoute])
        }
        fetchQuotes();
    }, [quote])

    return (
      <div className='font-bold'>
        {quote ? toast.info(quote.toString()) : null}
        <ToastContainer
            position="top-center"
            autoClose={6000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            limit={1}
            pauseOnHover
            theme="colored" />
      </div>
    );
  }