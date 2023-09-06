'use client'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {firebaseApp} from "../../app/firebase/config"
import { getFirestore, doc, getDoc, QueryDocumentSnapshot } from "firebase/firestore";

const db = getFirestore(firebaseApp)

export const Toast = () => {
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
            autoClose={quote?.length < 100 ? 7000 : 10000}
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