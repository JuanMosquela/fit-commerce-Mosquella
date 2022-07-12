import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAY2IYaMJmlZgjDTveYegItFfJRLX5ozZQ",
    authDomain: "e-commerce-mosquella.firebaseapp.com",
    projectId: "e-commerce-mosquella",
    storageBucket: "e-commerce-mosquella.appspot.com",
    messagingSenderId: "546138265758",
    appId: "1:546138265758:web:3d8780763c7bdb232a838f"
};

initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
