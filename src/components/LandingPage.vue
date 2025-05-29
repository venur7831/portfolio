<template>
  <div class="container">
    <header>
      <h1>Venu R</h1>
      <p>Frontend Developer (Vue, JavaScript, React)</p>
      <button class="cta">Contact Me</button>
    </header>

    <section>
      <h2>About Me</h2>
      <p>
        I'm a frontend developer with 3+ years of experience building modern, scalable UIs using Vue (2 & 3), JavaScript, and clean architecture principles. I love working on interactive user experiences and optimizing performance.
      </p>
    </section>

    <section>
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
 <section>
      <h2>Work Experience</h2>
      <div class="work-item">
        <img :src=quinbayLogo alt="Quinbay Logo" class="logo" />
        <div>
          <h3>Frontend Developer at Quinbay</h3>
          <p class="duration">March 2022 – May 2025</p>
          <p>
            Developed and maintained e-commerce platforms using Vue.js, managed pricing, campaigns, flash sales, and optimized performance across complex seller-side dashboards.
          </p>
        </div>
      </div>
    </section>

    <footer>
      © 2025 Venu R • <a href="venur7831@gmail.com" style="color: #888">venur7831@gmail.com</a>
    </footer>
  </div>
</template>

<script>
import quinbayLogo from '../assets/quinbay-logo.png'
export default {
    name: 'LandingPage',
    data () {
        return {
           quinbayLogo 
        }
    }

}

</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Arial, sans-serif;
  background-color: #111;
  color: #fff;
  line-height: 1.6;
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
}

button.cta:hover {
  background-color: #3730a3;
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
  background-color: #222;
  padding: 15px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #333;
}

footer {
  margin-top: 60px;
  padding: 20px;
  background-color: #1a1a1a;
  text-align: center;
  font-size: 0.9rem;
  color: #aaa;
}
/* ...existing CSS... */


.logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.duration {
  font-size: 0.95rem;
  color: #aaa;
  margin: 5px 0;
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
.skill,
.work-item {
  transition: transform 0.2s, box-shadow 0.2s;
}


</style>

