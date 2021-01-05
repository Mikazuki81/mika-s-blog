import React from "react"
import { Route } from "react-router-dom"
import AddPostpage from "../pages/AddPostpage"

import Homepage from "../pages/Homepage"
import SinglePostpage from "../pages/SinglePostpage"

const Routes = () => {
  return (
    <>
      <Route component={Homepage} exact path='/' />
      <Route component={SinglePostpage} path='/post/:id' />
      <Route component={AddPostpage} path='/create-post' />
    </>
  )
}

export default Routes
