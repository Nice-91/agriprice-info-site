import React from "react";
import FeatureCard from "../components/FeatureCard";
import AboutCard from "../components/AboutCard";
import TeamMember from "../components/TeamMember";
import Footer from "../components/Footer";

const Home = () => {
  const features = [
    { icon: "fa-solid fa-upload", title: "Post & Sell Products", description: "Farmers can list crops with type, quantity, price, and location." },
    { icon: "fas fa-search", title: "Search & Compare Prices", description: "Buyers can browse markets, compare prices, and find the best deals." },
    { icon: "fas fa-chart-line", title: "Real-Time Market Prices", description: "Daily updates from key markets help everyone trade fairly and transparently." },
    { icon: "fas fa-user-check", title: "Verified Profiles & Ratings", description: "Farmers and buyers earn ratings and verification badges for trust." },
    { icon: "fas fa-lightbulb", title: "Smart Predictions & Discounts", description: "Seasonal prediction model suggests price changes and discounts automatically." },
    { icon: "fas fa-bell", title: "Instant Notifications", description: "Users get alerts when new products are posted or prices drop." },
  ];

  const aboutCards = [
    { image: "/images/mission.jpeg", title: "Our Mission", description: "Our mission is to empower farmers and buyers by providing accurate, daily market prices and a trusted space to post products and complete transactions. We believe fair prices and clear information help communities thrive — farmers earn more and buyers find reliable supply at the best price." },
    { image: "/images/vision.jpeg", title: "Our Vision", description: "We envision a future where information is available to everyone: where every farmer knows the true market value of their harvest and can easily reach buyers, and where buyers can compare offers across markets before making decisions. By making pricing transparent and connections simple, we aim to strengthen local food systems and rural livelihoods." },
    { image: "/images/story.jpeg", title: "Our Story", description: "The idea for AgriPrice came from a simple observation: farmers often sell at low prices because they don’t know what other markets are paying. We began by mapping daily prices in nearby markets and building a small prototype so farmers could list their products. Today, AgriPrice brings those tools to more farmers and buyers — helping them post stock, compare prices across markets, and contact each other directly." },
  ];

  const teamMembers = [
    { image: "/images/nice.jpeg", name: "Nice Iradukunda", role: "Full-Stack Developer", bio: "Full-stack developer contributing to every layer of the AgriPrice app, from UI to database." },
    { image: "/images/ruth.jpeg", name: "Ruth Nzikwikiza", role: "Full-Stack Developer", bio: "Hands-on full-stack developer, shaping AgriPrice’s app interface and server-side logic." },
  ];

  return (
    <div>
      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Platform Features</h2>
          <p className="section-subtitle">Powerful tools to connect farmers and buyers across Rwanda</p>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-page">
        <div className="containerr">
          <h1>About Us</h1>
          <p>AgriPrice (AbahinziHub) connects farmers and buyers across Rwanda so that everyone can trade fairly and confidently. Through our platform, users can post products, compare prices, and contact sellers directly—all in one convenient place.</p>
        </div>
      </section>

      {/* About Cards */}
      <section className="about-grid">
        {aboutCards.map((card, idx) => (
          <AboutCard key={idx} {...card} />
        ))}
      </section>

      {/* Team Section */}
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <TeamMember key={idx} {...member} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
