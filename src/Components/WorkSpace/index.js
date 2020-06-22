import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { FaApple } from 'react-icons/fa';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { IoIosArrowDropleft } from 'react-icons/io';
import Button from '../../UIComponents/Button';
import Input from '../../UIComponents/Input';
import Pages from './Pages';
import playStore from '../../helpers/assets/playstore.png';
import {
  setCurrentPage,
  toggleWorkSpace,
  addNewPage,
} from '../../redux-utils/actions';

class WorkSpace extends Component {
  constructor(props) {
    super();
    this.state = {
      activePage: '',
    };
  }

  handleActivePage = (item) => {
    const { pageId, pageTitle } = this.props.currentPage;
    // console.log(pageId === item.id, pageId, 'handle active age');
    if (pageId !== item.id) {
      this.setState({ activePage: item.title }, () => {
        this.props.dispatchNewPage({
          params: { id: item.id, title: item.title },
        });
      });
    }
  };

  render() {
    return (
      <div className="work-space-container">
        <div>
          <div
            style={{
              backgroundColor: '#fff',
              height: '100vh',
              borderTopLeftRadius: '15px',
              padding: '20px 20px',
              borderRight: '1px solid rgba(0,0,0,0.2)',
              position: 'relative',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <h2 style={{ fontSize: '16px', fontWeight: 500 }}>Workspaces</h2>
              <Button
                onClick={() => {
                  this.props.dispatchHideScreen();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'absolute',
                  top: '-50%',
                  left: '102%',
                  backgroundColor: '#fff',
                }}
              >
                <IoIosArrowDropleft
                  style={{
                    color: 'rgba(0,0,0,0.3)',
                    fontSize: '30px',
                  }}
                />
              </Button>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                margin: '6px 0',
              }}
            >
              <span>
                <FiSearch
                  className="icons"
                  style={{
                    fontSize: '14px',
                    color: 'rgba(0, 0, 0, 0.3)',
                    paddingTop: '5px',
                  }}
                />
              </span>
              <Input
                type="text"
                placeholder="Filter boards..."
                style={{ fontSize: '14px', padding: '5px 2px', width: '90%' }}
              />
            </div>
            <Pages handleActivePage={this.handleActivePage} />
            <div style={{ height: '12vh' }}>
              <div style={{}}>
                <div
                  style={{
                    position: 'absolute',
                    borderBottom: '1px solid rgba(0,0,0,0.2)',
                    width: '100%',
                    left: 0,
                  }}
                />
                <div style={{ padding: '20px 0px', textAlign: 'left' }}>
                  <h1 style={{ fontSize: '25px', fontWeight: 400 }}>
                    Dashboards
                  </h1>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    borderBottom: '1px solid rgba(0,0,0,0.2)',
                    width: '100%',
                    left: 0,
                  }}
                />
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(0,0,0,0.2)',
                  marginTop: '10px',
                  height: '6vh',
                  borderRadius: '10px',
                }}
              >
                <h2 style={{ fontSize: '15px', fontWeight: 500 }}>
                  Get the mobile app
                </h2>
                <img
                  src={playStore}
                  style={{
                    width: '25px',
                    height: '25px',
                    objectFit: 'contain',
                  }}
                  alt="playstore"
                />
                <FaApple style={{ color: 'rgba(0,0,0,0.7)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    pages: state.pages.pages,
  };
};

const mapDispatchToProps = {
  dispatchNewPage: setCurrentPage,
  dispatchHideScreen: toggleWorkSpace,
  // dispatchNewPage: addNewPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkSpace);
