import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "@/components/Nav";
import {useState} from "react";
import Logo from "@/components/Logo";

import LayoutLoginReg from "./login_components/LayoutLoginReg";
import styles from '@/styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import Link from 'next/link';
import Image from 'next/image';

export default function Layout({children}) {
  const [showNav,setShowNav] = useState(false);
  const { data: session } = useSession();

  const [show, setShow] = useState(false);

  // Google Handler function
  async function handleGoogleSignin() {
    signIn('google', {callbackUrl:"http://localhost:3000"});
  }

 // Github Login
    async function handleGithubSignin() {
        signIn('github', {callbackUrl:"http://localhost:3000"});
    } 

  if (!session) {
    return (
      <LayoutLoginReg>
      <section className="w-4/5 mt-2 mx-10 my-auto flex flex-col gap-2">

        <div className="title">
          <h1 className="text-green-800 text-3xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, veniam..</p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-2">
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
            type={`${show ? "text" : "password"}`} 
            name="password"
            placeholder="Password"
            className={styles.input_text}
            />
            <span className="icon flex items-center px-4" onClick={()=> setShow(!show)}>
              <HiFingerPrint size={25} />
            </span>
          </div>

          {/* login buttons */}
          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button">
            <button type="button" onClick={handleGoogleSignin} className={styles.button_custom}>
              Sign In with Google <Image src={'/assets/google.png'} width="20" height="20"/>
            </button>
          </div>
          <div className="input-button">
            <button type="button" onClick={handleGithubSignin} className={styles.button_custom}>
              Sign In with Github <Image src={'/assets/github.png'} width="25" height="25"/>
            </button>
          </div>

        </form>

        {/* Bottom */}
        <p className="text-center text-gray-400"> 
        don't have an account yet? <Link href={'/login_reg/register'} legacyBehavior><a className="text-blue-700"> Sign Up</a></Link>
        </p>
      </section>
      </LayoutLoginReg>
    );
  }

  return (
    <div className="bg-bgGray min-h-screen ">
      <div className="block md:hidden items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4">
          {children}
        </div>
      </div>
    </div>
  );
}