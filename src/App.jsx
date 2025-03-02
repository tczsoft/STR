import { useState } from 'react'
import './App.css'
import Approuter from './Router/Approuter'
import { Toaster } from 'react-hot-toast'
import { PrimeReactProvider } from 'primereact/api';
import { HSStaticMethods } from "preline";
import "preline/preline";

HSStaticMethods.autoInit();

const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    HSStaticMethods.autoInit();
  }
});

observer.observe(document.body, {
  attributes: true,
  subtree: true,
  childList: true,
  characterData: true,
});

function App() {

  return (
    <>
      <PrimeReactProvider>
        <Approuter/>
        <Toaster position='top-center' reverseOrder={false} />
      </PrimeReactProvider>
    </>
  )
}

export default App
