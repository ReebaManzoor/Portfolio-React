function Blog() {
  const blogs = [
    {
      title: "My First Web Dev Journey",
      desc: "Starting my journey in web development was both exciting and challenging. I began with HTML & CSS and built my first webpage.",
      img: "../images/work.png",
    },
    {
      title: "Why Responsive Design Matters",
      desc: "Users access websites from phones, tablets, and desktops. Responsive design ensures a smooth experience everywhere.",
      img: "../images/2.png",
    },
    {
      title: "Learning JavaScript Basics",
      desc: "JavaScript helped me add **powerful interactive features** like sliders, forms, and dynamic content to my websites.",
      img: "../images/3.png",
    },
  ];

  return (
    <section id="blog" className="blog">
      <h2>My Blogs</h2>

      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.img} alt="blog" />

            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <button className="read-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;