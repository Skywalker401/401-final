import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React, { useState } from 'react';

function Token() {
  const [state, setState] = useState({ isLoading: false, response: undefined, error: undefined });

  const callApi = async () => {
    setState(previous => ({ ...previous, isLoading: true }))

    try {
      const response = await fetch('https://dev-4vam03w3.us.auth0.com/api/v2/');
      const data = await response.json();

      setState(previous => ({ ...previous, response: data, error: undefined }))
    } catch (error) {
      setState(previous => ({ ...previous, response: undefined, error }))
    } finally {
      setState(previous => ({ ...previous, isLoading: false }))
    }
  };

  const handle = (event, fn) => {
    event.preventDefault();
    fn();
  };

  return (
    <>
      <p>Token</p>
      <button onClick={e => handle(e, callApi)}> Get Token
      </button>
      <p>{state.data}</p>
    </>
  );
}

export default withPageAuthRequired(Token, {

});