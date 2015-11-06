/**
 * @jsx React.DOM
 */

import React from "react"
import ReactDOM from "react-dom"
import Router from "react-router"
import createBrowserHistory from "history/lib/createBrowserHistory"
import routes from "./config/routes"

let history = createBrowserHistory()
let elementToRenderIn = document.getElementById('app')

ReactDOM.render(<Router history={history}>{routes}</Router>, elementToRenderIn)
