import React from "react";
import './App.css';
import {useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      yourTown: '',
      service: '',
      moreDetails: ''
    },
    onSubmit: (values, onSubmitProps) =>{
      alert("Message Sent");
      console.log("values", values)
      onSubmitProps.resetForm();
    },
    validate: values =>{
      let errors = {};
      if (!values.fullName) {errors.fullName = "Field Required"};
      if (!values.phoneNumber) {errors.phoneNumber = "Field Required"
      } else if (!/^\d{10}$/.test(values.phoneNumber)) {
        errors.phoneNumber = "Invalid Number Format"
      };
      if (!values.email) {
        errors.email = "Field Required"
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid Email Format";
      }
      if (!values.yourTown) {errors.yourTown = "Field Required"};
      if (!values.service) {errors.service = "Field Required"};
      if(!values.moreDetails) {errors.moreDetails = "Field Required"};
      return errors;
    }
  });

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
      <div className="form-control">
        <label>Full Name:</label>
        <input 
          name="fullName" 
          id="nameField" 
          type="text" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.fullName}/>
        {formik.touched.fullName && formik.errors.fullName ? <div style={{color: 'red'}}>{formik.errors.fullName}</div>: null}
      </div>
      <div className="form-control">
        <label>Phone Number:</label>
        <input 
          name="phoneNumber" 
          id="numberField" 
          type="text" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}/>
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div style={{color: 'red'}}>{formik.errors.phoneNumber}</div>: null}
      </div>
      <div className="form-control">
        <label>Email:</label>
        <input 
          name="email" 
          id="emailField" 
          type="text" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.email}/>
        {formik.touched.email && formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div>: null}
      </div>
      <div className="form-control">
        <label>Your Town:</label>
        <input 
          name="yourTown" 
          id="townField" 
          type="text" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.yourTown}/>
        {formik.touched.yourTown && formik.errors.yourTown ? <div style={{color: 'red'}}>{formik.errors.yourTown}</div>: null}
      </div>
      <div className="form-control">
        <label>Service:</label>
        <input 
          name="service" 
          id="serviceField" 
          type="text" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.service}/>
        {formik.touched.service && formik.errors.service ? <div style={{color: 'red'}}>{formik.errors.service}</div>: null}
      </div>
      <div className="form-control">
        <label>More Details:</label>
        <textarea 
          name="moreDetails" 
          id="detailsField" 
          onChange={formik.handleChange} 
          onBlur={formik.handleBlur}
          value={formik.values.moreDetails}/>
        {formik.touched.moreDetails && formik.errors.moreDetails ? <div style={{color: 'red'}}>{formik.errors.moreDetails}</div>: null}
      </div>
        <div><button 
          id="submitBtn" 
          type="submit">Submit</button></div>
      </form>
    </div>
  );
}

export default App;
