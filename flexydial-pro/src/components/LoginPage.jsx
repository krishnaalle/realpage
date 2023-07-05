'use client';
import { React, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import LoginForm from './LoginForm';

export default function LoginPage(props){
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
      

    return(
        <>   
            <section className='mx-auto items-center py-20 flex flex-col gap-8'>
                <div className='title flex  flex-col items-center'>
                    <h1 className='text-gray-800 text-4xl font-bold py-2'>
                        <Image  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src='/assets/flexydial-logo.png' alt='/assets/flexydial-logo' width={180} height={37}/>
                    </h1>
                    <p><strong>Sign In</strong></p>
                    <p>Welcome to Flexydial</p>
                </div>
          
                <LoginForm user_type={props.user_type} />
            </section>
        </>
    )
}