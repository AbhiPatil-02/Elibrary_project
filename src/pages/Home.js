// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   const navigateToSignUp = () => {
//     navigate('/signup');  // Navigate to SignUp page
//   };

//   const navigateToLogin = () => {
//     navigate('/login');  // Navigate to Login page
//   };

//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <button onClick={navigateToSignUp}>Sign Up</button>
//       <button onClick={navigateToLogin}>Login</button>  {/* Button for Login */}
//     </div>
//   );
// };

// export default Home;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   const navigateToSignUp = () => {
//     navigate('/signup');  // Navigate to SignUp page
//   };

//   const navigateToLogin = () => {
//     navigate('/login');  // Navigate to Login page
//   };

//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <button onClick={navigateToSignUp}>Sign Up</button>
//       <button onClick={navigateToLogin}>Login</button>  {/* Button for Login */}
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const navigateToSignUp = () => {
    navigate('/signup');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <h1>Welcome to the Home Page</h1>
        <div className="button-group">
          <button className="button sign-up" onClick={navigateToSignUp}>
            Sign Up
          </button>
          <button className="button login" onClick={navigateToLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
