import React, { Component } from 'react'
import { HiEye,HiEyeOff } from "react-icons/hi";
import Image from 'next/image';
import { IoReloadSharp } from 'react-icons/io5';
import Link from 'next/link';
import InputField from './InputField';
import styles from '../app/styles/Form.module.css'
import PasswordField from './PasswordField';
import { useFormik } from 'formik';


export class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        captcha: '',
      };    

    handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
        [name]: value,
    });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password, captcha } = this.state;
        console.log({ email, password, captcha });
      };

  render() {

    const { user_type } = this.props;
    console.log(user_type,'user_type')
    const defined_user = user_type === 'Agent' ? 'Agent' : 'Admin';

    const switch_user = user_type === "Agent"? 'Admin':'Agent';

    const url_redirect  = user_type === "Agent"? 'admin':'';
        return (
        <form className='flex flex-col gap-4' onSubmit={this.handleSubmit}>
                <div>
                    <h1><strong>
                        <span>Login as <span>{ defined_user }</span></span>
                    </strong></h1>
                </div>
                
                <div className={`${styles.input_group}`}>
                    <InputField inputType='text' inputName='email' inputPlaceholder='Enter your agent ID or mail ID here' value={''} ExtclassName={styles.input_text} 
            onChange={this.handleInputChange} characterRestriction={/^[A-Za-z0-9_@]+$/} lengthRestrict={8} characterRestrictionError='Only Characters Allowed' required />
                </div>
                <div className={`${styles.input_group}`}>
                    <PasswordField inputName='password' inputPlaceholder='Enter your password here'  value={''} ExtclassName={styles.input_text} 
            onChange={this.handleInputChange} required={true}/>
                </div>

                <div className='flex justify-end text-sm'>
                    <a href='/forgot' className={styles.forgot_password_link}><strong>Forgot Password ?</strong></a>
                </div>
                <div className={`${styles.captcha_group || "justify-between"} gap-3`} >
                    <Image id='generated_captcha' width={100} height={37} src="/assets/captcha.jpg" alt='captcha'/>
                    <span className='icon flex items-center'> <IoReloadSharp size={25}/></span>
                        <div className={`${styles.captcha_group}flex flex-col`}>    
                            <label>Enter captcha here</label>
                            <input type='text' name='captcha' placeholder='Enter here ' className={`${styles.input_group} focus:outline-none py-2`}                 
            onChange={this.handleInputChange}/>
                        </div>
                </div>
                
                <div className='flex justify-between items-end py-4'>
                    <p className={`text-sm`}>Please{' '}
                        <Link href={`/${url_redirect}`}>
                        <span className={`${styles.admin_login_link} ${styles.link}`}>click here</span>{' '}for {switch_user} login
                        </Link>
                    </p>
                    <button className={`${styles.button}`} type='submit'>Login</button>
                </div>
            </form>
    )
  }
}
export default LoginForm;