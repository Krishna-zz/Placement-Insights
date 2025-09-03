import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';

function AuthPage() {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (location.state?.type === 'register') {
      setIsLogin(false);
    } else if (location.state?.type === 'login') {
      setIsLogin(true);
    }
  }, [location.state]);

  return (
    <div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setIsLogin(true)}
          className={`px-5 py-2 ${isLogin ? 'bg-blue-500 rounded-l-[6px] text-white' : 'bg-gray-200 rounded-l-[6px]'}`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`px-4 py-2 ${!isLogin ? 'bg-green-500 rounded-r-[6px] text-white' : 'bg-gray-200 rounded-r-[6px]'}`}
        >
          Register
        </button>
      </div>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
}

export default AuthPage;
