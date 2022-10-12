import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";

const Auth = () => {
    const [searchParams] = useSearchParams();
    const [welcome, setWelcome] = useState();
    const [message, setMessage] = useState();

    useEffect(() => {
        axios.patch('http://localhost:2000/api/validate/' + searchParams.get('id'))
        .then((res) => {
            console.log(res.data);

            if(res.data.success) {
                setWelcome("Welcome " + res.data.user + "!")
                setMessage("Your account has been verified")
            } else {
                setWelcome("Account not verified")
                setMessage("There was a problem verifying your account, place conctact system admin")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

  return (
    <div>
        <h1>{welcome}</h1>
        <p>{message}</p>
    </div>
  )
}

export default Auth
