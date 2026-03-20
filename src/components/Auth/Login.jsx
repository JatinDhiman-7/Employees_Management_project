import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted")
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gray-900'>
            <div className='border-2 border-red-600 p-8 rounded-xl'>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-4 items-center justify-center'
                >
                    <input
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                        className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-lg rounded-full placeholder:text-gray-400 w-72'
                        type="email"
                        placeholder='Enter your email'
                    />

                    <input
                        required
                        className='text-white outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-lg rounded-full placeholder:text-gray-400 w-72'
                        type="password"
                        placeholder='Enter your password'
                    />

                    <button
                        className='bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-full w-72 transition'
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login