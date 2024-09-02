// src/components/EnquiryForm.js
import React, { useState } from 'react';
import './EnquiryForm.css'; // Create this CSS file to style the form

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '', // Updated field name
    state: '',
    program: '', // Removed city field since it's not in the database
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        if (result.success) {
          setSuccess(result.message); // Use the success message from the response
          setError('');
          setFormData({
            name: '',
            email: '',
            mobileNumber: '',
            state: '',
            program: '',
          }); // Reset form data
        } else {
          setError(result.message || 'Registration failed. Please try again.');
          setSuccess('');
        }
      } else if (response.status === 409) {
        setError(result.message || 'Conflict error. Data might already exist.');
        setSuccess('');
      } else {
        setError(result.message || 'Registration failed. Please try again.');
        setSuccess('');
      }

    } catch (error) {
      console.error('Fetch error:', error); // Log error to console
      setError('An unexpected error occurred. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="enquiry-form">
      <h2>Enquire Now</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="mobileNumber" // Updated field name
          placeholder="Mobile Number*"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="">Select State*</option>
          <option value="State1">State 1</option>
          <option value="State2">State 2</option>
          {/* Add more states as options */}
        </select>
        <select
          name="program"
          value={formData.program}
          onChange={handleChange}
          required
        >
          <option value="">Program*</option>
          <option value="Program1">Program 1</option>
          <option value="Program2">Program 2</option>
          {/* Add more programs as options */}
        </select>
        <div className="checkbox-container">
          <input type="checkbox" id="consent" name="consent" required />
          <label htmlFor="consent">
            I authorize Manipal and its associates to contact me via SMS, email,
            or call.
          </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </form>
    </div>
  );
};

export default EnquiryForm;
