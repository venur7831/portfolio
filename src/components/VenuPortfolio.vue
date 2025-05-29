<template>
  <div class="min-h-screen bg-gradient-to-b from-purple-100 via-pink-100 to-yellow-100 p-8 transition duration-300 dark:bg-gray-900 dark:text-white">
    <div class="max-w-4xl mx-auto space-y-8">
      <header class="text-center">
        <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" alt="Profile" class="w-24 h-24 mx-auto rounded-full border-4 border-pink-400 shadow-md" />
        <h1 class="text-4xl font-extrabold mt-4 text-pink-700 dark:text-pink-300">Venu R</h1>
        <p class="text-lg text-gray-700 dark:text-gray-200">
          Frontend Developer | Vue.js Expert | JavaScript Enthusiast
        </p>
      </header>

      <section>
        <h2 class="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">About Me</h2>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
          <p>
            I’m a Frontend Developer with 3.2+ years of experience building scalable and performant web apps using Vue 2, Vue 3, JavaScript, HTML, and CSS. I specialize in e-commerce platforms, pricing & promotions systems, and campaign management. Currently working at <strong>Quinaby</strong> where I contribute to designing user-friendly promotional logic and campaign modules.
          </p>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Projects</h2>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 border-t-4 border-yellow-400">
            <img src="https://via.placeholder.com/400x200?text=Migration+Project" alt="Vue Migration" class="rounded mb-2" />
            <h3 class="font-bold text-lg">Vue 2 to Vue 3 Migration</h3>
            <p>Migrated a production e-commerce platform from Vue 2 to Vue 3 with performance improvements.</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 border-t-4 border-green-400">
            <img src="https://via.placeholder.com/400x200?text=Flash+Sales" alt="Flash Sales Module" class="rounded mb-2" />
            <h3 class="font-bold text-lg">Flash Sales Module</h3>
            <p>Built a flash sale system with countdown timers, promotional badges, and seller configurations.</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 border-t-4 border-pink-400">
            <img src="https://via.placeholder.com/400x200?text=Voucher+Engine" alt="Voucher Engine" class="rounded mb-2" />
            <h3 class="font-bold text-lg">Voucher & Discount Engine</h3>
            <p>Implemented dynamic voucher creation, eligibility rules, and real-time application.</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 border-t-4 border-blue-400">
            <img src="https://via.placeholder.com/400x200?text=UI+Library" alt="Reusable UI Library" class="rounded mb-2" />
            <h3 class="font-bold text-lg">Reusable UI Library</h3>
            <p>Developed a component library with Tailwind and Storybook for internal reuse across teams.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-2xl font-semibold mb-4 text-purple-700 dark:text-purple-300">Skills</h2>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow p-4 border-l-4 border-green-400">
          <ul class="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200">
            <li>Vue.js (2 & 3), JavaScript (ES6+), TypeScript</li>
            <li>HTML5, CSS3, Tailwind CSS, Bootstrap</li>
            <li>REST APIs, Git, CI/CD</li>
            <li>Pinia, Vuex, Component-driven design</li>
            <li>Vite, Webpack, Chrome DevTools</li>
          </ul>
        </div>
      </section>

      <section class="text-center mt-8">
        <a
          href="mailto:rishabhgoel@email.com"
          class="inline-block bg-pink-600 text-white px-6 py-3 rounded-xl shadow hover:bg-pink-700 transition"
        >
          📧 Contact Me
        </a>
        <a
          href="/venu_r_resume.pdf"
          download
          class="ml-4 inline-block bg-purple-600 text-white px-6 py-3 rounded-xl shadow hover:bg-purple-700 transition"
        >
          📄 Download Resume
        </a>
      </section>
    </div>
  </div>
</template>

<script setup>
// no logic needed
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
