import React, { useState } from 'react';
import { auth } from '../firebase';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Sign up error:', error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Login error:', error.message);
    }
  };

  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div>
      <h1>Authentication Example</h1>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Auth;
