import React, { Component } from 'react';
import './Node.css';

export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;

    // Determine the CSS class for the node
    const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : isWall
      ? 'node-wall'
      : '';

    return (
      <div
        id={`node-${row}-${col}`} // Unique identifier for each node
        className={`node ${extraClassName}`} // Apply appropriate CSS class
        onMouseDown={() => onMouseDown(row, col)} // Mouse down event
        onMouseEnter={() => onMouseEnter(row, col)} // Mouse enter event
        onMouseUp={() => onMouseUp()} // Mouse up event
      ></div>
    );
  }
}
