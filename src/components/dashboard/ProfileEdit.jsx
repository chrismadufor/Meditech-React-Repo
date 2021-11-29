import React from 'react'
import TopNav from './layouts/TopNav'
import Editcss from '../styles/profile.module.css'
import { Formik } from 'formik';


function ProfileEdit() {

    return (
      <div className={Editcss.main}>
        <TopNav name= 'Profile Edit'/>
        <div className={Editcss.mainContent}>
          <div className={Editcss.mainContentWrap}>
             
          <div className={Editcss.modal} >


          <Formik
       initialValues={
         {name:'',
          email: '',
          hospitalId:'',
          number:'',
          DOB: '',
          nationality: '',
          city: '',
          address:'',
          password: '',  }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
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
         <form className={Editcss.editProfileContainer} onSubmit={handleSubmit}>
           <div className={Editcss.formTitle}>
            <h2>Edit Profile</h2>
            <h2 className={Editcss.closeModal} onclick="editProfile();">x</h2>
          </div>
          <div className={Editcss.imgWrap}>
            <div className={Editcss.imgPreview}>
              <img className={Editcss.editProfileImg} src="img/profile-picture.jpg" alt="" />
            </div>
            <input type="file" name="profile-image" id="patient-image" />
          </div>

          <div className={Editcss.inputWrap}>
            <div className={Editcss.formInput}>
              <label for="full-name"> Full Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                id="patient-name"
                placeholder="Enter your name"
              />
             {errors.name && touched.name && errors.name}

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-email">Email</label>
              <input
               type="email"
               name="email"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.email}
               id="patient-email"
               placeholder="Enter your email"
              />
           {errors.email && touched.email && errors.email}

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-id">Hospital ID</label>
              <input
               type="text" 
               id="patient-id"
               name="hospitalId"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.hospitalId}
                />
           {errors.hospitalId && touched.hospitalId && errors.hospitalId}

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-phone">Phone Number</label>
              <input
                type="number"
                id="patient-phone"
                name="number"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.number}
                placeholder="Enter your phone number"
              />
           {errors.number && touched.number && errors.number}

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-dob">Date of birth</label>
              <input
                type="text"
                id="patient-dob"
                name="DOB"
               onChange={handleChange}
               onBlur={handleBlur}
               value={values.DOB}
                placeholder="Enter your date of birth"
              />
           {errors.DOB && touched.DOB && errors.DOB}

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-nationality">Nationality</label>
              <input
                type="text"
                id="patient-nationality"
                name="nationality"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nationality}
                placeholder="Enter your nationality"
              />
           {errors.nationality && touched.nationality && errors.nationality}

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-city">City</label>
              <input
                type="text"
                id="patient-city"
                name="city"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                placeholder="Enter your city"
              />
           {errors.city && touched.city && errors.city}

            </div>
            <div className={Editcss.formInput}>
              <label for="patient-address">Address</label>
              <input
                type="text"
                id="patient-address"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
                placeholder="Enter your address"
              />
           {errors.address && touched.address && errors.address}

            </div>
          </div>
          
           <button type="submit" disabled={isSubmitting} 
            value="UPDATE PROFILE"
            className={Editcss.submitForm}
            id="submit-form"
            onclick="editProfile();">
             Submit
           </button>
         </form>
       )}
     </Formik>



      
    </div>
    </div>
    </div>
  
      </div>

      
    )
}

export default ProfileEdit
