import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (

        <>


            <div className='w-[90%] sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto p-4 border border-amber-500 rounded-lg' >
                <div className='my-2'>


                    In this project, we are trying to demonstrate Authentication And CRUD Operation Using PERN Stack And Redux Toolkit
                </div>

                <div className='my-2 flex justify-around items-center'>
                    <button className='btn bg-blue-500'><Link to="/login">Login</Link></button>
                    <button className='btn bg-blue-500'><Link to="/signup">Sign Up</Link></button>
                </div>
            </div>


        </>
    )
}

export default Home