function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p className="contact-subtext">
        Have a project in mind or want to collaborate?  
        Feel free to reach out — I usually respond within 24 hours.
      </p>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <div className="info-card">
            <h3>Email</h3>
            <p>reeba.dev@gmail.com</p>
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>Sindh, Pakistan</p>
          </div>

          <div className="info-card">
            <h3>Freelance</h3>
            <p>Available for work</p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Tell me about your project..."></textarea>
          <button>Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;