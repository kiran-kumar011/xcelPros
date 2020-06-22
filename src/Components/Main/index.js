import React from 'react';
import { connect } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import { AiOutlineTable } from 'react-icons/ai';
import Button from '../../UIComponents/Button';
import Input from '../../UIComponents/Input';
import HearderIcons from './headerIcons';
import SubHeader from './subHeader';
import Todos from './Todos/index';

const Header = ({ title }) => {
  return (
    <div
      style={{
        width: '100%',
        // borderBottom: '1px solid rgba(0,0,0,0.5)',
      }}
    >
      <div
        style={{
          height: '12%',
          borderBottom: '1px  solid rgba(0,0,0,0.2)',
          padding: '30px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h1 style={{ fontSize: '30px' }}>{title}</h1>
              {title && (
                <Button>
                  <FaStar style={{ color: '#ccc', padding: '0px 10px' }} />
                </Button>
              )}
            </div>
            <Input
              type="text"
              placeholder="Add board description"
              style={{ fontSize: '13px', width: '150px' }}
            />
          </div>

          <HearderIcons />
        </div>
        <SubHeader />
      </div>
      <Todos />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.currentPage.pageTitle,
    pageItems: state.pages.pages,
  };
};

export default connect(mapStateToProps)(Header);
