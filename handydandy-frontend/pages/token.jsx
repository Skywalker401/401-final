import { getAccessToken, withPageAuthRequired, useSWR, useAuth0 } from '@auth0/nextjs-auth0';
import React, { useState } from 'react';
import axios from 'axios';
import { useUser, getSession } from '@auth0/nextjs-auth0';


export default function Token() {
  const [state, setState] = useState({ response: undefined });
  const { user } = useUser();
  console.log(user)

  async function get_token() {

    const response = await axios.post('/api/get_token')
    setState({ response: response })
    console.log(state.data)
    console.log(user)
  }

  return (
    <>
      {user && <h1>{user.name}</h1>}

      <button onClick={() => get_token()}>
        Get Token
      </button>
      {state.response &&
        <p>{state.response.data}</p>
      }
    </>
  );
}