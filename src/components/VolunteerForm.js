import React, { useState } from 'react';


function VolunteerForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thanks for volunteering, ${formData.name}!`);
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    
    <div className="volunteer-container">
      
      <div className="form-box">
        <h1>Volunteer with Basti Ki Pathshala</h1>
        <p className="intro-text">
          Join our mission to educate and uplift underprivileged children. Fill the form below to become a part of the change.
        </p>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />

          <label>Why do you want to volunteer?</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="6" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default VolunteerForm;
