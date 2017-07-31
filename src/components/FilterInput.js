import React from 'react';
import { FilterAdder } from './FilterAdder';

export class FilterInput extends React.Component {
  constructor() {
    super();
    this.state = { value: '' };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    this.setState({ value: '' });
  }

  updateInputValue(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.updateInputValue(e)}
          placeholder={this.props.filterableValue}
        />
        {this.state.value !== ''
          ? <ul>
            {this.props.filterableObservations
              .filter(observation =>
                observation.toLowerCase().startsWith(this.state.value.toLowerCase()),
              )
              .map(observation =>
                (<FilterAdder reset={this.reset} addFilter={this.props.addFilter} filterableValue={this.props.filterableValue} observation={observation} />)
              )}
          </ul>
          : null}
      </div>
    );
  }
}
