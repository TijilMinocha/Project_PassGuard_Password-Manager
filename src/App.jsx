import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className="bg-slate-900 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">

        <Manager />
      </div>
      <Footer />
      {/* <div>APP UNDER MAINTAINENCE</div>
        <div>Sorry for the inconvenience :</div> */}
    </>
  )
}

export default App