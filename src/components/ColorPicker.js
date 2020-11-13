import React, { useReducer } from 'react';
import { hexString } from '../utils/utils';
import { init, appReducer, INITIAL_STATE } from '../reducer/reducer';
import { UPD_COLOR, FORM_SUBMITTED, RESET } from '../utils/types';

const ColorPicker = () => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE, init);

  const { red, green, blue } = state;

  let colors = hexString(red, green, blue);

  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: UPD_COLOR,
      payload: {
        name,
        value,
      },
    });
  };

  const onCancel = () => {
    dispatch({ type: RESET });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: FORM_SUBMITTED });
  };

  return (
    <div className='picker'>
      <div
        className='square'
        style={{
          width: 400,
          height: 400,
          backgroundColor: colors,
        }}
      ></div>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='red'> Red </label>

          <input
            name='red'
            type='range'
            min='0'
            max='255'
            value={red}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn submit'>
          Submit
        </button>

        <div>
          rgb({red}, {green}, {blue})
        </div>
      </form>
      <button onClick={onCancel} className='btn cancel'>
        Cancel
      </button>
    </div>
  );
};

export default ColorPicker;
