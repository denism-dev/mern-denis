import React, { useState } from 'react';
import './Form.css';



// Define the Form component as a functional component:
const Form = () => {   
    // state variables using the useState hook:               
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

//   additional state variables:
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

//   handleChange function to handle input changes:
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: '' // Clear the error when the user starts typing again
    });
  };

// handleSubmit function to handle form submission:
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
// Validation logic for each field
    if (formData.firstName.length < 2) {
      newErrors.firstName = 'Field must be at least 2 characters';
    }
// ... other validation checks for lastName, email, password, and confirmPassword


    if (formData.lastName.length < 2) {
      newErrors.lastName = 'Field must be at least 2 characters';
    }
    if (formData.email.length < 5) {
      newErrors.email = 'Field must be at least 5 characters';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match';
    }

// Update the errors state if there are validation errors
    if (
      newErrors.firstName ||
      newErrors.lastName ||
      newErrors.email ||
      newErrors.password ||
      newErrors.confirmPassword
    ) {
      setErrors(newErrors);
      // If no validation errors, log the form data, update submittedData state, and reset the form
    } else {
      console.log(formData);
      setSubmittedData(formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

// /* Input fields for firstName, lastName, email, password, and confirmPassword */}
//  /* Display error messages if there are any */

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </label>
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </label>
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </label>
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
{/* Display submitted data if available */}
      {submittedData && (
        <div>
          <h2>Your Form Data</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Confirm Password: {submittedData.confirmPassword}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
