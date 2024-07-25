
// import React from 'react';
// import "./login.css"

// function Login () {
//   return (
// <div>

//   <div className="container fullpage">
//     <div className='login'>
//       <div className="top-icon">
//             <i className="material-icons">person</i>
//        </div>

//        <div className='login-part1'>
//        <div className='row login-r1'>
//        <div className='col part1-icon' >
//         <i className="material-icons">shopping_cart</i>
//         </div>
//         < div className='col title'>
//           <h4>FRESH DELISH</h4>
//           </div>

//           <div>
//             <h5>LOGIN TO ACCOUNT  </h5>
//             <p>Please enter your email and assword to continue </p>
//           </div>

//           <div className='username'>
//             <p>Username</p>
//            <input
//            type="text" id="useranme"  placeholder='admin' className='form-control'/>
//           </div>
//           <div className='password'>
//             <p>Password</p>
//             <input
//             type="password" id="password" placeholder="● ● ● ● ● ●" className='form-control'/>
//           </div>

//           <div className='checkbox'>
//             <input type="checkbox" id="remember"/>
//             <label for="remember">Remember Password</label>
//           </div>

//           <div className='forgot'>
//             <p><a href="frogetpassword">Forgot Password?</a></p>
//           </div>

//           <div className='buttonbox'>
//           <a href='/Naver.js'><button type="button">LOG IN</button></a>
//           </div>

//        </div>
//        </div>

//       </div>
//     </div>


// </div>
    
//   )
// }

// export default Login


import React from 'react';
import "./login.css"
import {useNavigate} from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


function Login () {
  const navigate=useNavigate()
  const handleClick = ()=>{
    navigate('/Navbar')
  }

  
  return (
<div>

  <div className="container fullpage">
    <div className='login'>
      <div className="top-icon">
            <i className="material-icons">person</i>
       </div>

       <div className='login-part1'>
       <div className='login-r1'>
       <div className='part1-icon' >
        <i className="material-icons">shopping_cart</i>
        </div>
        < div className='tt'>
          <h3>FRESH DELISH</h3>
          </div>

          <div className='la'>
            <h2>LOGIN TO ACCOUNT  </h2>
            <p>Please enter your email and assword to continue </p>
          </div>

          <div className='username'>
          <p className='f1'>Username</p>
           <input
           type="text" id="useranme"  placeholder='admin' className='a1'/>
          </div>
          <div className='password'>
            <p>Password</p>
            <input
            type="password" id="password" placeholder="● ● ● ● ● ●" className='form-control'/>
             <input
            type="password" id="password1" placeholder="● ● ● ● ● ●" className='form-control'/>
          </div>
          
          <div className='checkbox'>
            <input type="checkbox" id="remember"/>
            <label for="remember">Remember Password</label>
          </div>

          <div className='forgot'>
            <p><a herf='forget password'>Forgot Password?</a></p>
          </div>

          <div className='buttonbox'>
          <button type="button" onClick={handleClick}>LOG IN</button>
          </div>

       </div>
       </div>

      </div>
    </div>


</div>
    
  )
}

export default Login