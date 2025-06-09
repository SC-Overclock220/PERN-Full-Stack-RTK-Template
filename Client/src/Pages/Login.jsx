import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='w-full sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto p-4'>

            <h3 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium md:font-semibold:font-bold text-center my-2'>Login</h3>

            <form className='flex flex-col space-y-4'>

                <div className=' py-2 flex flex-col space-y-2'>

                    <label>Username</label>
                    <input type='text' placeholder='Username' className='w-full py-2 px-2 border border-gray-600 rounded-md focus:outline-none  focus:ring-2 focus:ring-emerald-400' />


                </div>
                <div className=' py-2 flex flex-col space-y-2'>

                    <label>Email</label>
                    <input type='email' className='w-full py-2 px-2 border border-gray-600 rounded-md focus:outline-none  focus:ring-2 focus:ring-emerald-400' placeholder='Email' />


                </div>



                <div className=' py-2 flex flex-col space-y-2'>

                    <label>Password</label>
                    <input type='text' className='w-full py-2 px-2 border border-gray-600 rounded-md focus:outline-none  focus:ring-2 focus:ring-emerald-400' placeholder='Password' />


                </div>

                <div className=' py-2 flex flex-col space-y-2'>


                    <button className="btn bg-emerald-500" type='submit'>Login</button>


                </div>
                <div className=' py-2 flex flex-col space-y-2'>


                    <p>Dont Have An Account? <Link className='underline text-emerald-600' to="/signup">Sign Up</Link></p>


                </div>

            </form>



        </div>
    )
}

export default Login