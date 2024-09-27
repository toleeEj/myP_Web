<template>
  <section class="home-section">
    <div class="background">
      <div class="overlay"></div>
    </div>

    <div class="content">
      <div class="photo">
        <h1 class="headline">
          Hello, I'm Tolesa
          <p class="bio">
            Full-Stack Developer <br />
            passionate about creating modern webapplications.
          </p>
        </h1>
        <img src="@/assets/profile-photo.jpg" alt="Your Name" />
      </div>
      <div class="cta-buttons">
        <router-link to="/about-skills" class="cta-button"
          >about me and my skills</router-link
        >
        <router-link to="/projects-certifications" class="cta-button"
          >See My Works</router-link
        >
        <router-link to="/contact" class="cta-button">Contact Me</router-link>
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
  padding: 0 5rem;
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
}

.headline {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeInUp 1s 0.5s forwards ease-out;
  letter-spacing: 2px;
}

.bio {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  opacity: 0;
  animation: fadeInUp 0.5s 0.5s forwards ease-out;
  color: #e5e7eb;
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
  color: #f43f5e; /* Vivid hover color */
  transform: scale(1.15) rotate(-5deg); /* A more noticeable zoom with a slight rotation */
  box-shadow: 0 8px 25px rgba(244, 63, 94, 0.5); /* Glowing shadow */
}

.photo {
  align-items: right;
  justify-content: center;
  display: flex;
}

.photo img {
  width: auto;
  height: 400px;
  border-radius: 200px;
  opacity: 0;
  animation: fadeInUp 1s 1s forwards ease-in-out;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
}

.photo:hover {
  border-radius: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .home-section {
    flex-direction: column;
    height: auto; /* Allow for dynamic height */
    padding: 1rem; /* Adjust padding for smaller screens */
  }

  .headline {
    font-size: 2rem; /* Smaller headline font size */
  }

  .bio {
    font-size: 1rem; /* Smaller bio font size */
  }

  .cta-buttons {
    flex-direction: column; /* Stack buttons vertically */
    gap: 0.5rem; /* Adjust gap for buttons */
    justify-content: center;
  }

  .photo img {
    height: 250px; /* Smaller profile image */
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

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
