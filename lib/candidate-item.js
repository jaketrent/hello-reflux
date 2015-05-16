import React from 'react'

export default class CandidateItem extends React.Component {
  fmtDisplayName(candidate) {
    return `${candidate.firstName} ${candidate.lastName}`
  }
  render() {
    return (
      <li>{this.fmtDisplayName(this.props.candidate)}</li>
    )
  }
}
CandidateItem.defaultProps = {
  candidate: {}
}
