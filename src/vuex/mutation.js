import { feach } from './utils'

export function installMutation(mutations, state) {
  feach(mutations, (mutationName, mutationsFn) => {
    // this.mutations.change = () => { change(state) }
    this.mutations[mutationName] = () => {
      mutationsFn.call(this, state)
    }
  })
}
