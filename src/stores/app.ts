import { observable, action } from "mobx"

class ApplicationState {
  @observable items: string[] = []
  @observable currentItem: string = ""

  @action
  changeCurrentItem(value: string) {
    this.currentItem = value
  }

  @action
  addCurrentItem() {
    this.items.push(this.currentItem)
    this.currentItem = ""
  }

  @action
  reset() {
    this.items = []
    this.currentItem = ""
  }
}

export const appState = new ApplicationState()
