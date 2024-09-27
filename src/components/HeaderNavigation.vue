<template>
  <header class="header">
    <nav class="navbar">
      <!-- Logo -->
      <div class="logo">
        <img src="@/assets/logo1.jpg" alt="Logo" />
        <h4>Tolee</h4>
      </div>

      <!-- Navigation Links -->
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link to="/about-skills">About & Skills</router-link>
        </li>
        <li>
          <router-link to="/projects-certifications"
            >Projects & Certification</router-link
          >
        </li>
        <li>
          <router-link to="/recommendation-service"
            >Recommendation & Service</router-link
          >
        </li>
      </ul>

      <!-- CTA Button -->
      <div class="cta-button">
        <router-link to="/contact" class="contact-button"
          >Contact Me</router-link
        >
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>
<style scoped>
.header {
  background-color: #1f2937; /* Darker background for a modern look */
  padding: 1.5rem 3rem;
  color: #f9fafb; /* Softer white text */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  position: relative;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeInDown 1s ease-in-out;
}

.logo {
  font-size: 1.7rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #fbbf24; /* Bright yellow for emphasis */
}

.logo img {
  width: 60px;
  height: 60px;
  border-radius: 50%; /* Rounded logo */
  margin-right: 0.5rem;
  transition: transform 0.4s ease-in-out;
}

.logo:hover img {
  transform: rotate(360deg); /* Rotation animation on hover */
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 2rem;
  font-size: 1.1rem;
  position: relative;
}

.nav-links a {
  color: #e5e7eb; /* Light gray text for contrast */
  text-decoration: none;
  transition: color 0.3s, transform 0.3s ease-in-out;
  padding: 5px;
}

.nav-links a:hover {
  color: #f43f5e; /* Vivid hover color */
  transform: scale(1.15) rotate(-5deg); /* A more noticeable zoom with a slight rotation */
  box-shadow: 0 8px 25px rgba(244, 63, 94, 0.5); /* Glowing shadow */
}

.nav-links a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #fbbf24;
  bottom: -5px;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-links a:hover::before {
  transform: scaleX(1); /* Line animation under links */
}

.cta-button {
  animation: pulse 1.5s infinite;
}

.contact-button {
  background-color: #34d399; /* Vivid green for the button */
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background-color 0.3s, transform 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(52, 211, 153, 0.4); /* Soft shadow */
}

.contact-button:hover {
  color: #f43f5e; /* Vivid hover color */
  transform: scale(1.15) rotate(-5deg); /* A more noticeable zoom with a slight rotation */
  box-shadow: 0 8px 25px rgba(244, 63, 94, 0.5); /* Glowing shadow */
}

/* Media Query for Responsive Design */
@media (max-width: 768px) {
  .header {
    padding: 1rem; /* Reduced padding */
  }

  .navbar {
    flex-direction: column; /* Stack items vertically */
    align-items: flex-start; /* Align items to start */
  }

  .logo {
    font-size: 1rem; /* Smaller logo font size */
  }

  .nav-links {
    flex-direction: column; /* Stack links vertically */
    margin: 0.5rem 0; /* Margin between logo and links */
  }

  .nav-links li {
    margin-left: 0; /* Remove left margin for mobile view */
    margin: 0.3rem; /* Add space between links */
    font-size: 1rem; /* Smaller font size for links */
  }

  .contact-button {
    font-size: 1rem; /* Smaller button font size */
    padding: 0.3rem 0.5rem; /* Reduced button padding */
    margin-left: 20rem;
  }
}

/* Keyframe Animations */
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
