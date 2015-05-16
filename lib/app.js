import autobind from 'autobind-decorator'
import React from 'react'

import CandidateForm from './candidate-form'
import CandidateList from './candidate-list'
import candidateStore from './candidate-store'

@autobind
export default class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
  componentDidMount() {
    this.unsubscribe = candidateStore.listen(this.onStateChange);
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  onStateChange() {
    this.setState({
      candidates: candidateStore.getCandidates()
    })
  }
  render() {
    return (
      <div>
        <CandidateForm />
        <CandidateList candidates={this.state.candidates} />
      </div>
    )
  }
}
