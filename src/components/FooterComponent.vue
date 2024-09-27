<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Contact Information -->
      <div class="contact-info">
        <p>
          <img src="@/assets/email.jpg" alt="HTML" /> Email:
          <a> tolesaejara@gmail.com </a>
        </p>

        <p><img src="@/assets/phone.jpg" alt="HTML" /> Phone: +251940655725</p>
      </div>

      <!-- Social Media Icons -->
      <div class="social-media">
        <a
          href="https://www.linkedin.com/in/tolesa-ejara-401025253/"
          target="_blank"
        >
          <img src="@/assets/linkdedin.jpg" alt="HTML" /> LinkedIn</a
        >

        <a href="https://github.com/toleeEj" target="_blank"
          ><img src="@/assets/git.jpg" alt="HTML" />GitHub</a
        >

        <a href="https://x.com/tolliipro" target="_blank"
          ><img src="@/assets/x.jpg" alt="HTML" /> Twitter</a
        >
      </div>
    </div>

    <!-- Copyright Information -->
    <div class="copyright">
      <p>&copy;2024 My Brand.| All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>

<style scoped>
.footer {
  background: #1a1d3b;
  color: #f9fafb;
  padding: 3rem 1rem;
  text-align: center;
  font-family: "Poppins", sans-serif; /* Stylish and modern font */
  position: relative;
  overflow: hidden;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeInUp 1s ease-in-out;
}

.contact-info p {
  margin: 0.5rem 0;
  padding: 10px;
  font-size: 1.1rem;
  color: #e2e8f0; /* Slightly lighter color */
  opacity: 0;
  animation: slideIn 1s forwards;
}

.contact-info p:hover {
  color: #f43f5e; /* Vivid hover color */
  transform: scale(1.15) rotate(-5deg); /* A more noticeable zoom with a slight rotation */
  box-shadow: 0 8px 25px rgba(244, 63, 94, 0.5); /* Glowing shadow */
}

.contact-info img {
  width: 30px;
  height: 30px;
  border-radius: 20px;
}

.social-media a {
  color: #f9fafb;
  text-decoration: none;
  margin: 0 1.2rem;
  font-size: 1.5rem;
  position: relative;
  transition: color 0.3s, transform 0.4s ease-in-out, box-shadow 0.4s;
}

.social-media img {
  width: 30px;
  height: 30px;
  border-radius: 20px;
}

.social-media a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #f43f5e; /* Line animation color */
  bottom: -6px;
  left: 0;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.social-media a:hover {
  color: #f43f5e; /* Vivid hover color */
  transform: scale(1.15) rotate(-5deg); /* A more noticeable zoom with a slight rotation */
  box-shadow: 0 8px 25px rgba(244, 63, 94, 0.5); /* Glowing shadow */
}

.social-media a:hover::before {
  transform: scaleX(1); /* Line expands on hover */
}

.copyright {
  margin-top: 2.5rem;
  font-size: 0.9rem;
  color: #e5e7eb; /* Subtle text color */
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1rem;
  opacity: 0;
  animation: fadeIn 2s forwards;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column; /* Stack elements vertically */
    text-align: center;
  }

  .social-media a {
    margin: 0.5rem 0; /* Reduce spacing between icons */
  }

  .contact-info {
    margin-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .footer-content {
    padding: 1.5rem; /* Reduce padding for smaller screens */
  }

  .contact-info p {
    font-size: 1rem; /* Adjust text size */
  }

  .social-media a {
    font-size: 1.2rem; /* Smaller text for mobile */
    margin: 0.3rem 0; /* Less margin */
  }

  .contact-info img,
  .social-media img {
    width: 24px; /* Smaller icons */
    height: 24px;
  }
}

/* Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
