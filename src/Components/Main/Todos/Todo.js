import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: false,
      draggedTask: null,
    };
  }

  handleOnMouseDown = () => this.setState({ touched: !this.state.touched });

  handleMouseUp = () => {
    setTimeout(() => {
      this.setState({ touched: false });
    }, 150);
  };

  render() {
    const { id, data, onDrag, onDragOver, onDrop } = this.props;
    const { touched } = this.state;
    return (
      <div
        draggable
        onDrag={(e) => onDrag(e, data)}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e)}
        onMouseDown={this.handleOnMouseDown}
        onMouseUp={this.handleMouseUp}
        id={id}
        style={{
          display: 'flex',
          color: 'rgba(0,0,0,0.6)',
          fontSize: '15px',
          width: '100%',
          marginTop: '5px',
          backgroundColor: 'rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ border: '3px  solid dodgerblue' }} />
        <div
          style={{
            border: '1px solid rgba(0,0,0,0.1)',
            padding: '7px',
            width: '50%',
          }}
        >
          <p id={id}>{data.todo}</p>
        </div>
        <div style={{ border: '3px  solid #ccc' }} />
      </div>
    );
  }
}

export default Todo;
