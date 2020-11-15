import React, { Fragment } from 'react';

const FormColor = ({ onSubmit, onCancel, onChange, red, green, blue }) => {
  return (
    <Fragment>
      <form onSubmit={onSubmit} className='form'>
        <h4>Move sliders!</h4>
        <div className='form-group'>
          <label htmlFor='red'> Red </label>

          <input
            name='red'
            type='range'
            min='0'
            max='255'
            value={red}
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='green'> Green </label>
          <input
            name='green'
            type='range'
            min='0'
            max='255'
            value={green}
            onChange={onChange}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='blue'> Blue </label>
          <input
            name='blue'
            type='range'
            min='0'
            max='255'
            value={blue}
            onChange={onChange}
          />
        </div>

        <button type='submit' className='btn submit'>
          Submit
        </button>

        <button onClick={onCancel} className='btn cancel'>
          Cancel
        </button>
      </form>
    </Fragment>
  );
};

export default FormColor;
