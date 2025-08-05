import React from 'react';
import { Link } from 'react-router-dom';


const AboutUs = () => {
  return (
    <div className="about-container">
      <header className='header'>
        <div className='logo'>
          <img src='logo1.png' alt='logo' width="200px" height="100px" />
        </div>
        <nav className='nav-links'>
  <Link to="/">Home</Link>
  <Link to="/about">About Us</Link>
  <Link to="/volunteer">Volunteer</Link>
</nav>

      </header>
      

    <div
  className="upper"
  style={{
    backgroundColor: '#fff3e0', // light orange-beige
    padding: '60px 40px',
    margin: '50px auto',
    maxWidth: '1000px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  }}
>
  <h1
    className="head1"
    style={{
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#ff6f00', // deep orange
    }}
  >
    What We Do
  </h1>
  <p
    className="para"
    style={{
      fontSize: '20px',
      lineHeight: '1.8',
      color: '#4e342e', // brownish for warm contrast
      textAlign: 'justify',
    }}
  >
    <strong>Basti Ki Pathshala</strong> is a community-driven initiative that brings education, care,
    and hope to children in underprivileged neighborhoods and urban slums. What began as a small
    effort to teach a few children has now grown into a movement to light the lamp of learning in
    forgotten corners of our society.
    <br /><br />
    We understand that not every child has access to schools, books, or even a roof over their
    head—but every child has a mind to learn and a heart to dream. That’s where we come in.
    <br /><br />
    Our volunteers—students, professionals, and kind-hearted individuals—come together to teach
    children basic literacy, numeracy, and life skills. We also organize creative workshops, health
    awareness camps, and fun learning sessions to make education joyful and holistic.
    <br /><br />
    We don’t just teach ABCs and 123s. We teach children to believe in themselves, to speak up with
    confidence, and to imagine a brighter future. We give them a safe space where they are seen,
    heard, and valued.
    <br /><br />
    Our classes may happen under a tree, on a footpath, or in a small corner of a basti—but the
    lessons stay with our children for life.
    <br /><br />
    <strong style={{ color: '#e65100' }}>Together, we are building more than just a school.</strong> <br />
    We are building a stronger, kinder, and more educated India—one child, one smile, one dream at
    a time.
  </p>
</div>

      <section className="hero">
        <div className="hero-text">
          <h1>Lighting the Path to Change</h1>
          <p>Basti Ki Pathshala Foundation is on a mission to transform lives through the power of education.</p>
        </div>
        <img src="img2.png" alt="Children learning" className="hero-image" />
      </section>

      

      <section className="values-section">
        <h2>What We Believe In</h2>
        <div className="values-grid">
          <div className="value-box">
            <h3>Education for All</h3>
            <p>We work to ensure every child, regardless of background, has access to quality learning.</p>
            <p>Our classrooms may not have walls, but they are filled with hope, curiosity, and inspiration. From the narrow lanes of urban slums to the open grounds of forgotten bastis, we bring learning right to the heart of underserved communities.

</p>
          </div>
          <div className="value-box">
            <h3>Community Upliftment</h3>
            <p>We involve local communities to create sustainable impact and real change.</p>
          <p>We provide free education, books, school supplies, and emotional support to children who would otherwise be left behind. Our aim is to bridge the gap between privilege and poverty by making learning accessible, joyful, and meaningful.</p>
          </div>
          <div className="value-box">
            <h3>Empathy & Care</h3>
            
            <p>We nurture a culture of kindness, patience, and respect in every initiative we undertake.</p>
         <p>We provide free education, books, school supplies, and emotional support to children who would otherwise be left behind. Our aim is to bridge the gap between privilege and poverty by making learning accessible, joyful, and meaningful.</p>
          </div>
        </div>
      </section>

      
      <section className="get-involved-section">
        <h2>Get Involved</h2>
        <p>
          You can be a part of this beautiful journey. Join us as a volunteer or contribute to support our mission.
        </p>
        <div className="cta-buttons">
          <a href="/volunteer" className="btn-volunteer">Become a Volunteer</a>
          <a href="/donate" className="btn-donate">Donate Now</a>
        </div>
      </section>

      <section className="closing-section">
        <h2>Let’s Rewrite the Future Together</h2>
        <p>
          Join us in creating a world where every child can dream, learn, and achieve.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
