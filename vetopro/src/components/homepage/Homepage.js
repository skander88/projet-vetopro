import React from "react";

import VetList from "../Veterinaires/VetList";
import PasLogin from "../passassion/PasLogin";

function Homepage() {
  return (
    <div id="top">
      <header className="header" data-header>
        <div className="container">
          <button
            className="nav-toggle-btn"
            aria-label="toggle manu"
            data-nav-toggler
          >
            <ion-icon
              name="menu-outline"
              aria-hidden="true"
              className="menu-icon"
            ></ion-icon>
            <ion-icon
              name="close-outline"
              aria-label="true"
              className="close-icon"
            ></ion-icon>
          </button>

          <a href="#" className="logo">
            Kitter
          </a>

          <nav className="navbar" data-navbar>
            <ul className="navbar-list">
              <li className="navbar-item">
                <a href="#home" className="navbar-link" data-nav-link>
                  Home
                </a>
              </li>

              <li className="navbar-item">
                <a href="#shop" className="navbar-link" data-nav-link>
                  Shop
                </a>
              </li>

              <li className="navbar-item">
                <a href="#" className="navbar-link" data-nav-link>
                  Collections
                </a>
              </li>

              <li className="navbar-item">
                <a href="#" className="navbar-link" data-nav-link>
                  Blogs
                </a>
              </li>

              <li className="navbar-item">
                <a href="#" className="navbar-link" data-nav-link>
                  Contact
                </a>
              </li>
            </ul>

            <a href="#" className="navbar-action-btn">
              Log In
            </a>
          </nav>

          <div className="header-actions">
            <button className="action-btn" aria-label="Search">
              <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
            </button>

            <button className="action-btn user" aria-label="User">
              <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
            </button>

            <button className="action-btn" aria-label="cart">
              <ion-icon name="bag-handle-outline" aria-hidden="true"></ion-icon>

              <span className="btn-badge">0</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <article>
          <section
            className="section hero has-bg-image"
            id="home"
            aria-label="home"
            style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
          >
            <div className="container">
              <h1 className="h1 hero-title">
                <span className="span">High Quality</span> Pet Food
              </h1>

              <p className="hero-text">Sale up to 40% off today</p>

              <a href="#" className="btn">
                Shop Now
              </a>
            </div>
          </section>

          <section className="section category" aria-label="category">
            <div className="container">
              <h2 className="h2 section-title">
                <span className="span">Top</span> categories
              </h2>

              <ul className="has-scrollbar">
                <li className="scrollbar-item">
                  <div className="category-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ width: 330, height: 300 }}
                    >
                      <img
                        src="/images/category-1.jpg"
                        width="330"
                        height="300"
                        loading="lazy"
                        alt="Cat Food"
                        className="img-cover"
                      />
                    </figure>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Cat Food
                      </a>
                    </h3>
                  </div>
                </li>

                <li className="scrollbar-item">
                  <div className="category-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ width: 330, height: 300 }}
                    >
                      <img
                        src="/images/category-2.jpg"
                        width="330"
                        height="300"
                        loading="lazy"
                        alt="Cat Toys"
                        className="img-cover"
                      />
                    </figure>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Cat Toys
                      </a>
                    </h3>
                  </div>
                </li>

                <li className="scrollbar-item">
                  <div className="category-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ width: 330, height: 300 }}
                    >
                      <img
                        src="/images/category-3.jpg"
                        width="330"
                        height="300"
                        loading="lazy"
                        alt="Dog Food"
                        className="img-cover"
                      />
                    </figure>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Dog Food
                      </a>
                    </h3>
                  </div>
                </li>

                <li className="scrollbar-item">
                  <div className="category-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ width: 330, height: 300 }}
                    >
                      <img
                        src="/images/category-4.jpg"
                        width="330"
                        height="300"
                        loading="lazy"
                        alt="Dog Toys"
                        className="img-cover"
                      />
                    </figure>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Dog Toys
                      </a>
                    </h3>
                  </div>
                </li>

                <li className="scrollbar-item">
                  <div className="category-card">
                    <figure
                      className="card-banner img-holder"
                      style={{ width: 330, height: 300 }}
                    >
                      <img
                        src="/images/category-5.jpg"
                        width="330"
                        height="300"
                        loading="lazy"
                        alt="Dog Sumpplements"
                        className="img-cover"
                      />
                    </figure>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Dog Sumpplements
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="section offer" aria-label="offer">
            <div className="container">
              <ul className="grid-list">
                <li>
                  <div
                    className="offer-card has-bg-image img-holder"
                    style={{
                      backgroundImage: "url('/images/offer-banner-1.jpg')",
                      "--width": 540,
                      "--height": 374,
                    }}
                  >
                    <p className="card-subtitle">
                      Selected Items. Online Only.
                    </p>

                    <h3 className="h3 card-title">
                      Hot Summer <span className="span">Deals</span>
                    </h3>

                    <a href="#" className="btn">
                      Read More
                    </a>
                  </div>
                </li>

                <li>
                  <div
                    className="offer-card has-bg-image img-holder"
                    style={{
                      backgroundImage: "url('/images/offer-banner-1.jpg')",
                      "--width": 540,
                      "--height": 374,
                    }}
                  >
                    <p className="card-subtitle">Treats Grooming</p>

                    <h3 className="h3 card-title">
                      Spoil your true <span className="span">love</span>
                    </h3>

                    <a href="#" className="btn">
                      Read More
                    </a>
                  </div>
                </li>

                <li>
                  <div
                    className="offer-card has-bg-image img-holder"
                    style={{
                      backgroundImage: "url('/images/offer-banner-1.jpg')",
                      "--width": 540,
                      "--height": 374,
                    }}
                  >
                    <p className="card-subtitle">Our Brand You Will Love</p>

                    <h3 className="h3 card-title">
                      New in this <span className="span">year</span>
                    </h3>

                    <a href="#" className="btn">
                      Read More
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="section product" id="shop" aria-label="product">
            <div className="container">
              <h2 className="h2 section-title">
                <span className="span">Best</span> Seller
              </h2>

              <ul className="grid-list">
                <li>
                  <div className="product-card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "360px", height: "360px" }}
                    >
                      <img
                        src="/images/product-1.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Commodo leo sed porta"
                        className="img-cover default"
                      />
                      <img
                        src="/images/product-1_0.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Commodo leo sed porta"
                        className="img-cover hover"
                      />

                      <button
                        className="card-action-btn"
                        aria-label="add to card"
                        title="Add To Card"
                      >
                        <ion-icon
                          name="bag-add-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </button>
                    </div>

                    <div className="card-content">
                      <div className="wrapper">
                        <div className="rating-wrapper">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>

                        <span className="span">(1)</span>
                      </div>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          Commodo leo sed porta
                        </a>
                      </h3>

                      <data className="card-price" value="15">
                        $15.00
                      </data>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="product-card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "360px", height: "360px" }}
                    >
                      <img
                        src="/images/product-2.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Purus consequat congue sit"
                        className="img-cover default"
                      />
                      <img
                        src="/images/product-2_0.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Purus consequat congue sit"
                        className="img-cover hover"
                      />

                      <button
                        className="card-action-btn"
                        aria-label="add to card"
                        title="Add To Card"
                      >
                        <ion-icon
                          name="bag-add-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </button>
                    </div>

                    <div className="card-content">
                      <div className="wrapper">
                        <div className="rating-wrapper gray">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>

                        <span className="span">(0)</span>
                      </div>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          Purus consequat congue sit
                        </a>
                      </h3>

                      <data className="card-price" value="45">
                        $45.00
                      </data>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="product-card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "360px", height: "360px" }}
                    >
                      <img
                        src="/images/product-3.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Morbi vel arcu scelerisque"
                        className="img-cover default"
                      />
                      <img
                        src="/images/product-3_0.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Morbi vel arcu scelerisque"
                        className="img-cover hover"
                      />

                      <button
                        className="card-action-btn"
                        aria-label="add to card"
                        title="Add To Card"
                      >
                        <ion-icon
                          name="bag-add-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </button>
                    </div>

                    <div className="card-content">
                      <div className="wrapper">
                        <div className="rating-wrapper gray">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>

                        <span className="span">(0)</span>
                      </div>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          Morbi vel arcu scelerisque
                        </a>
                      </h3>

                      <data className="card-price" value="45">
                        $45.00
                      </data>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="product-card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "360px", height: "360px" }}
                    >
                      <img
                        src="/images/product-4.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Morbi vel arcu scelerisque"
                        className="img-cover default"
                      />

                      <img
                        src="/images/product-4_0.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Morbi vel arcu scelerisque"
                        className="img-cover hover"
                      />

                      <button
                        className="card-action-btn"
                        aria-label="add to card"
                        title="Add To Card"
                      >
                        <ion-icon
                          name="bag-add-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </button>
                    </div>

                    <div className="card-content">
                      <div className="wrapper">
                        <div className="rating-wrapper gray">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>

                        <span className="span">(0)</span>
                      </div>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          Morbi vel arcu scelerisque
                        </a>
                      </h3>

                      <data className="card-price" value="49">
                        $49.00
                      </data>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="product-card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "360px", height: "360px" }}
                    >
                      <img
                        src="/images/product-5.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Morbi vel arcu scelerisque"
                        className="img-cover default"
                      />
                      <img
                        src="/images/product-5_0.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Morbi vel arcu scelerisque"
                        className="img-cover hover"
                      />

                      <button
                        className="card-action-btn"
                        aria-label="add to card"
                        title="Add To Card"
                      >
                        <ion-icon
                          name="bag-add-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </button>
                    </div>

                    <div className="card-content">
                      <div className="wrapper">
                        <div className="rating-wrapper gray">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>

                        <span className="span">(0)</span>
                      </div>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          Morbi vel arcu scelerisque
                        </a>
                      </h3>

                      <data className="card-price" value="85">
                        $85.00
                      </data>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="product-card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "360px", height: "360px" }}
                    >
                      <img
                        src="/images/product-6.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Nam justo libero porta ege"
                        className="img-cover default"
                      />
                      <img
                        src="/images/product-6_0.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Nam justo libero porta ege"
                        className="img-cover hover"
                      />

                      <button
                        className="card-action-btn"
                        aria-label="add to card"
                        title="Add To Card"
                      >
                        <ion-icon
                          name="bag-add-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </button>
                    </div>

                    <div className="card-content">
                      <div className="wrapper">
                        <div className="rating-wrapper gray">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>

                        <span className="span">(0)</span>
                      </div>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          Nam justo libero porta ege
                        </a>
                      </h3>

                      <data className="card-price" value="85">
                        $85.00
                      </data>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="product-card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "360px", height: "360px" }}
                    >
                      <img
                        src="/images/product-7.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Nam justo libero porta ege"
                        className="img-cover default"
                      />
                      <img
                        src="/images/product-7_0.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Nam justo libero porta ege"
                        className="img-cover hover"
                      />

                      <button
                        className="card-action-btn"
                        aria-label="add to card"
                        title="Add To Card"
                      >
                        <ion-icon
                          name="bag-add-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </button>
                    </div>

                    <div className="card-content">
                      <div className="wrapper">
                        <div className="rating-wrapper gray">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>

                        <span className="span">(0)</span>
                      </div>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          Nam justo libero porta ege
                        </a>
                      </h3>

                      <data className="card-price" value="85">
                        $85.00
                      </data>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="product-card">
                    <div
                      className="card-banner img-holder"
                      style={{ width: "360px", height: "360px" }}
                    >
                      <img
                        src="/images/product-8.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Etiam commodo leo sed"
                        className="img-cover default"
                      />
                      <img
                        src="/images/product-8_0.jpg"
                        width="360"
                        height="360"
                        loading="lazy"
                        alt="Etiam commodo leo sed"
                        className="img-cover hover"
                      />

                      <button
                        className="card-action-btn"
                        aria-label="add to card"
                        title="Add To Card"
                      >
                        <ion-icon
                          name="bag-add-outline"
                          aria-hidden="true"
                        ></ion-icon>
                      </button>
                    </div>

                    <div className="card-content">
                      <div className="wrapper">
                        <div className="rating-wrapper gray">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>

                        <span className="span">(0)</span>
                      </div>

                      <h3 className="h3">
                        <a href="#" className="card-title">
                          Etiam commodo leo sed
                        </a>
                      </h3>

                      <data className="card-price" value="55">
                        $55.00
                      </data>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="section service" aria-label="service">
            <div className="container">
              <img
                src="/images/service-image.png"
                width="122"
                height="136"
                loading="lazy"
                alt=""
                className="img"
              />

              <h2 className="h2 section-title">
                <span className="span">What your pet needs,</span> when they
                need it.
              </h2>

              <ul className="grid-list">
                <li>
                  <div className="service-card">
                    <figure className="card-icon">
                      <img
                        src="/images/service-icon-1.png"
                        width="70"
                        height="70"
                        loading="lazy"
                        alt="service icon"
                      />
                    </figure>

                    <h3 className="h3 card-title">Free Same-Day Delivery</h3>

                    <p className="card-text">
                      Order by 2pm local time to get free delivery on orders
                      $35+ today.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <figure className="card-icon">
                      <img
                        src="/images/service-icon-2.png"
                        width="70"
                        height="70"
                        loading="lazy"
                        alt="service icon"
                      />
                    </figure>

                    <h3 className="h3 card-title">30 Day Return</h3>

                    <p className="card-text">
                      35% off your first order plus 5% off all future orders.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <figure className="card-icon">
                      <img
                        src="/images/service-icon-3.png"
                        width="70"
                        height="70"
                        loading="lazy"
                        alt="service icon"
                      />
                    </figure>

                    <h3 className="h3 card-title">Security payment</h3>

                    <p className="card-text">
                      25% off your online order of $50+. Available at most
                      locations.
                    </p>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <figure className="card-icon">
                      <img
                        src="/images/service-icon-4.png"
                        width="70"
                        height="70"
                        loading="lazy"
                        alt="service icon"
                      />
                    </figure>

                    <h3 className="h3 card-title">24/7 Support</h3>

                    <p className="card-text">
                      Shop online to get orders over $35 shipped fast and free.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section
            className="cta has-bg-image"
            aria-label="cta"
            style="background-image: url('/images/cta-bg.jpg')"
          >
            <div className="container">
              <figure className="cta-banner">
                <img
                  src="/images/cta-banner.png"
                  width="900"
                  height="660"
                  loading="lazy"
                  alt="cat"
                  className="w-100"
                />
              </figure>

              <div className="cta-content">
                <img
                  src="/images/cta-icon.png"
                  width="120"
                  height="35"
                  loading="lazy"
                  alt="taste guarantee"
                  className="img"
                />

                <h2 className="h2 section-title">
                  Taste it, love it or we’ll replace it… Guaranteed!
                </h2>

                <p className="section-text">
                  At Petio, we believe your dog and cat will love their food so
                  much that if they don’t … we’ll help you find a replacement.
                  That’s our taste guarantee.
                </p>

                <a href="#" className="btn">
                  Find out more
                </a>
              </div>
            </div>
          </section>

          <section className="section brand" aria-label="brand">
            <div className="container">
              <h2 className="h2 section-title">
                <span className="span">Popular</span> Brands
              </h2>

              <ul className="has-scrollbar">
                <li className="scrollbar-item">
                  <div
                    className="brand-card img-holder"
                    style={{ width: 150, height: 150 }}
                  >
                    <img
                      src="/images/brand-1.jpg"
                      width="150"
                      height="150"
                      loading="lazy"
                      alt="brand logo"
                      className="img-cover"
                    />
                  </div>
                </li>

                <li className="scrollbar-item">
                  <div
                    className="brand-card img-holder"
                    style={{ width: 150, height: 150 }}
                  >
                    <img
                      src="/images/brand-2.jpg"
                      width="150"
                      height="150"
                      loading="lazy"
                      alt="brand logo"
                      className="img-cover"
                    />
                  </div>
                </li>

                <li className="scrollbar-item">
                  <div
                    className="brand-card img-holder"
                    style={{ width: 150, height: 150 }}
                  >
                    <img
                      src="/images/brand-3.jpg"
                      width="150"
                      height="150"
                      loading="lazy"
                      alt="brand logo"
                      className="img-cover"
                    />
                  </div>
                </li>

                <li className="scrollbar-item">
                  <div
                    className="brand-card img-holder"
                    style={{ width: 150, height: 150 }}
                  >
                    <img
                      src="/images/brand-4.jpg"
                      width="150"
                      height="150"
                      loading="lazy"
                      alt="brand logo"
                      className="img-cover"
                    />
                  </div>
                </li>

                <li className="scrollbar-item">
                  <div
                    className="brand-card img-holder"
                    style={{ width: "150px", height: "150px" }}
                  >
                    <img
                      src="/images/brand-5.jpg"
                      width="150"
                      height="150"
                      loading="lazy"
                      alt="brand logo"
                      className="img-cover"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>

      <footer
        className="footer"
        style={{
          backgroundImage: "url('/images/footer-bg.jpg')",
        }}
      >
        <div className="footer-top section">
          <div className="container">
            <div className="footer-brand">
              <a href="#" className="logo">
                Kitter
              </a>

              <p className="footer-text">
                If you have any question, please contact us at{" "}
                <a href="mailto:support@gmail.com" className="link">
                  support@gmail.com
                </a>
              </p>

              <ul className="contact-list">
                <li className="contact-item">
                  <ion-icon
                    name="location-outline"
                    aria-hidden="true"
                  ></ion-icon>

                  <address className="address">
                    30 Buttonwood St.Pataskala OH 43062
                  </address>
                </li>

                <li className="contact-item">
                  <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

                  <a href="tel:+16234567891011" className="contact-link">
                    (+1)-6234-56-789-1011
                  </a>
                </li>
              </ul>

              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-pinterest"></ion-icon>
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>
                </li>
              </ul>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Corporate</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Vendors
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Affiliate Program
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Information</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Online Store
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Refund Policy
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Shipping Policy
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Track Order
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Services</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Grooming
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Positive Dog Training
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Veterinary Services
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Petco Insurance
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Pet Adoption
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Resource Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2022 Made with ♥ by{" "}
              <a href="#" className="copyright-link">
                codewithsadee.
              </a>
            </p>

            <img
              src="/images/payment.png"
              width="397"
              height="32"
              loading="lazy"
              alt="payment method"
              className="img"
            />
          </div>
        </div>
      </footer>

      <a
        href="#top"
        className="back-top-btn"
        aria-label="back to top"
        data-back-top-btn
      >
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    </div>
  );
}

export default Homepage;
