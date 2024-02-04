import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react';

const Signup = () => {
  return (
    <div className='min-h-sreeen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row
      md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link to="/" className=' font-bold dark:text-white text-4xl' >

          <span className='px-2 py-1 bg-gradient-to-r from-blue-500
          via-purple-600 to bg-pink-500 rounded-lg text-white' >Yaduvesh's</span>
          Blog
        </Link>
        <p className='text-sm mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis enim consequatur quisquam nisi beatae id, asperiores dignissimos ut explicabo?</p>

      </div>
        {/* Right side  */}
        <div className="flex-1">
            <form className='flex flex-col gap-4' >
              <div>
                <Label value="Your username"/>
                <TextInput type='text' placeholder='Username' id='username'/>
              </div>

              <div>
                <Label value="Your email"/>
                <TextInput type='email' placeholder='example@gmail.com' id='email'/>
              </div>

              <div>
                <Label value="Your Password"/>
                <TextInput type='password' placeholder='Password' id='password'/>
              </div>

              <Button gradientDuoTone='purpleToPink' type='submit'>
                Sign Up
              </Button>
            </form>
            <div className="flex gap-2 text-sm mt-5">
              <span>Have an account?</span>
              <Link to='/signin' className='text-blue-500'>Sign in</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup