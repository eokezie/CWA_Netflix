import React from 'react';

import Input from '@/components/Input';

const Auth = () => {
    const [email, setEmail] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [variant, setVariant] = React.useState('login');

    const toggleVariant = React.useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, []);

  return (
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className="px-12 py-5">
                <img src="/images/logo.png" alt="logo" className="h-12" />
            </nav>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    <h2 className="text-white text-4xl mb-8 font-semibold">
                        {variant === 'login' ? 'Sign In' : 'Create an Account'}
                    </h2>
                    <div className="flex flex-col gap-4">
                        {variant === 'register' && (
                            <Input
                                label='Name'
                                onChange={(e:any) => setUsername(e.target.value)}
                                id='name'
                                type='name'
                                value={username}
                            />
                        )}
                        <Input
                            label='Email'
                            onChange={(e:any) => setEmail(e.target.value)}
                            id='email'
                            type='email'
                            value={email}
                        />
                        <Input
                            label='Password'
                            onChange={(e:any) => setPassword(e.target.value)}
                            id='password'
                            type='password'
                            value={password}
                        />
                    </div>
                    <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                    {variant === 'login' ? "Login" : "Sign Up"}
                    </button>
                    <p className='text-neutral-500 mt-12'>
                        {variant === 'register' ? 'First time using Netflix?' : 'Already have an account?'}
                        
                        <span className="text-white ml-1 hover:underline cursor-pointer" onClick={toggleVariant}> 
                         {variant === 'register' ? "Create an account" : "Sign in"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth