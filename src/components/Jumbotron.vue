<template>
  <div
    class="jumbotron container mx-auto flex flex-col-reverse items-center lg:flex-row"
  >
    <section
      class="w-full flex flex-col items-center px-4 mt-12 lg:mt-0 lg:px-0 lg:items-start"
    >
      <h1
        class="text-4xl font-bold text-neutral-very-dark-blue leading-tight text-center md:text-7xl lg:text-left"
      >
        More than just sho<span class="tracking-tighter">rt</span>er links
      </h1>

      <p
        class="text-themeSize text-neutral-grayish-violet text-center mt-4 px-8 md:px-0 md:w-4/5 md:text-xl md:leading-relaxed lg:w-11/12 lg:text-left lg:mt-0"
      >
        Build your brand’s recognition and get detailed insights on how your
        links are performing.
      </p>

      <a
        :href="linkDestination || ''"
        class="bg-primary-cyan px-9 py-4 my-8 rounded-full text-white hover:brightness-110 duration-200 text-themeSize font-bold"
      >
        Get Started
      </a>
    </section>

    <div class="jumbotron-img w-[550px] sm:w-full h-full">
      <img
        src="../assets/illustration-working.svg"
        alt="Illustration Working"
        class="relative -right-28 sm:-right-56 lg:-right-40 lg:h-auto"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  linkDestination: String,
});
</script>

<style scoped></style>
