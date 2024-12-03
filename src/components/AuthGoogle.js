import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import { useNavigate } from 'react-router-dom';

function AuthGoogle() {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const googleAuth = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                },
            },
        });
        if (error) {
            console.error('Error during sign-in:', error);
        } else {
            console.log('Sign-in data:', data);
        }
    };

    const handleUser = async () => {
        const { data, error } = await supabase.auth.getUser();
        if (error) {
            console.error('Error fetching user:', error);
        } else {
            console.log('User data:', data);
            if (data?.user) {
                setUser(data.user);
                navigate('/LandingPage');
            }
        }
    };

    const LogOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Error during sign-out:', error);
        } else {
            setUser(null);
        }
    };

    useEffect(() => {
        handleUser();
    }, []);

    return (
        <div className='bg-blue-500 text-white'>
            {user ? (
                <button onClick={LogOut}>Logout</button>
            ) : (
                <button onClick={googleAuth}>Sign In</button>
            )}
        </div>
    );
}

export default AuthGoogle;
