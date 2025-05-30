<template>
  <div class="landing-container" id="landing">
    <nav class="nav-buttons">
      <button @click="goTo ('landing')">Home</button>
      <button @click="goTo ('about')">About</button>
      <button @click="goTo ('skills')">Skills</button>
      <button @click="goTo ('work')">Work</button>
      <button @click="goTo ('resume')">Resume</button>
      <button @click="goTo ('contact')">Contact</button>
    </nav>
    <div class="home-section">
      <h1>Venu R</h1>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/venur7831" target="_blank">
          linkedin
        </a>
        <a href="https://www.instagram.com/venur7831" target="_blank">
           instagram
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LandingPage',
  data() {
    return {
    }
  },
methods: {
  goTo(sectionId) {
    if(sectionId.includes('landing')) {
      this.$router.push({ path: '/my-portfolio/'});
    } else {
         this.$router.push({ path: '/my-portfolio/venu-portfolio', hash: `#${sectionId}` });
    }
  }
}
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
  box-sizing: border-box;
}
.landing-container {
  position: fixed;
  inset: 0;
  background: url('../assets/venu-pic.jpg') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;
}
.nav-buttons {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.nav-buttons button {
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.2s ease, background 0.3s ease, box-shadow 0.2s ease;
}
.nav-buttons button:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.05) translateX(5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}
.nav-buttons button:active {
  transform: scale(0.98);
}
.home-section {
  text-align: center;
}
.home-section h1 {
  font-size: 4rem;
  margin-bottom: 0.5rem;
}
.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1rem;
}
.social-links img {
  width: 36px;
  height: 36px;
  transition: transform 0.2s ease;
}
.social-links img:hover {
  transform: scale(1.1);
}
</style>
