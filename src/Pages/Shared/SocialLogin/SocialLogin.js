import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location  = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handlegoogleSignIn =() =>{

   
         
        googleSignIn()
        .then(result=>{
            const loggedUser = result.user;
            // result.send(loggedUser);
            console.log(loggedUser);
            const saveUser = {name: loggedUser.displayName, email: loggedUser.email}

            fetch(`http://localhost:5000/users`, {
                method:'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        
                        
                        navigate(from, { replace: true });
                    }
                })


           
        })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className='w-full text-center my-4'>
            <button onClick={handlegoogleSignIn} className="btn btn-square btn-outline">
                <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;