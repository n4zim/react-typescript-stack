import * as React from "react"
import { render } from "react-dom"

// CSS
import "normalize.css/normalize.css"
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"

// App component
import App from "./components/App/app"

const renderDiv = document.getElementById("render")
render(<App/>, renderDiv)

declare let module: { hot: any }
if(module.hot) {
  module.hot.accept("./components/App/app", () => {
    const AppHot = require("./components/App/app").default
    render(<AppHot/>, renderDiv)
  })
}
