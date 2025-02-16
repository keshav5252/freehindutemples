import { Link } from 'react-router-dom';

const Signup = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <form onSubmit={handleOnSubmit} className='form-container'>
            <div className="form">
                <h1 className='font-bold'>Sign Up</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" placeholder="Confirm password" required />
                </div>
                <div className="form-group">
                    <p>Already have an account ?<Link to='/login'> Login Now</Link></p>
                </div>
                <button type="submit" className="btn">Sign Up</button>
            </div>
        </form>
    );
};

export default Signup;