import React from 'react'
import Navigation from './Components/Navigation'
import Footer from './Components/Footer'
import Featured from './Components/Featured'
import WhyCarserra from './Components/WhyCarserra'
import DreamCar from './Components/DreamCar'

const App = () => {
  return (
    <>
      <Navigation />
      <DreamCar />
      <WhyCarserra />
      <Featured />
      <Footer />
    </>
  )
}

export default App