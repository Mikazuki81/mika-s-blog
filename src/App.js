import React from "react"
import Routes from "./routes"
import { BrowserRouter as Router } from "react-router-dom"

// importing components
import Footer from "./elements/Footer"
import Header from "./elements/Header"

const App = () => {
  return (
    <Router>
      <Header />

      <section className='main'>
        <Routes />
      </section>
      <Footer />
    </Router>
  )
}

export default App
