<template>
  <div id="app">
    <!-- Header/Navigation Bar -->
    <HeaderNavigation />

    <!-- Main Content (Router View) -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderNavigation from "./components/HeaderNavigation.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderNavigation,

    FooterComponent,
  },
};
</script>

<style>
/* General styling for the entire app */
#app {
  font-family: "Arial", sans-serif;
  color: #333;
  line-height: 1.6;
}

main {
  padding: 2rem;
}

.scroll-container {
  height: 100vh;
  overflow-y: scroll; /* Enable scrolling */
  scroll-snap-type: y mandatory; /* Snap scrolling */
}

.scroll-container > * {
  scroll-snap-align: start; /* Align to start of each section */
}

a {
  text-decoration: none;
  color: #ff6b6b;
}

a:hover {
  color: #ff5252;
}
</style>
