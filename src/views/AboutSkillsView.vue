<template>
  <section class="about-skills-section">
    <div class="container">
      <!-- Detailed Bio -->

      <div class="containery">
        <img src="@/assets/about.jpg" alt="HTML" />

        <div class="content">
          <h2>About Me</h2>
          <p class="detailed-bio">
            I am a passionate Full-Stack Developer with experience in modern web
            technologies. I enjoy building user-centric web-applications.
          </p>
        </div>
      </div>

      <!-- Skills List -->
      <div class="skills">
        <h3>Technical Skills</h3>
        <ul class="skills-list">
          <li><img src="@/assets/html.jpg" alt="HTML" /> HTML</li>
          <li><img src="@/assets/css.jpg" alt="CSS" /> CSS</li>
          <li><img src="@/assets/js.jpg" alt="JavaScript" /> JavaScript</li>
        </ul>

        <ul class="skills-list">
          <li><img src="@/assets/vuejs-icon.jpg" alt="Vue.js" /> Vue.js</li>
          <li><img src="@/assets/nodejs-icon.jpg" alt="Node.js" /> Node.js</li>
          <li><img src="@/assets/mongodb-icon.jpg" alt="MongoDB" /> MongoDB</li>
        </ul>
        <h3>Soft Skills</h3>
        <ul class="sskills-list">
          <li>Communication</li>
          <li>Teamwork</li>
        </ul>

        <ul class="sskills-list">
          <li>Problem-solving</li>
          <li>Critical tinking</li>
        </ul>
      </div>

      <!-- Timeline/Experience -->
      <div class="containeri">
        <h2>Expriance</h2>
        <p>
          I have been working different jobs as webdeveloper in different
          organizetion during my summer time as an intern.
        </p>
        <div class="content">
          <img src="@/assets/experience.jpg" alt="HTML" />
        </div>
      </div>

      <!-- Downloadable Resume -->
      <div class="resume">
        <a href="/assets/T-resume.pdf" download class="resume-button"
          >Download My Resume</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutSkillsSection",
};
</script>

<style scoped>
/* Container to hold both image and content */
.containery {
  display: flex;
  align-items: center;
  padding: 20px;
}

/* Image styling */
.containery img {
  width: 500px; /* Set your preferred width */
  margin-right: 20px; /* Add space between image and content */
  border-radius: 10px;
}

/* Content styling */
.content {
  flex: 1; /* Let content take up remaining space */
}

.containeri {
  display: flex;
  align-items: center;
  padding: 20px;
}

.containeri h2 {
  margin-right: 50px;
}

/* Image styling */
.containeri img {
  width: 500px; /* Set your preferred width */
  border-radius: 10px;
  margin-left: 2px; /* Add space between image and content */
}

/* Content styling */
.content {
  flex: 1; /* Let content take up remaining space */
}

.about-skills-section {
  padding: 5rem 0;
  background: linear-gradient(
    135deg,
    #3a3f44,
    #28313b
  ); /* Dark gradient background for a professional look */
  color: #f9fafb; /* Light color for text contrast */
  animation: fadeIn 1s ease-in-out; /* Smooth fade-in animation */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #f5a623; /* Warm accent color */
  animation: slideInFromLeft 1s ease-in-out;
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.detailed-bio {
  text-align: center;
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto 3rem auto;
  color: #e0e0e0;
}

.skills {
  margin-bottom: 3rem;
}

.skills img {
  width: 100px;
}

.skills h3 {
  font-size: 2rem;
  color: #20c997; /* Bright green accent for headings */
  text-align: center;
  margin-bottom: 1.5rem;
  text-decoration: underline;
}

.skills-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.skills-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #4a5568;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sskills-list {
  justify-content: space-around;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #4a5568;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.sskills-list li {
  color: white;
  padding: 10px;
  border-radius: 5px;
  background: gray;
  list-decoration: none;
}

.skills-list li:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.skills-list img {
  width: 40px;
  height: 40px;
}

.experience {
  margin-top: 3rem;
}

.experience h3 {
  font-size: 2rem;
  color: #ff6b6b; /* Bright red accent */
  text-align: center;
  margin-bottom: 1.5rem;
}

.timeline {
  list-style: none;
  padding: 0;
  text-align: center;
}

.timeline li {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #cbd5e0; /* Light color for readability */
}

.resume-button {
  display: inline-block;
  background-color: #ff6b6b;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.resume-button:hover {
  background-color: #ff5252;
  transform: scale(1.05); /* Slight scale effect on hover */
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .containery {
    flex-direction: column; /* Stack image and content vertically */
    text-align: center; /* Center text */
  }

  .containery img {
    width: 100%; /* Responsive image width */
    height: auto; /* Maintain aspect ratio */
    margin: 0 0 20px 0; /* Margin for spacing */
  }

  .containeri {
    flex-direction: column; /* Stack experience section vertically */
    text-align: center; /* Center text */
  }

  .containeri img {
    width: 100%; /* Responsive image width */
    height: auto; /* Maintain aspect ratio */
    margin-top: 20px; /* Space above image */
  }

  .skills-list {
    flex-direction: column; /* Stack skills vertically */
    align-items: center; /* Center skills list */
  }

  .skills-list li {
    width: 100%; /* Full width for skills */
    justify-content: center; /* Center items */
  }

  .detailed-bio {
    font-size: 1rem;
  }

  .resume-button {
    padding: 0.2rem;
    border-radius: 25px;
    font-size: 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }
}
</style>
