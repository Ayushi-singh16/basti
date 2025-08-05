import React from 'react';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <>
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

      {/* New section below header */}
      <div className="welcome-section" style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
  <img src="img.png" width="100%" height="800px" alt="Welcome" />

  <div style={{
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -30%)',
    color: 'white',
    padding: '20px'
  }}>
    <h1 style={{ fontSize: '100px', color: 'white', marginBottom: '20px' }}>Basti Ki Pathshala</h1>
    
    <p style={{ fontSize: '24px', maxWidth: '800px', margin: 'auto', color: 'white' }}>
      Basti Ki Pathshala Foundation is on a mission to transform lives through the power of education.
      We work with underprivileged children to provide learning opportunities, life skills, and hope for a better future.
    </p>

    <div style={{ marginTop: '40px' }}>
      <a href="/volunteer" style={{
        backgroundColor: '#1e1e1e',  // Dark gray
        color: 'white',
        padding: '15px 30px',
        fontSize: '20px',
        marginRight: '20px',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        border: '2px solid white'
      }}>Volunteer</a>

      <a href="#donate" style={{
        backgroundColor: '#343a40',  // Dark charcoal
        color: 'white',
        padding: '15px 30px',
        fontSize: '20px',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        border: '2px solid white'
      }}>Donate</a>
    </div>
  </div>
</div>

      <div className="welcome-section2">
        <img src='image.png' width="100%" height="800px"></img>
      </div>
      <div className="welcome-section3">
        <div className='div1'>
          <img src='img2.png' height="100%" width="100%"></img>
        </div>
        <div className='div2'>
           <h1  className='heading1'>Lighting the Path to Change</h1>
  <h2 className='heading2'>With Basti Ki Pathshala Foundation</h2>
  
  <p style={{fontSize:"30px",fontStyle:"bold"}}>
    At Basti Ki Pathshala Foundation, we are not jgit add .ust an organization — we are a movement inspired by the belief that education is the key to true empowerment.
  </p>
  
  <p>
    Registered under the Indian Societies Act of 1860, we shine as a ray of hope in marginalized areas, committed to breaking the cycle of poverty through quality education.
  </p>
  
  <p>
    Join us in transforming lives, one child at a time. Let's create a future where every child can dream big, learn freely, and achieve greatness.
  </p>
  
  <p>
    Welcome to Basti Ki Pathshala Foundation — where we invest in hope, and build a lasting legacy through education.
  </p>
        </div>

      </div>
      <div className='welcome-section31'>
        <h1 className='head'>How  we help to change the future</h1>
      </div>
      <div className="welcome-section3">
        <div className='div1'>
          <img src='poor1.png' height="100%" width="100%"></img>
        </div>
        <div className='div2'>
           <h1  className='heading1' style={{ fontSize: "30px" }}>"Helping Hands, Changing Lives"</h1>
  <h2 className='heading2'>With Basti Ki Pathshala Foundation</h2>
  
  <p >
    At Basti Ki Pathshala Foundation, we believe that every child deserves a chance to learn and grow. That’s why we provide free education to underprivileged children who cannot afford to attend school. Our dedicated volunteers teach basic subjects and help build a strong foundation for a brighter future.

We also support children by distributing essential study materials such as books, notebooks, pens, and school bags. These small contributions make a big difference in encouraging children to continue their studies.

In addition to education, we focus on skill development programs that teach children and women useful skills like sewing, computers, and handmade crafts. These programs help them become self-reliant and confident.
  </p>
  
  <p>
    Registered under the Indian Societies Act of 1860, we shine as a ray of hope in marginalized areas, committed to breaking the cycle of poverty through quality education.
  </p>
  
  <p>
    Join us in transforming lives, one child at a time. Let's create a future where every child can dream big, learn freely, and achieve greatness.
  </p>
  
  <p>
    Welcome to Basti Ki Pathshala Foundation — where we invest in hope, and build a lasting legacy through education.
  </p>
        </div>

      </div>

            <footer className="modern-footer">
  <div className="footer-top">
    <div className="footer-brand">
      <h2>Basti Ki Pathshala</h2>
      <p>Transforming lives through education and empowerment in underserved communities.</p>
    </div>

    <div className="footer-links">
      <h4>Explore</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Donate</a></li>
        <li><a href="#">Volunteer</a></li>
      </ul>
    </div>

    <div className="footer-contact">
      <h4>Contact</h4>
      <p>Email: <a href="mailto:info@bastikipathshala.org">info@bastikipathshala.org</a></p>
      <p>Phone: +91-9876543210</p>
      <p>Location: New Delhi, India</p>
    </div>

    <div className="footer-social">
      <h4>Follow Us</h4>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Basti Ki Pathshala Foundation. All rights reserved.</p>
  </div>
</footer>


      
    </>
  );
}

export default Home;
