import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [ isPending, setIsPending ] = useState(false);
    const navigate = useNavigate();

    const submit = async(e) => {
        e.preventDefault();
        const loginDetails = { email, password };
        setIsPending(true);

        try {
            let result = await fetch('http://localhost:8002/login', {
                method: 'POST',
                credentials: 'include',
                headers: { 
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(loginDetails)
            })

            result = await result.json();
            console.warn(result);

            if (result.token) {
                setIsPending(false);
                setEmail('');
                setPassword('');
                navigate('/');
                console.log('User logged in successfully');
            } else {
                setIsPending(false);
                console.error('Login failed:', result.message || 'An error occurred');
            }
        } catch (error) {
            console.error('Error:', error);
            setIsPending(false);
        }
    };

    return (
        <div>
            <p className="mb-1 text-center text-2xl font-semibold text-white">Welcome back</p>
            <p className="mb-6 text-center text-lg text-token-text-secondary text-white">Log in or sign up to get compiled notes from youtube links</p>

            <h1 className='text-white text-center text-lg m-1 font-semibold'>Login</h1>
            <form action='POST' className='m-auto w-2/6 gap-2 flex flex-col' onSubmit={submit}>
                <input 
                    type='email' 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder = "Email" 
                    className='p-2 rounded-md'
                    required
                />
                <input 
                    type='password' 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder = "Password" 
                    className='p-2 rounded-md'
                    required
                />
                { isPending? 
                    <button 
                        type='submit'  
                        className='p-2 rounded-md bg-[#0E9272] hover:bg-green-400 font-medium cursor-pointer'
                ><FaSpinner className='mx-auto'/></button>
                :
                <button 
                    type='submit'  
                    className='p-2 rounded-md bg-[#0E9272] hover:bg-green-400 font-medium cursor-pointer'
                >Submit</button>}
            </form>
        </div>
    );
}

export default Login;