"use client"
import { useRouter } from 'next/navigation'
import React from 'react';
import styles from '../styles/Form.module.css';
import { HiAtSymbol } from 'react-icons/hi';
import Image from 'next/image';
import InputField from '@/components/InputField';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();

  const handleGoBack = () => {
    if (window.history.length > 1 && document.referrer.endsWith('')) {
      window.history.back();
    } else {
      router.push('/');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
        [name]: value,
    });
  };
  
  return (
    <>
      <section className="mx-auto items-center py-20 flex flex-col gap-8">  
        <div className="title flex  flex-col items-center">
          <h1 className="text-gray-800 text-4xl font-bold py-2">
            <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/assets/flexydial-logo.png" alt="/assets/flexydial-logo" width={180} height={37}/>
          </h1>
            <p><strong>Sign In</strong></p>
            <p>Welcome to Flexydial</p>
        </div>
        <form className="flex flex-col gap-4">
          <div>
            <h1><strong>Forgot Password</strong></h1>
          </div>
          <div className={`${styles.input_group}`}>
            <InputField inputType='text' inputName='email' inputPlaceholder='Enter your agent ID or mail ID here' ExtclassName={styles.input_text} 
              onChange={handleInputChange} characterRestriction={/^[A-Za-z0-9_@]+$/} />
          </div>
          <div className="flex flex-col pt-3">
            <button className={`${styles.reset_button}`} type="submit">Reset Password</button>
            <p className="text-sm mt-5 flex justify-end">Back to{' '}  <Link href="#"  onClick={handleGoBack} className={`${styles.admin_login_link} items-end`}>  Sign In</Link>   {' '}page</p>
          </div>
        </form>
      </section>
    </>
  );
}
