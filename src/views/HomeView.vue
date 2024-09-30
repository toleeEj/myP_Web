<template>
  <section class="home-section">
    <div class="background">
      <div class="overlay"></div>
    </div>

    <div class="content">
      <div class="photo">
        <h1>Hello, I'm Tolesa</h1>
        <p>
          Full-Stack Developer <br />
          passionate about creating modern web applications.
        </p>
        <div class="heroi">
          <img src="@/assets/profile-photo.jpg" alt="Your Name" />
        </div>
      </div>
      <div class="cta-buttons">
        <router-link to="/about-skills" class="cta-button"
          >About Me and My Skills</router-link
        >
        <router-link to="/projects-certifications" class="cta-button"
          >See My Works</router-link
        >
        <router-link to="/contact" class="cta-button">Contactme</router-link>
      </div>
    </div>
  </section>
  <AboutSkillsView />
  <ProjectsCertificationsView />
  <RecommendationServiceView />
</template>

<script>
import AboutSkillsView from "../views/AboutSkillsView.vue";
import ProjectsCertificationsView from "../views/ProjectsCertificationsView.vue";
import RecommendationServiceView from "../views/RecommendationServiceView.vue";

export default {
  name: "HomeSection",
  components: {
    AboutSkillsView,
    ProjectsCertificationsView,
    RecommendationServiceView,
  },
};
</script>

<style scoped>
.home-section {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  color: white;
  padding: 0 5rem; /* Padding for larger screens */
  text-align: left;
  overflow: hidden;
}

.background {
  background-image: url("@/assets/toback.jpg");
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  animation: zoomBackground 8s infinite alternate ease-in-out;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: -1;
}

.content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
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
  color: #f43f5e;
  transform: scale(1.15) rotate(-5deg);
  box-shadow: 0 8px 25px rgba(244, 63, 94, 0.5);
}

.photo {
  display: flex;
  align-items: center;
  padding: 20px;
}

.photo h1 {
  margin-right: 50px;
  font-size: 50px;
}

/* Image styling */
.heroi img {
  width: 500px; /* Set your preferred width */
  border-radius: 100px;
  margin-left: 20px; /* Add space between image and content */
}

/* Content styling */
.photo {
  flex: 1;
}
@media (max-width: 768px) {
  .home-section {
    flex-direction: column;
    height: auto; /* Allow for dynamic height */
    padding: 2rem 1rem; /* Adjust padding for smaller screens */
  }

  .cta-buttons {
    flex-direction: column; /* Stack buttons on smaller screens */
    gap: 1rem;
    align-items: center;
  }

  .cta-button {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }

  .photo {
    flex-direction: column; /* Stack content vertically */
    text-align: center;
  }

  .photo h1 {
    margin-right: 0; /* Remove right margin on small screens */
    font-size: 2rem;
  }

  .heroi img {
    width: 100%; /* Make the image responsive */
    margin: 20px 0; /* Adjust margin */
    border-radius: 50px;
  }
}

/* For very small screens (portrait) */
@media (max-width: 480px) {
  .cta-button {
    font-size: 0.9rem;
    padding: 0.5rem 1.25rem;
  }

  .photo h1 {
    font-size: 1.75rem; /* Smaller heading size for very small screens */
  }

  .heroi img {
    width: 90%; /* Further reduce image size */
    margin: 10px auto; /* Center image on smaller screens */
    border-radius: 20px;
  }
}

/* Landscape mode optimization for phone rotation */
@media (max-width: 812px) and (orientation: landscape) {
  .cta-buttons {
    flex-direction: row; /* Keep buttons in a row for landscape */
    gap: 1rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }

  .photo {
    flex-direction: row; /* Keep content in a row for landscape */
    align-items: flex-start; /* Align items at the top */
    padding: 10px;
  }

  .photo h1 {
    font-size: 1.5rem; /* Reduce font size further in landscape */
    margin-right: 20px;
  }

  .heroi img {
    width: 300px; /* Smaller image in landscape */
    margin: 10px 0; /* Adjust margin */
    border-radius: 20px;
  }
}

/* Animations */
@keyframes zoomBackground {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

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
</style>
