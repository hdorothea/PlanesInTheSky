import React from 'react';
import styles from './FilterInput.css';

export class FilterInput extends React.Component {
  constructor(props) {
    super(props);
    this.initalState = {
      queryString: '',
      activeI: -1,
      filteredValues: this.props.uniqueFilterValues,
    };
    this.state = this.initalState;
    this.updateInputValue = this.updateInputValue.bind(this);
    this.updateActiveI = this.updateActiveI.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.reset = this.reset.bind(this);
    this.resetActiveI = this.resetActiveI.bind(this);
    this.submit = this.submit.bind(this);
  }


  onKeyDown(e) {
    // uparrow
    if (e.keyCode === 38) {
      this.updateActiveI(-1);
    }
    // downarrow
    if (e.keyCode === 40) {
      this.updateActiveI(1);
    }

    // enter
    if (e.keyCode === 13) {
      this.submit();
    }
  }

  setActiveI(i) {
    this.setState({ ...this.state, activeI: i });
  }

  updateInputValue(e) {
    const newFilteredValues = this.props.uniqueFilterValues.filter(filterValue =>
      filterValue.toLowerCase().startsWith(e.target.value.toLowerCase()),
    );
    this.setState({
      filteredValues: newFilteredValues,
      queryString: e.target.value,
      activeI: this.initalState.activeI,
    });
  }

  reset() {
    this.setState(this.initalState);
  }

  resetActiveI() {
    this.setState({ ...this.state, activeI: this.initalState.activeI });
  }

  updateActiveI(incrementValue) {
    let newActiveI = this.state.activeI + incrementValue;
    if (newActiveI < 0) {
      newActiveI = this.state.filteredValues.length - 1;
    }

    if (newActiveI > this.state.filteredValues.length - 1) {
      newActiveI = 0;
    }
    this.setActiveI(newActiveI);
  }

  submit() {
    if (this.state.filteredValues[this.state.activeI]) {
      this.props.addFilter(this.state.filteredValues[this.state.activeI]);
      this.reset();
    }
  }

  render() {
    return (
      <div className="filter-input" onMouseLeave={this.reset}>
        <input
          value={this.state.queryString}
          onChange={e => this.updateInputValue(e)}
          placeholder="Filter..."
          onKeyDown={this.onKeyDown}
        />
        {this.state.queryString !== ''
          ? <ul>
            {this.state.filteredValues.map((filterValue, i) =>
              (<li
                key={filterValue}
                className={i === this.state.activeI ? 'active' : ''}
                onMouseOver={() => this.setActiveI(i)}
                onMouseOut={this.resetActiveI}
                onClick={this.submit}
              >
                {filterValue}
              </li>),
            )}
          </ul>
          : null}
      </div>
    );
  }
}
