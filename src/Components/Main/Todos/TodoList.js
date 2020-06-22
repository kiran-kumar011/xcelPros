import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { FaPlusCircle } from 'react-icons/fa';
import Todo from './Todo';

import { swapTodoColumn } from '../../../redux-utils/actions';
import Button from '../../../UIComponents/Button';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: false,
      draggedTask: null,
      todos: [],
      draggbleMenu: '',
    };
  }

  componentDidMount = () => {
    console.log(this.props.pages, 'todolist');
  };

  handleOnMouseDown = () => this.setState({ touched: !this.state.touched });

  handleMouseUp = () => {
    setTimeout(() => {
      this.setState({ touched: false, renderInput: !this.state.renderInput });
    }, 150);
  };

  onDrag = (e, todo) => {
    e.preventDefault();
    this.setState({ draggedTask: todo });
  };

  onDragOver = (e) => {
    e.preventDefault();
    console.log('check');
  };

  onDrop = (e) => {
    console.log('drop event', e.target);
    e.preventDefault();
    if (e.target.id) {
      const { draggedTask } = this.state;
      const { pages, pageId } = this.props;
      const newPages = [...pages];
      const pageIndex = newPages.findIndex((page) => page.id === pageId);
      const currentPage = newPages.find((page) => page.id === pageId);

      const newPage = { ...currentPage };
      const { todos } = newPage;
      const newTodos = [...todos];
      console.log(newTodos, 'before swapping');
      const targetIndex = newTodos.findIndex((todo) => todo.id === e.target.id);
      const draggedIndex = newTodos.findIndex(
        (todo) => todo.id === draggedTask.id
      );
      console.log(targetIndex, 'on drop index', draggedIndex);
      const locationTask = newTodos[targetIndex];

      newTodos.splice(targetIndex, 1, { ...draggedTask });
      newTodos.splice(draggedIndex, 1, { ...locationTask });
      console.log(newTodos, 'after swapping');
      newPage.todos = [...newTodos];
      newPages.splice(pageIndex, 1, { ...newPage });
      this.props.dispatchSwapTask({ params: { pages: newPages } });
    }
  };

  menuDrag = (e) => {
    e.preventDefault();
    console.log(e.target.innerText, 'drag element');
  };

  menuDragDrop = (e) => {
    e.preventDefault();
    console.log(e.target.innerText, 'drop element');
    console.dir(e.target, 'dir');
  };

  assignWidth = (text) => {
    console.log(text, 'assign width');
    switch (text) {
      case 'Things To do':
        return '51%';
      case 'Owner':
        return '9%';
      case 'Status':
        return '15%';
      case 'Priority':
        return '10%';
      case 'Due date':
        return '8%';
      default:
        return;
    }
  };

  render() {
    const { touched } = this.state;
    const { pages, pageId, todoHeaders } = this.props;

    const list =
      pages && pages.length ? pages.find((item) => item.id === pageId) : {};

    return (
      <div>
        <div>
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {todoHeaders &&
              todoHeaders.map((itm, id) => {
                const index = id === 0;
                const style = {
                  color: index ? 'dodgerblue' : 'rgba(0,0,0,0.8)',
                  fontSize: index ? '18px' : '15px',
                  width: index ? '48%' : '10%',
                  display: index ? 'flex' : 'block',
                  fontWeight: 300,
                  textAlign: 'center',
                  // backgroundColor: index ? '#ccc' : 'red',
                };
                return (
                  <div
                    onClick={
                      itm.toLowerCase() === 'status'
                        ? () => {
                            console.log('status clicked');
                          }
                        : null
                    }
                    id={itm}
                    draggable
                    onDrag={this.menuDrag}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => this.menuDragDrop(e)}
                    key={itm}
                    style={{ ...style }}
                  >
                    {id === 0 && (
                      <Button>
                        <IoMdArrowDropdownCircle
                          style={{ color: 'dodgerblue', fontSize: '20px' }}
                        />
                      </Button>
                    )}
                    <p>{itm}</p>
                  </div>
                );
              })}
            <div>
              <FaPlusCircle />
            </div>
          </div>
          {list && list.todos && list.todos.length
            ? list.todos.map((itm, id) => {
                return (
                  <Todo
                    todoHeaders={todoHeaders}
                    onDragOver={this.onDragOver}
                    onDrag={this.onDrag}
                    onDrop={this.onDrop}
                    key={itm.id}
                    id={itm.id}
                    data={itm}
                  />
                );
              })
            : null}
        </div>
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

const mapDipatchToProps = {
  dispatchSwapTask: swapTodoColumn,
};

export default connect(mapStateToProps, mapDipatchToProps)(TodoList);
