import { GoogleLogin } from '@react-oauth/google';
import { googleLogin } from '../services/Api';
import { useNavigate } from 'react-router-dom';


function GoogleAuthButton(){

    const navigate = useNavigate()

    const handleSuccess = async(response) => {
        try {
            const {tokenId} = response
        const {data} = await googleLogin(tokenId)
        localStorage.setItem('token', data.token)
        alert('Google Login Successful')
        navigate('/')
        } catch (error) {
            alert('Google Login failed')
        }
    }

    const handleFailure = () => {
        alert('Google login Failed')
    }

    return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Login with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
      className="w-full bg-red-500 text-white rounded py-2 hover:bg-red-600"
    />
  );
}

export default GoogleAuthButton