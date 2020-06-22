import React from 'react';
import {
  FaRegListAlt,
  FaAngleDown,
  FaRegUserCircle,
  FaEyeSlash,
} from 'react-icons/fa';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoMdFunnel } from 'react-icons/io';
import Button from '../../UIComponents/Button';
import Input from '../../UIComponents/Input';

const SubHeader = (props) => {
  return (
    <div style={{ margin: '20px 0px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '110px',
            color: 'rgba(0,0,0,0.7)',
          }}
        >
          <FaRegListAlt style={{ fontSize: '18px' }} />
          <p style={{ fontSize: '14px' }}>Main Table</p>
          <FaAngleDown style={{ fontSize: '15px' }} />
        </div>
        <div
          style={{
            width: '45%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'dodgerblue',
              borderRadius: '20px',
            }}
          >
            <Button style={{ padding: '0px 15px' }}>
              <span
                style={{
                  fontSize: '16px',
                  color: '#fff',
                  fontWeight: 500,
                }}
              >
                New Item
              </span>
            </Button>
            <FaAngleDown
              style={{
                color: '#fff',
                borderLeft: '2px solid rgba(0,0,0,0.2)',
                padding: '7px',
              }}
            />
          </div>
          <div>
            <Input
              style={{
                borderRadius: '20px',
                padding: '7px',
                border: '0.1px solid rgba(0,0,0,0.3)',
              }}
              placeholder="Search / Filter Board"
            />
          </div>
          <div>
            <FaRegUserCircle
              style={{
                backgroundColor: '#fff',
                fontSize: '25px',
                color: 'rgba(0,0,0,0.3)',
              }}
            />
          </div>
          <div>
            <AiOutlineEyeInvisible
              style={{
                backgroundColor: '#fff',
                fontSize: '20px',
                color: 'rgba(0,0,0,0.6)',
              }}
            />
          </div>
          <div>
            <IoMdFunnel
              style={{ color: 'rgba(0,0,0,0.6)', paddingRight: '7px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
