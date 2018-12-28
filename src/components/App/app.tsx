import * as React from "react"
import { observer } from "mobx-react"
import { appState } from "../../stores/app"
import Storage from "../../core/Storage"
import "./app.scss"

const Kiwi = require("../../assets/kiwi.jpg")

@observer
export default class App extends React.Component {
  storage: Storage = new Storage()

  onSubmit(event) {
    event.preventDefault()
    appState.addCurrentItem()
  }

  onChange(event) {
    appState.changeCurrentItem(event.target.value)
  }

  render() {
    return <div className="app">
      <img src={Kiwi} height="32"/>
      <form onSubmit={this.onSubmit}>
        <input value={appState.currentItem} onChange={this.onChange}/>
        <button type="submit">Ajouter</button>
        <button type="button" onClick={() => appState.reset()}>Vider</button>
        <ul>
          {appState.items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </form>
    </div>
  }
}
