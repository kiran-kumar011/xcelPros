import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IoIosArrowDropright } from 'react-icons/io';
import { addNewPage, toggleWorkSpace } from '../redux-utils/actions';

import pageModel from '../models/pages';
import Todo from '../models/todo';

// views
import SideMenu from '../Components/SideMenu';
import WorkSpace from '../Components/WorkSpace';
import Header from '../Components/Main';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: false,
    };
  }

  componentDidMount() {
    console.log('home mounted', this.props);
  }

  toggleButton = () => {
    this.setState({ touched: !this.state.touched });
  };

  handleMouseUp = () => {
    setTimeout(() => {
      this.setState({ touched: false }, () => {
        // const newPage = new pageModel('My page1');
      });
    }, 150);
  };

  render() {
    // const { touched } = this.state;
    const { isHidden } = this.props.pages;
    return (
      <div>
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <div
            style={{
              backgroundColor: '#312d53',
              display: 'flex',
              position: 'relative',
            }}
          >
            <SideMenu />
            {isHidden ? (
              <div
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  position: 'absolute',
                  top: '2%',
                  left: '80%',
                }}
              >
                <IoIosArrowDropright
                  onClick={() => this.props.dispatchHideScreen()}
                  style={{
                    color: 'rgba(0,0,0,0.3)',
                    fontSize: '30px',
                  }}
                />
              </div>
            ) : (
              <WorkSpace />
            )}
          </div>
          <Header />
          {/* <div>Hello</div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
  };
};

const mapDispatchToProps = {
  dispatchNewPage: addNewPage,
  dispatchHideScreen: toggleWorkSpace,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
