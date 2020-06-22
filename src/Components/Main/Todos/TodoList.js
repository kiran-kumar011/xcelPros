import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import { swapTodoColumn } from '../../../redux-utils/actions';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: false,
      draggedTask: null,
      todos: [],
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
  };

  onDrop = (e) => {
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

  render() {
    const { touched } = this.state;
    const { pages, pageId } = this.props;

    const list =
      pages && pages.length ? pages.find((item) => item.id === pageId) : {};
    console.log(this.state.draggedTask, 'draggedTask');

    return (
      <div>
        <div style={{}}>
          {list && list.todos && list.todos.length
            ? list.todos.map((itm, id) => {
                return (
                  <Todo
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
