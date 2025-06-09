import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginFunction } from '../Slices/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error } = useSelector((state) => ({ ...state.auth }))


    useEffect(() => { error && toast.error(error) }, [error])

    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = (e) => {

        e.preventDefault();


        console.log(formData);


        const { username, email, password } = formData;

        if (!username || !password || !email)
            return toast.error(`None Of The Required Fields Can Be Empty`);



        dispatch(loginFunction({ formData, navigate, toast }))







    }


    return (
        <div className='w-full sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto p-4'>

            <h3 className='text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium md:font-semibold:font-bold text-center my-2'>Login</h3>

            <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>

                <div className=' py-2 flex flex-col space-y-2'>

                    <label htmlFor='username'>Username</label>
                    <input type='text' placeholder='Username' className='w-full py-2 px-2 border border-gray-600 rounded-md focus:outline-none  focus:ring-2 focus:ring-emerald-400' id='username' name='username' value={formData.username} onChange={handleInputChange} />


                </div>
                <div className=' py-2 flex flex-col space-y-2'>

                    <label htmlFor='email'>Email</label>
                    <input type='email' className='w-full py-2 px-2 border border-gray-600 rounded-md focus:outline-none  focus:ring-2 focus:ring-emerald-400' placeholder='Email' id='email' name='email' value={formData.email} onChange={handleInputChange} />


                </div>



                <div className=' py-2 flex flex-col space-y-2'>

                    <label>Password</label>
                    <input type='password' className='w-full py-2 px-2 border border-gray-600 rounded-md focus:outline-none  focus:ring-2 focus:ring-emerald-400' placeholder='Password' id='password' name='password' value={formData.password} onChange={handleInputChange} />


                </div>

                <div className=' py-2 flex flex-col space-y-2'>


                    <button className="btn bg-emerald-500" type='submit'>{loading && <span className="loading loading-dots loading-md"></span>}Login</button>


                </div>
                <div className=' py-2 flex flex-col space-y-2'>


                    <p>Dont Have An Account? <Link className='underline text-emerald-600' to="/signup">Sign Up</Link></p>


                </div>

            </form>



        </div>
    )
}

export default Login