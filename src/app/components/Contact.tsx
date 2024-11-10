import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      <div className="container">
        <h1>Contact Me</h1>
        <p>If you'd like to get in touch, feel free to reach out through the form below!</p>
        <form>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
