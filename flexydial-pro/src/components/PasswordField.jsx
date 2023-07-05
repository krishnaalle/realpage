import React, { useEffect, useRef, useState } from 'react';
import styles from '../app/styles/Form.module.css';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const PasswordField = (props) => {
  const [show, setShow] = useState(false);
  const passwordRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (passwordRef.current && !passwordRef.current.contains(event.target)) {
        setShow(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <input
        ref={passwordRef}
        type={show ? 'text' : 'password'}
        name={props.inputName}
        placeholder={props.inputPlaceholder}
        className={props.ExtclassName}
      />
      <span className="icon flex items-center px-4" onClick={() => setShow(!show)}>
        {show ? <HiEyeOff size={25} /> : <HiEye size={25} />}
      </span>
    </>
  );
};

export default PasswordField;
