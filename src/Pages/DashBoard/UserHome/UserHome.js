import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div className='w-full'>
          <h2 className='text-3xl mt-4 text-green-500'> Welcome Back, {user?.displayName}</h2>
        </div>
    );
};

export default UserHome;