import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/signup', {
                name,
                email,
                password
            });
            
            // Reset form fields after successful submission
            setName('');
            setEmail('');
            setPassword('');
            alert('signed up  successfully');
            // route to home page
            window.location.href = '/';
        } catch (error) {
            console.error('Error submitting :', error);
            alert('Failed to submit ');
        }
    };

  return (
    // provide the signup form
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            {/* give name field */}
            <div className="mb-3">
              <label htmlFor="signup" className="form-label">Name</label>
              <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} id="exampleInputName"/>
            </div>
            
            <div className="mb-3">
              <label htmlFor="signup" className="form-label">Email address</label>
              <input type="email" className="form-control"  value={email} onChange={(e) => setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="signup" className="form-label">Password</label>
              <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup