<template>
  <section class="projects-certifications-section">
    <div class="container">
      <h2>My Projects</h2>
      <div class="projects-grid">
        <transition name="slide" @before-enter="beforeEnter" @enter="enter">
          <div v-if="projects.length" class="project-card">
            <h3>{{ projects[currentProjectIndex].title }}</h3>
            <p>{{ projects[currentProjectIndex].description }}</p>
            <p>
              <strong>Technologies:</strong>
              {{ projects[currentProjectIndex].technologies }}
            </p>
            <div class="links">
              <a :href="projects[currentProjectIndex].liveDemo" target="_blank"
                >Live Demo</a
              >
              <a :href="projects[currentProjectIndex].github" target="_blank"
                >GitHub</a
              >
            </div>
          </div>
        </transition>
      </div>

      <h2>Certifications</h2>
      <div class="certifications-grid">
        <div
          v-for="certification in certifications"
          :key="certification.id"
          class="certification-card"
        >
          <img
            :src="certification.image"
            alt="Certificate"
            class="cert-image"
          />
          <div class="content">
            <h3>{{ certification.name }}</h3>
            <h4><strong>Issued by:</strong> {{ certification.issuer }}</h4>
            <p><strong>Description:</strong> {{ certification.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsCertificationsView",
  data() {
    return {
      currentProjectIndex: 0, // Index to track the current project
      projects: [
        {
          id: 1,
          title: "E-commerce Store",
          description:
            "A complete online store with user authentication and shopping cart functionality.",
          technologies: "Vue.js, Node.js, MongoDB",
          liveDemo: "https://ecommerce-store.com",
          github: "https://toleeej.github.io/portfolio/",
        },
        {
          id: 2,
          title: "Portfolio Website",
          description:
            "A personal portfolio website to showcase my skills and projects.",
          technologies: "HTML, CSS, Vue",
          liveDemo: "https://portfolio.com",
          github: "https://toleeej.github.io/portfolio/",
        },
        {
          id: 3,
          title: "My Personal Website",
          description: "This website you are looking at right now.",
          technologies: "HTML, CSS, Vue",
          liveDemo: "https://portfolio.com",
          github: "https://toleeej.github.io/myWeb/",
        },
        {
          id: 4,
          title: "Online Library",
          description:
            "An online store of books for computer science students.",
          technologies: "HTML, CSS, JavaScript",
          liveDemo: "https://portfolio.com",
          github: "https://github.com/toleeEj/onlineLIBRARY",
        },
      ],
      certifications: [
        {
          id: 1,
          name: "CCNA Certification",
          issuer: "Cisco Networking Academy",
          description:
            "Enhanced my web development skills by providing a strong foundation in networking.",
          image: require("@/assets/cisco.jpg"),
        },
        {
          id: 2,
          name: "Computer Science and Engineering BSc Degree",
          issuer: "Adama Science and Technology University",
          description:
            "Provided me with a solid foundation in programming and software development principles.",
          image: require("@/assets/degree.jpg"),
        },
      ],
    };
  },
  mounted() {
    this.startProjectRotation(); // Start rotating projects when the component is mounted
  },
  methods: {
    startProjectRotation() {
      setInterval(() => {
        this.currentProjectIndex =
          (this.currentProjectIndex + 1) % this.projects.length;
      }, 10000); // Switch project every 4 seconds
    },
  },
};
</script>

<style scoped>
.projects-certifications-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #232526, #414345);
  color: #f9fafb;
  text-align: center;
  animation: fadeInUp 0.5s ease-in-out;
}

@keyframes fadeInUp {
  from {
    transform: translateY(20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

h2 {
  font-size: 2.5rem;
  color: #ff6f61;
  margin-bottom: 3rem;
  animation: slideInFromTop 1s ease-in-out;
}

@keyframes slideInFromTop {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.projects-grid {
  display: flex;
  justify-content: center;
  align-items: center;
}

.project-card {
  background-color: #2c3e50;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.5s ease;
  animation: projectMove 10s ease-in-out infinite; /* Continuous looping animation */
}

/* Keyframes for the continuous animation */
@keyframes projectMove {
  0% {
    transform: translateX(60vw); /* Start off-screen to the right */
  }
  33% {
    transform: translateX(0); /* Move to the center */
  }
  66% {
    transform: translateX(0); /* Stay in the center */
  }
  100% {
    transform: translateX(-700vw); /* Move off-screen to the left */
  }
}

.certification-card {
  display: flex;
  align-items: center;
  padding: 20px;
}

.certification-card img {
  width: 200px;
  margin-right: 20px;
  border-radius: 10px;
}

.certification-card img:hover {
  width: 700px;
}

.content {
  flex: 1;
}

.content h3 {
  color: blue;
  background: white;
  padding: 10px;
}

.project-card:hover,
.certification-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.project-card h3 {
  font-size: 1.8rem;
  color: #e67e22;
  margin-bottom: 1rem;
}

.project-card p {
  color: #bdc3c7;
  margin-bottom: 1rem;
}

.links a {
  margin-right: 1rem;
  text-decoration: none;
  color: #1abc9c;
  font-weight: bold;
  transition: color 0.3s ease;
}

.links a:hover {
  color: #16a085;
}

.cert-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .projects-grid,
  .certifications-grid {
    grid-template-columns: 1fr;
  }

  .certification-card {
    flex-direction: column;
    align-items: center;
  }

  .certification-card img {
    margin-right: 0;
    margin-bottom: 10px;
  }

  .certification-card img:hover {
    width: 400px;
  }

  .project-card {
    padding: 1.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  .project-card h3 {
    font-size: 1.5rem;
  }
}

.slide-enter-active {
  transition: transform 1s ease, opacity 1s ease;
}

.slide-leave-active {
  transition: transform 1s ease, opacity 1s ease;
}

.slide-enter {
  transform: translateX(100%); /* Start from the right */
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0); /* Move to center */
  opacity: 1;
}

.slide-leave {
  transform: translateX(-100%); /* Move out to the left */
  opacity: 0;
}
</style>
