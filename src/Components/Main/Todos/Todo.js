import React, { Component } from 'react';
import { FaRegComment, FaUserCircle, FaRegUserCircle } from 'react-icons/fa';

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
    const { id, data, onDrag, onDragOver, onDrop, todoHeaders } = this.props;
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
          marginTop: '2px',
        }}
      >
        <div style={{ border: '3px  solid dodgerblue' }} />
        <div
          id={id}
          style={{
            border: '1px solid rgba(0,0,0,0.1)',
            padding: '7px',
            width: '50%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: '0.5px',
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}
        >
          <div>
            <p>{data.todo}</p>
          </div>
          <FaRegComment
            style={{ fontSize: '20px', color: 'rgba(0,0,0,0.3)' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            width: '50%',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'stretch',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              width: '15%',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: ' center',
              border: '0.01px solid #fff',
            }}
          >
            <FaUserCircle />
          </div>
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              width: '33%',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: ' center',
              border: '0.01px solid #fff',
            }}
          >
            {data.status}
          </div>
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              width: '20%',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: ' center',
              border: '0.01px solid #fff',
            }}
          >
            {'Jan 12'}
          </div>
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              width: '25%',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: ' center',
              border: '0.01px solid #fff',
            }}
          >
            hello
          </div>
          <div style={{ width: '40px', backgroundColor: 'red' }}></div>
        </div>
        <div style={{ border: '3px  solid #ccc' }} />
      </div>
    );
  }
}

export default Todo;
