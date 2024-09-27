import { createRouter, createWebHistory } from 'vue-router';

// Importing views
import HomeView from '../views/HomeView.vue';
import AboutSkillsView from '../views/AboutSkillsView.vue';
import ProjectsCertificationsView from '../views/ProjectsCertificationsView.vue';
import RecommendationServiceView from '../views/RecommendationServiceView.vue';
// import FooterComponent from '../views/FooterComponent.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about-skills',
    name: 'AboutSkills',
    component: AboutSkillsView
  },
  {
    path: '/projects-certifications',
    name: 'ProjectsCertifications',
    component: ProjectsCertificationsView
  },
  {
    path: '/recommendation-service',
    name: 'RecommendationService',
    component: RecommendationServiceView
  }
  // {
  //   path: '/FooterComponent',
  //   name: 'RecommendationService',
  //   component: RecommendationServiceView
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }; // Scroll to the top smoothly
  }

});

export default router;
