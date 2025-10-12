import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';

const googleProvider= new GoogleAuthProvider();

const Loginpage = () => {

    const [user, setUser]=useState(null);

    const handleGoogleSignnIn=()=>{
        // console.log('button clicked')
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result)
            setUser(result.user)
        })
        .then(error=>{
            console.log(error)
        })
    }

    const handleSignOut=()=>
    {
        signOut(auth)
        .then(()=>
        setUser(null))
        .then(error=>console.log(error))
    }
    return (
        <div className='text-center'>
            <h1 className='mb-4'>login Please</h1>
            {/* <button onClick={handleGoogleSignnIn} className='btn btn-outline'>Sign In with Goggle</button>
            <button onClick={handleSignOut}>Sign Out</button> */}

            {user ?  <button onClick={handleSignOut} className='btn btn-outline'>Sign Out</button> : <button onClick={handleGoogleSignnIn} className='btn btn-outline'>Sign In with Goggle</button>
}
            {user && <div>
                <h1>{user.displayName}</h1>
                </div>
                }
        </div>
    );
};

export default Loginpage;