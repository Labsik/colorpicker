import React, { useReducer, useState } from 'react';
import { hexString } from '../utils/utils';
import { init, appReducer, INITIAL_STATE } from '../reducer/reducer';
import { UPD_COLOR, FORM_SUBMITTED, RESET } from '../utils/types';
import FormColor from './FormColor';
import Modal from './Modal';

const ColorPicker = () => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE, init);
  const [show, setShow] = useState(false);

  const { red, green, blue } = state;

  let colors = hexString(red, green, blue);

  const onChange = ({ target: { name, value } }) => {
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
    setShow(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: FORM_SUBMITTED });
    setShow(false);
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
      <div>
        <p>
          Your current color is {''}
          <strong>
            rgb({red}, {green}, {blue})
          </strong>
        </p>
      </div>
      <button className='btn openmodal' onClick={() => setShow(true)}>
        Choose new color
      </button>
      <Modal show={show}>
        <FormColor
          value={state}
          onSubmit={onSubmit}
          onCancel={onCancel}
          onChange={onChange}
        />
      </Modal>
    </div>
  );
};

export default ColorPicker;
