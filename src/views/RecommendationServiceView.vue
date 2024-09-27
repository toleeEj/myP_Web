<template>
  <section class="recommendation-service-section">
    <div class="container">
      <!-- Testimonials/Recommendations -->
      <h2>Testimonials</h2>
      <div class="testimonials-grid">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="testimonial-card"
        >
          <p>{{ testimonial.quote }}</p>
          <strong>{{ testimonial.name }}</strong>
          <span>{{ testimonial.title }}</span>
        </div>
      </div>

      <!-- Service Offerings -->
      <h2>My Services</h2>
      <div class="services-grid">
        <div v-for="service in services" :key="service.id" class="service-card">
          <i :class="service.icon"></i>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "RecommendationServiceView",
  data() {
    return {
      testimonials: [
        {
          id: 1,
          quote:
            "Working with Tolee has been a great experience. He delivered high-quality work on time.",
          name: "Dr. Eshetu Tesama",
          title:
            "  (Head department of electronics and communincation at ASTU univerity)",
        },
        {
          id: 2,
          quote:
            "Tolee is a highly skilled developer. hes expertise in web development helped his project succeed with high quality in time.",
          name: "Dr. Gangiregula Subba Rao",
          title: "  (Professor)",
        },
      ],
      services: [
        {
          id: 1,
          title: "Full-Stack Web Development",
          description:
            "Building responsive, scalable web applications using modern technologies.",
          icon: "fas fa-code",
        },
        {
          id: 2,
          title: "Frontend Development",
          description:
            "Creating visually appealing and interactive user interfaces.",
          icon: "fas fa-laptop-code",
        },
      ],
      ctaText: "Contact Me",
    };
  },
};
</script>

<style scoped>
.recommendation-service-section {
  padding: 5rem 0;
  background: linear-gradient(
    135deg,
    #1e3c72,
    #2a5298
  ); /* Vibrant gradient background */
  color: #f9fafb; /* Light text for contrast */
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #f39c12; /* Bright accent color */
  animation: fadeInDown 0.8s ease-in-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.testimonials-grid,
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
}

.testimonial-card,
.service-card {
  background-color: #34495e; /* Darker background for cards */
  padding: 2rem;
  border-radius: 10px;
  color: #ecf0f1; /* Light text color */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover,
.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2); /* Smooth hover effect */
}

.testimonial-card p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.testimonial-card strong {
  font-size: 1.1rem;
  color: #f39c12;
}

.testimonial-card span {
  font-size: 1rem;
  color: #bdc3c7;
}

.service-card i {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #f39c12; /* Icon accent color */
  transition: color 0.3s ease;
}

.service-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.service-card p {
  font-size: 1rem;
  color: #bdc3c7;
}

.cta-section {
  margin-top: 3rem;
  animation: pulse 1s infinite alternate; /* Subtle pulse animation for CTA button */
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
}

.cta-button {
  background-color: #10b981; /* Bright green */
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  color: white; /* Dark gray text */
  text-decoration: none;
  font-size: 1.1rem;
  transition: transform 0.3s, background-color 0.3s ease-in-out, box-shadow 0.3s;
}

.cta-button:hover {
  color: #f43f5e; /* Vivid hover color */
  transform: scale(1.15) rotate(-5deg); /* A more noticeable zoom with a slight rotation */
  box-shadow: 0 8px 25px rgba(244, 63, 94, 0.5); /* Glowing shadow */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .testimonials-grid,
  .services-grid {
    grid-template-columns: 1fr; /* Stack testimonials and services vertically */
  }

  .testimonial-card,
  .service-card {
    padding: 1.5rem; /* Reduce padding for smaller screens */
  }

  h2 {
    font-size: 2rem; /* Smaller heading font size */
  }

  .testimonial-card p,
  .service-card p {
    font-size: 1rem; /* Adjust font size for better readability */
  }

  .service-card i {
    font-size: 2.5rem; /* Smaller icon size for mobile */
  }
}
</style>
