import React from "react"
import Main from "../components/Main"
import Home from "../components/Home"
import Profile from "../components/Profile"
import { IndexRoute, Route } from "react-router"

module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="profile/:username" component={Profile} />
  </Route>
)
