import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {console.log("options debug:",props.options)}
        {
          props.options.map((option) => (
            <Option 
          key={option} 
          optionText={option} 
          handleSingleDelete={props.handleSingleDelete}
          />))
          }
        
      </div>
    );
  };

  export default Options;