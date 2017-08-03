import React from 'react';
import './FilterAdder.css';

export class FilterAdder extends React.Component {
  constructor() {
    super();
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.state = { mouseOver: false };
  }

  handleMouseOut() {
    this.setState({ mouseOver: false });
  }

  handleMouseOver() {
    this.setState({ mouseOver: true });
  }

  render() {
    return (
      <div
        className={this.state.mouseOver ? 'active' : ''}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        key={this.props.filterValue}
        onClick={() => {
          this.props.addFilter(this.props.filterValue);
          this.props.reset();
        }}
      >
        {this.props.filterValue}
      </div>
    );
  }
}
