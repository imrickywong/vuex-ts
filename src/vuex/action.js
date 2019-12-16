import { feach } from './utils'

export function installAction(actions) {
  feach(actions, (actionName, actionFn) => {
    this.actions[actionName] = () => {
      actionFn.call(this, this)
    }
  })
}
