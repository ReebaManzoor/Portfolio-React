function Services() {
  const services = [
    {
      title: "Modern Web Design",
      desc: "Clean, aesthetic and user-focused UI designs that convert visitors.",
      img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
      btn: "View Designs"
    },
    {
      title: "Frontend Development",
      desc: "Responsive React websites with smooth animations and high performance.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
      btn: "See Projects"
    },
    {
      title: "Responsive UI Expert",
      desc: "Perfect layouts for mobile, tablet, and desktop with pixel-perfect design.",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      btn: "Learn More"
    }
  ];

  return (
    <section id="services" className="services">
      <h2>What I Do</h2>

      <div className="card-container">
        {services.map((item, index) => (
          <div className="card" key={index}>
            
            <div className="card-img">
              <img src={item.img} alt={item.title} />
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <button className="card-btn">{item.btn}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;