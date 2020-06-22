import React, { useState } from 'react';
import {
  AiFillCaretDown,
  AiOutlinePlusCircle,
  AiFillCaretUp,
} from 'react-icons/ai';
import { connect } from 'react-redux';
import { FaHome } from 'react-icons/fa';
import Button from '../../UIComponents/Button';
import PageList from './List';
import { addNewPage } from '../../redux-utils/actions';

const Pages = (props) => {
  const { handleActivePage, activePage } = props;
  const [shouldDisplay, handleDisplayList] = useState(true);
  const [title, setPageTitle] = useState('');
  const [displayInput, setDisplayInputState] = useState(true);

  const ToggleIcon = shouldDisplay ? AiFillCaretDown : AiFillCaretUp;
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button
            onClick={() => handleDisplayList(!shouldDisplay)}
            style={{ position: 'absolute', left: '-10%' }}
          >
            <ToggleIcon style={{ fontSize: '12px', padding: '0px 3px' }} />
          </Button>
          <span style={{ backgroundColor: '#dd5be5', borderRadius: '5px' }}>
            <FaHome
              className="icons"
              style={{ color: '#fff', fontSize: '15px', padding: '1px 4px' }}
            />
          </span>
          <h2 style={{ fontSize: '16px', fontWeight: 400, marginLeft: '5px' }}>
            Main
          </h2>
        </div>
        <Button
          onClick={() => {
            setDisplayInputState(!displayInput);
          }}
        >
          <AiOutlinePlusCircle style={{ fontSize: '25px', color: '#39c2d8' }} />
        </Button>
      </div>
      <PageList
        setDisplayInputState={setDisplayInputState}
        displayInput={displayInput}
        setPageTitle={setPageTitle}
        shouldDisplay={shouldDisplay}
        handleActivePage={handleActivePage}
      />
    </div>
  );
};

const mapDispatchToProps = {
  dispatchNewPage: addNewPage,
};

export default connect(() => {
  return {};
}, mapDispatchToProps)(Pages);
