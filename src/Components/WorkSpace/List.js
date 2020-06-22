import React, { useState } from 'react';
import Button from '../../UIComponents/Button';
import { connect } from 'react-redux';
import Input from '../../UIComponents/Input';
import { addNewPage, setCurrentPage } from '../../redux-utils/actions';
import PageModel from '../../models/pages';

const list = [];

const PageList = (props) => {
  const {
    handleActivePage,
    title,
    shouldDisplay,
    displayInput,
    pages,
    setDisplayInputState,
    pageId,
  } = props;
  const [inputValue, setInputValue] = useState('');
  console.log(pages, 'pages');
  return (
    <div
      style={{
        height: '66vh',
        overflow: 'scroll',
      }}
    >
      <div style={{ paddingLeft: '10px', width: '100%' }}>
        {displayInput && (
          <div
            onKeyPress={(e) => {
              if (e.key === 'Enter' && inputValue.trim()) {
                const val = inputValue;
                setInputValue('');
                const page = new PageModel(val);
                props.dispatchNewPage({ params: { page } });
                props.setDisplayInputState();
                if (!pages.length) {
                  handleActivePage(page);
                }
              }
            }}
          >
            <Input
              style={{
                border: '1px solid rgba(0,0,0,0.3)',
                padding: '5px',
                borderRadius: '5px',
                margin: '10px, 5px',
              }}
              placeholder="Add New Board"
              value={inputValue}
              onChangeMethod={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </div>
        )}
        {shouldDisplay && pages.length
          ? pages.map((itm, id) => {
              const color =
                itm.title.toLowerCase() === title.toLowerCase()
                  ? 'rgba(107,184,250,0.3)'
                  : '#fff';
              const fontColor =
                itm.title.toLowerCase() === title.toLowerCase()
                  ? 'dodgerblue'
                  : 'black';
              return (
                <Button key={id} style={{ width: '600px' }}>
                  <p
                    onClick={() => handleActivePage(itm)}
                    style={{
                      fontSize: '16px',
                      fontWeight: 300,
                      backgroundColor: color,
                      color: fontColor,
                      width: '160px',
                      padding: '8px',
                      borderRadius: '8px',
                      textAlign: 'left',
                    }}
                  >
                    {itm.title}
                  </p>
                </Button>
              );
            })
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.currentPage.pageTitle,
    pageId: state.currentPage.pageId,
    pages: state.pages.pages,
  };
};

const mapDispatchToProps = {
  dispatchNewPage: addNewPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageList);
