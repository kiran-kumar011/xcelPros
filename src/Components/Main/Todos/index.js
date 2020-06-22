import React, { Component } from 'react';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { connect } from 'react-redux';
import Button from '../../../UIComponents/Button';
import Input from '../../../UIComponents/Input';
import { addNewTodo } from '../../../redux-utils/actions';
import TodoModel from '../../../models/todo';
import TodoList from './TodoList';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = { touched: false, renderInput: false, todoText: '' };
  }

  handleOnMouseDown = () => this.setState({ touched: !this.state.touched });

  handleMouseUp = () => {
    setTimeout(() => {
      // const {renderInput, touched} = this.state;
      this.setState({ touched: false, renderInput: !this.state.renderInput });
    }, 150);
  };

  render() {
    const { touched, renderInput, todoText } = this.state;
    const { pages, pageId } = this.props;
    const newPages = [...pages];
    const activePage = newPages.find((page) => page.id === pageId);
    const todoHeaders = activePage ? activePage.todoHeaders : [];
    console.log(todoHeaders, 'active page');
    return (
      <div
        style={{
          height: '100%',
          padding: '40px 20px',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              fontSize: '18px',
              width: '50%',
            }}
          >
            <Button>
              <IoMdArrowDropdownCircle
                style={{ color: 'dodgerblue', fontSize: '20px' }}
              />
            </Button>
            <h2 style={{ color: 'dodgerblue' }}>Things To do</h2>
          </div>
          <div>
            <p>das</p>
          </div>
        </div>

        <TodoList />
        {!renderInput ? (
          <div
            onMouseDown={this.handleOnMouseDown}
            onMouseUp={this.handleMouseUp}
            style={{
              display: 'flex',
              color: '#ccc',
              fontSize: '15px',
              width: '100%',
              marginTop: '5px',
              opacity: touched ? 0.5 : 1,
            }}
          >
            <div style={{ border: '3px  solid #91b7e8' }} />
            <div
              style={{
                border: '1px solid rgba(0,0,0,0.1)',
                padding: '7px',
                width: '100%',
              }}
            >
              <p>+ Add</p>
            </div>
            <div style={{ border: '3px  solid #ccc' }} />
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              color: '#ccc',
              fontSize: '15px',
              width: '100%',
              marginTop: '5px',
              opacity: touched ? 0.5 : 1,
            }}
          >
            <div style={{ border: '3px  solid #91b7e8' }} />
            <div
              style={{
                border: '1px solid rgba(0,0,0,0.1)',
                padding: '7px',
                width: '100%',
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && todoText.trim()) {
                  const val = todoText;
                  this.setState({ renderInput: false, todoText: '' }, () => {
                    const todo = new TodoModel({ todo: val });
                    // console.log(todo, 'todo model');
                    this.props.dispatchNewTodoTask({
                      params: {
                        todo: todo,
                        id: this.props.pageId,
                        pages: this.props.pages,
                      },
                    });
                  });
                }
              }}
            >
              <Input
                onChangeMethod={(e) => {
                  this.setState({ todoText: e.target.value });
                }}
                value={todoText}
                placeholder="Please enter the task"
                style={{ border: '0' }}
              />
            </div>
            <div style={{ border: '3px  solid #ccc' }} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages.pages,
    pageId: state.currentPage.pageId,
  };
};

const mapDispatchToProps = {
  dispatchNewTodoTask: addNewTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
