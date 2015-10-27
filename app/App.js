/**
 * @jsx React.DOM
 */

import React from "react"
import ReactDOM from "react-dom"
import Router from "react-router"
import routes from "./config/routes"

let elementToRenderIn = document.getElementById('app')

ReactDOM.render(<Router routes={routes} />, elementToRenderIn)
