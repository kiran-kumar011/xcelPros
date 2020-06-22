import React from 'react';
import {
  FaRegBell,
  FaDownload,
  FaConfluence,
  FaCalendarCheck,
  FaUserCircle,
} from 'react-icons/fa';
import {
  AiOutlineUserAdd,
  AiOutlineQuestion,
  AiFillStar,
} from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

import Button from '../../UIComponents/Button';

const style = {
  color: '#fff',
  fontSize: '20px',
};

const SideMenuBar = () => {
  return (
    <div className="side-menu-container">
      <div>
        <div
          className="top-icons"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Button>
            <FaConfluence className="icons" style={{ ...style }} />
          </Button>
          <Button>
            <FaRegBell className="icons" style={{ ...style }} />
          </Button>
          <Button>
            <FaDownload className="icons" style={{ ...style }} />
          </Button>
        </div>
        <div>
          <div className="label top-left">
            <div className="content">
              <div>
                <div style={{ position: 'absolute', top: '0%', left: '-30%' }}>
                  <AiFillStar style={{ color: '#fff', fontSize: '10px' }} />
                </div>
                Upgrade
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Button>
            <FaCalendarCheck className="icons" style={{ ...style }} />
          </Button>
          <Button>
            <AiOutlineUserAdd className="icons" style={{ ...style }} />
          </Button>
          <Button>
            <FiSearch className="icons" style={{ ...style }} />
          </Button>
          <Button>
            <AiOutlineQuestion className="icons" style={{ ...style }} />
          </Button>
          <Button>
            <FaUserCircle
              className="icons"
              style={{ ...style, fontSize: '35px' }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
