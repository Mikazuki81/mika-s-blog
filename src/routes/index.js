import React from "react"
import { Route } from "react-router-dom"

import Homepage from "../pages/Homepage"
import Postspage from "../pages/Postspage"

const Routes = () => {
  return (
    <>
      <Route component={Homepage} exact path='/' />
      <Route component={Postspage} exact path='/post' />
    </>
  )
}

export default Routes
