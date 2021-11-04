import React from "react";
import { Formik } from 'formik';
import '../../components/styles/Sign-in.css';
import Background1 from '../../components/img/background1.png'
// import { Link } from 'react-router-dom'

function SignUp() {
    return (

<div>
<section className="hero">
      <div className="background">
        <div className="left">
          <div className="card">
            <h1>Sign Up Free</h1>
            <p>Registered with the Hospital?</p>
            {/* <div className="yesorno">
              <a className="no" href="./signup-no-page.html"><p>No</p></a>
              <a className="yes" href="/"><p>Yes</p></a>
            </div> */}
            <p id="message"></p>
            <Formik
      initialValues={{ email: '', password: '', name: '',  hospitalId:''}}
      validate={values => {
        const errors = {};
        if(!values.name){
          errors.name = 'Name Required'
        }

        if(!values.hospitalId){
          errors.hospitalId = 'Identification Required'
        }

        if (!values.email) {
          errors.email = 'Email Required';
         
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
        
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      
      }) => (
        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="name"
            id="username"
             placeholder="Name"
            className="usenameSignin"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
         <div style={{color:"red"}}>  {errors.name && touched.name && errors.name} </div>


          <input
            
            id="username"
            className="usenameSignin"
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <div style={{color:"red"}}>{errors.email && touched.email && errors.email}</div>


          <input
            
            id="username"
            className="usenameSignin"
            placeholder="Hospital ID"
            type="text"
            name="hospitalId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.hospitalId}
          />
          <div style={{color:"red"}}>{errors.hospitalId && touched.hospitalId && errors.hospitalId}</div>


          <input

            id="password"
            className="passwordSignin"
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <div style={{color:"red"}}>{errors.password && touched.password && errors.password}</div>

         
            <button type="submit " className="signInBtn"  onSubmit={isSubmitting}> <a href='../components/SignIn'>SIGN UP</a>
           </button> 
          
        </form>

        
      )}
    </Formik>


          </div>
        </div>
        <div className="right">
          <div className="background-image">
            <img src={Background1} alt="background" />
          </div>
        </div>
      </div>
    </section>
    
  </div>

        // <div>
        //    <h1>This is the sign up page!</h1> 
        //    <Link to="/signin">Sign in</Link>
        // </div>
    )
}

export default SignUp
