import "./AboutPage.css";

export default function AboutPage() {
  return (
    <main className="about-page">

      <section className="about-hero">
        <h1>About ShakhzodaShop</h1>

        <p>
          ShakhzodaShop is a modern online store created to provide
          high-quality products, affordable prices, and a simple shopping
          experience for everyone.
        </p>
      </section>

      <section className="story-section">

        <div className="story-text">

          <h2>Our Story</h2>

          <p>
            ShakhzodaShop was created with one simple goal:
            to make online shopping easier, faster, and more enjoyable.
            We carefully select quality products and offer them
            at affordable prices with a smooth shopping experience.
          </p>

          <ul>
            <li>✔ High Quality Products</li>
            <li>✔ Affordable Prices</li>
            <li>✔ Fast Delivery</li>
            <li>✔ Customer Satisfaction</li>
          </ul>

        </div>

        <div className="story-image">

          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700"
            alt="Shopping"
          />

        </div>

      </section>

<section className="stats-section">

  <div className="stat-card">
    <h2>20+</h2>
    <p>Categories</p>
  </div>

  <div className="stat-card">
    <h2>500+</h2>
    <p>Happy Customers</p>
  </div>

  <div className="stat-card">
    <h2>1000+</h2>
    <p>Products Sold</p>
  </div>

  <div className="stat-card">
    <h2>99%</h2>
    <p>Customer Satisfaction</p>
  </div>

</section>

    <section className="contact-section">
      <h2>Get In Touch</h2>
      <p> We'd love to hear from you. Feel free to contact us anytime. </p> 
      <div className="contact-grid">
        <div className="contact-card">
          <h3>📧 Email</h3> 
          <span>support@shakhzodashop.com</span> 
        </div> 
          <div className="contact-card"> 
            <h3>📞 Phone</h3>
            <span>+998 90 123 45 67</span> 
          </div> 
            <div className="contact-card"> 
              <h3>📍 Location</h3> 
              <span>Karshi, Uzbekistan</span> 
            </div> 
        </div> 
      </section>
    </main>
  );
}

