import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
const clientId = '989981942192-c0mm7hq5oe3iemf5jc1q5lr6sgulnkv7.apps.googleusercontent.com';

export const LoginGoogle = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    var profile = googleUser.getBasicProfile();
    console.log(profile);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Continue with Google"
        onSuccess={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};
