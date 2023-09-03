import Head from 'next/head';
import LayoutLoginReg from '@/components/login_components/LayoutLoginReg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/Form.module.css';
import Image from 'next/image';
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import { signIn, signOut } from 'next-auth/react';

export default function Login() {

  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/');
  };

  // Google Handler function
  async function handleGoogleSignin() {
    signIn('google', {callbackUrl:"http://localhost:3000"});
  }

 // Github Login
    async function handleGithubSignin() {
        signIn('github', {callbackUrl:"http://localhost:3000"});
    } 

  return (
    <LayoutLoginReg>
      {/* <button type="button" className="loginExit-btn" onClick={handleButtonClick}>
          <AiOutlineCloseCircle />
      </button> */}

      <Head>
          <title>Login</title>
      </Head>

      <section className="w-4/5 mt-2 mx-10 my-auto flex flex-col gap-2">

        <div className="title">
          <h1 className="text-green-800 text-3xl font-bold py-4">ADMIN LOGIN</h1>
          <p className="w-3/4 mx-auto text-gray-500">Enter a valid admin email and password</p>
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
              Sign In with Google <Image src={'/assets/google.png'} width="20" height="20"></Image>
            </button>
          </div>
          <div className="input-button">
            <button type="button" onClick={handleGithubSignin} className={styles.button_custom}>
              Sign In with Github <Image src={'/assets/github.png'} width="25" height="25"></Image>
            </button>
          </div>

        </form>

        {/* Bottom */}
        {/* <p className="text-center text-gray-400"> 
        don't have an account yet? <Link href={'/login_reg/register'} legacyBehavior><a className="text-blue-700"> Sign Up</a></Link>
        </p> */}
      </section>
        
    </LayoutLoginReg>
  )
}
