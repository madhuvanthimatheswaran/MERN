import './footer.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <footer className="footer">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" className="input-field" required />
        <input type="email" placeholder="Email" className="input-field" required />
        <input type="password" placeholder="Password" className="input-field" required />
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </footer>
  );
};

export default Footer;
