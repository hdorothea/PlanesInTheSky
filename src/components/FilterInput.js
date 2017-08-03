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
          placeholder={this.props.name}
        />
        {this.state.value !== ''
          ? <ul>
            {this.props.uniqueFilterValues
              .filter(filterValue =>
                filterValue.toLowerCase().startsWith(this.state.value.toLowerCase()),
              )
              .map(filterValue =>
                (<FilterAdder reset={this.reset} addFilter={this.props.addFilter} filterValue={filterValue} />)
              )}
          </ul>
          : null}
      </div>
    );
  }
}
