import React from 'react';
import { connect } from 'react-redux';
import {
  FaUserCircle,
  FaRegWindowMaximize,
  FaPlug,
  FaRobot,
  FaVideo,
  FaUserFriends,
  FaEllipsisH,
} from 'react-icons/fa';
import {} from 'react-icons/fi';
import { AiOutlineEye, AiOutlineLayout } from 'react-icons/ai';
import Button from '../../UIComponents/Button';

const HearderIcons = ({ isHidden }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: isHidden ? '48.5%' : '60%',
        alignItems: 'center',
        justifyContent: 'space-around',
        // borderBottom: '1px solid black',
      }}
    >
      <div style={{ position: 'relative' }}>
        <div style={{ width: '50px' }}>
          <FaUserCircle style={{ fontSize: '30px' }} />
          <span
            style={{
              position: 'absolute',
              backgroundColor: '#fff',
              top: '-5%',
              left: '40%',
              borderRadius: '100%',
              border: '1px solid #39c2d8',
              padding: '5px 6px',
            }}
          >
            <div style={{ transform: 'rotate(-90deg)' }}>
              <AiOutlineLayout style={{ fontSize: '18px', color: '#39c2d8' }} />
            </div>
            <span
              style={{
                position: 'absolute',
                top: '30%',
                left: '40%',
              }}
            >
              <AiOutlineEye style={{ fontSize: '14px', color: '#39c2d8' }} />
            </span>
          </span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(0,0,0,0.2)',
          borderRadius: '5px',
          padding: '0px 10px',
          height: '40px',
          // width: '60px',
        }}
      >
        <div style={{ transform: 'rotate(-40deg)' }}>
          <span>
            <FaPlug style={{ fontSize: '16px', color: 'rgba(0,0,0,0.5)' }} />
          </span>
        </div>
        <span style={{ color: 'rgba(0,0,0,0.5)', fontSize: '15px' }}>/ 0</span>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(0,0,0,0.2)',
          borderRadius: '5px',
          height: '40px',
          padding: '0px 10px',
          // width: '60px',
        }}
      >
        <div>
          <span>
            <FaRobot
              style={{
                fontSize: '14px',
                color: 'rgba(0,0,0,0.5)',
                paddingRight: '2px',
              }}
            />
          </span>
        </div>
        <span style={{ color: 'rgba(0,0,0,0.5)', fontSize: '14px' }}>/ 0</span>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid rgba(0,0,0,0.2)',
            padding: '0px 15px',
            height: '40px',
            borderRadius: '20px',
          }}
        >
          <span
            style={{
              backgroundColor: 'dodgerblue',
              padding: '2px 5px',
              borderRadius: '100%',
              marginRight: '4px',
              color: 'rgba(0,0,0,0.5)',
            }}
          >
            <FaVideo style={{ color: '#fff', fontSize: '14px' }} />
          </span>
          <span
            style={{
              fontSize: '14px',
              color: 'rgba(0,0,0,0.5)',
              fontWeight: 300,
            }}
          >
            Start Zoom call
          </span>
        </div>
      </div>
      <div
        style={{
          border: '1px solid rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 9px',
          borderRadius: '05px',
          color: 'rgba(0,0,0,0.5)',
        }}
      >
        <div
          style={{
            display: 'flex',
            padding: '0px 05px',
            color: 'rgba(0,0,0,0.5)',
            alignItems: 'center',
          }}
        >
          <span>
            <FaUserFriends style={{ fontSize: '14px' }} />
          </span>
          <span style={{ fontSize: '14px' }}> / 0</span>
        </div>
        <div
          style={{ borderRight: '1px solid rgba(0,0,0,0.5)', height: '20px' }}
        ></div>
        <div
          style={{
            display: 'flex',
            padding: '0px 05px',
            color: 'rgba(0,0,0,0.5)',
          }}
        >
          <p style={{ fontSize: '14px', fontWeight: 300 }}>Activities / 0</p>
        </div>
      </div>
      <div>
        <FaEllipsisH style={{ color: 'rgba(0,0,0,0.5)' }} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isHidden: state.pages.isHidden,
  };
};

export default connect(mapStateToProps)(HearderIcons);
