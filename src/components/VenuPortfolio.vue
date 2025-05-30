<template>
  <div class="background">
  <div class="container">
    <div id="about">
    <header>
      <h1>Venu R</h1>
      <p>Frontend Developer (Vue, JavaScript, React)</p>
    </header>

    <section>
      <h2>About Me</h2>
      <p>
        I'm a frontend developer with 3+ years of experience building modern, scalable UIs using Vue (2 & 3),
         JavaScript, and clean architecture principles. I love working on interactive user experiences and optimizing performance.
      </p>
    </section>
    </div>
     <!-- <About /> -->
    <section id="skills">
      <h2>Skills</h2>
      <div class="skills-grid">
        <div class="skill">Vue 2 & 3</div>
        <div class="skill">JavaScript</div>
        <div class="skill">HTML & CSS</div>
        <div class="skill">Pinia / Vuex</div>
        <div class="skill">React & Redux</div>
        <div class="skill">CI/CD & GCP</div>
      </div>
    </section>

    <section id="work">
      <h2>Work Experience</h2>
      <div class="work-item">
        <img :src="quinbayLogo" width="100px" height="100px" alt="Quinbay Logo" class="logo" />
        <div>
          <h3>Frontend Developer at Quinbay</h3>
          <p class="duration">March 2022 – May 2025</p>
          <p>
            Developed and maintained e-commerce platforms using Vue.js, managed pricing, campaigns, flash sales, and optimized performance across complex seller-side dashboards.
          </p>
        </div>
      </div>
    </section>

    <section id="resume">
      <h2>Resume</h2>
      <a :href="resume" download class="resume-link">Download Resume (PDF)</a>
    </section>

    <footer id="contact">
      <h2>Contact</h2>
      <p  class="contact-number">Phone: +91 7204705335</p>
      © 2025 Venu R • <a href="mailto:venur7831@gmail.com" class="email-link">venur7831@gmail.com</a>
    </footer>
  </div>
  </div>
</template>

<script>
import quinbayLogo from '../assets/quinbay-logo.png'
import resumeFile from '../assets/resume.pdf'
import About from './About.vue'
export default {
  name: 'VenuPortfolio',
  data() {
    return {
      quinbayLogo,
      resume: resumeFile,
    }
  },
  methods: {
  },
  components: {
    About
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background-color:aliceblue;
  color: #fff;
   background: url('../assets/image2.jpg');
  line-height: 1.6;
}
.background {
    background: url('../assets/image2.jpg');
}
.container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

header {
  text-align: center;
  padding: 50px 20px;
}

header h1 {
  font-size: 3rem;
}

header p {
  font-size: 1.2rem;
  color: #aaa;
  margin-top: 10px;
}

button.cta {
  margin-top: 20px;
  padding: 10px 25px;
  font-size: 1rem;
  background-color: #4f46e5;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button.cta:hover {
  background-color: #3730a3;
}

.contact-number {
  margin-top: 10px;
  font-size: 1rem;
  color: #4ade80;
}

section {
  margin-top: 50px;
}

section h2 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  border-bottom: 2px solid #444;
  padding-bottom: 5px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.skill {
  background-color: #1c1c1c;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  border: 1px solid #333;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
}

.skill:hover {
  transform: translateY(-5px);
}

.work-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  margin-top: 20px;
  transition: transform 0.2s;
}

.work-item:hover {
  transform: translateY(-5px);
}

footer {
  margin-top: 60px;
  padding: 20px;
  background-color: #1a1a1a;
  text-align: center;
  font-size: 0.9rem;
  color: #aaa;
}

.resume-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

.resume-link:hover {
  background-color: #1976d2;
}

.email-link {
  color: #888;
  text-decoration: none;
}
.logo {
  border-radius: 6px;
  box-shadow: 1px 1px;
}
</style>
