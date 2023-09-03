import Head from 'next/head'
import LayoutLogin from '@/components/login_components/LayoutLoginReg';
import Link from 'next/link';
import styles from '@/styles/Form.module.css';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import LayoutLoginReg from '@/components/login_components/LayoutLoginReg';

export default function Register() {

  const [show, setShow] = useState({password:false, conPassword:false});

  return (
    <LayoutLoginReg>
      <Head>
            <title>Register</title>
        </Head>

        <section className="w-4/5 mx-auto flex flex-col gap-2">

        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, veniam..</p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-2">
        <div className={styles.input_group}>
            <input
            type="text" 
            name="usrnamer"
            placeholder="Username"
            className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
            type="email" 
            name="email"
            placeholder="Email"
            className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
            type={`${show.password ? "text" : "password"}`} 
            name="password"
            placeholder="Password"
            className={styles.input_text}
            />
            <span className="icon flex items-center px-4" onClick={()=> setShow({...show, password: !show.password})}>
              <HiFingerPrint size={25} />
            </span>
          </div>

          <div className={styles.input_group}>
            <input
            type={`${show.conPassword ? "text" : "password"}`} 
            name="conPassword"
            placeholder="Confirm Password"
            className={styles.input_text}
            />
            <span className="icon flex items-center px-4" onClick={()=> setShow({...show, conPassword: !show.conPassword})}>
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Signup
            </button>
          </div>

        </form>

        {/* Bottom */}
        <p className="text-center text-gray-400"> 
        Have an account? <Link href={'/login_reg/login'} legacyBehavior><a className="text-blue-700"> Login</a></Link>
        </p>
      </section>
        
    </LayoutLoginReg>
  )
}
