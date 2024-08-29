import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail ] = useState('');
    const [name, setName ] = useState('');
    const [password, setPassword ] = useState('');
    const [ isPending, setIsPending ] = useState(false);
    const navigate = useNavigate();

    const submit = async(e) => {
        e.preventDefault();
        const userDetails = { email, name, password };
        setIsPending(true);

        try {
            await fetch('http://localhost:8002/register', {
                method: 'POST',
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(userDetails)
            }).then(() => {
                setIsPending(false);
                navigate('/');
                console.log('User registered successfully');
            })
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <p className="mb-1 text-center text-2xl font-semibold text-white">Welcome back</p>
            <p className="mb-6 text-center text-lg text-token-text-secondary text-white">Log in or sign up to get compiled notes from youtube links</p>

            <h1 className='text-white text-center text-lg m-1 font-semibold'>Signup</h1>
            <form action='POST' className='m-auto w-2/6 gap-2 flex flex-col' onSubmit={submit}>
                <input 
                    type='email' 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder = "Email" 
                    className='p-2 rounded-md'
                    required
                />
                <input 
                    type='text' 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder = "Name" 
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

export default Register;