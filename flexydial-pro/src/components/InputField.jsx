import { useFormik } from 'formik';
import React, { useState } from 'react';
import styles from "@/app/styles/Form.module.css"

const InputField = (props) => {
  const [value, setValue] = useState(props.value || ''); 

  const characterRestriction = props.characterRestriction
  const lengthRestrict = props.lengthRestrict

  const handleChange = (event) => {
    const { value } = event.target;
    
    if(value){
      var isValid =  props.characterRestriction.test(value);
    }
    else{
      var isValid = false
      setValue(value);
      return ''
    }

    if(isValid && value.length <= lengthRestrict ) {
      setValue(value);
    }
    
  };

  const validateInput = () => {
    if (props.required && value.trim() === '') {
      return '* This field is required.';
    }
    return '';
  };

  return (
    <>

      <input type={props.inputType} name={props.inputName} placeholder={props.inputPlaceholder} className={`${styles.input_group} ${props.ExtclassName}`} value = {value} onChange={handleChange} />     
      
        {validateInput() && <p className="error">{validateInput()}</p>}
    

    </>
  );
};

export default InputField;
