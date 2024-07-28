const Login = () => {
    return (
        <div>
            <p className="mb-1 text-center text-2xl font-semibold">Welcome back</p>
            <p className="mb-6 text-center text-lg text-token-text-secondary">Log in or sign up to get compiled notes from youtube links</p>
            <button className="btn relative btn-primary btn-large w-full mb-2 sm:mb-3">Log in</button>
            <button className="btn relative btn-secondary btn-large w-full mb-5">Sign up</button>
        </div>
    );
}

export default Login;