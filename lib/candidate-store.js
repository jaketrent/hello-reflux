import clone from 'lodash/lang/clone'
import Reflux from 'reflux'

import actions from './actions'

var _candidates = []

const CandidateStore = Reflux.createStore({
  listenables: actions.candidates,
  onCreate(newCandidate) {
    _candidates = _candidates.concat([ newCandidate ])
    this.trigger()
  },
  getCandidates() {
    return clone(_candidates)
  }
})

export default CandidateStore
