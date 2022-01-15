<template>
  <nav
    class="container mx-auto relative flex items-center justify-between md:justify-start gap-x-10 text-md py-8 px-8 md:px-0"
  >
    <a href="/">
      <img src="../assets/logo.svg" alt="Shortly Logo" />
    </a>

    <button class="burger-menu md:hidden" @click="toggleNav">
      <!-- <img src="../assets/menu.svg" alt="Menu Icon By Ionicon" width="48"> -->
      <div class="menu-icon w-8 h-6 flex flex-col justify-center">
        <div
          class="bg-neutral-grayish-violet h-1 duration-700 ease-out"
          :class="[
            isActive
              ? 'w-full mb-0 relative top-[4px] -rotate-[405deg]'
              : 'w-3/5 mb-1.5',
          ]"
        ></div>
        <div
          class="w-full bg-neutral-grayish-violet h-1 duration-200 ease-out"
          :class="[isActive ? 'scale-x-0' : '']"
        ></div>
        <div
          class="bg-neutral-grayish-violet h-1 duration-700 ease-out"
          :class="[
            isActive
              ? 'w-full mt-0 relative -top-[4px] rotate-[405deg]'
              : 'w-4/5 mt-1.5',
          ]"
        ></div>
      </div>
    </button>

    <div
      class="menu-container container origin-top duration-200 overflow-y-hidden absolute top-28 left-0 px-8 md:static md:px-0 md:visible md:scale-100 md:h-auto"
      :class="[isActive ? activeNav : inActiveNav]"
    >
      <div
        class="menu bg-primary-dark-violet mx-auto py-8 px-8 rounded-xl md:flex md:justify-between md:bg-transparent md:py-0 md:px-0"
      >
        <ul
          class="flex flex-col gap-x-8 gap-y-6 font-bold text-center text-white md:flex-row md:text-neutral-grayish-violet md:items-center"
        >
          <li
            class="tracking-tight md:hover:text-neutral-very-dark-blue duration-200"
          >
            <a href="#"> Features </a>
          </li>

          <li
            class="tracking-tight md:hover:text-neutral-very-dark-blue duration-200"
          >
            <a href="#"> Pricing </a>
          </li>

          <li
            class="tracking-tight md:hover:text-neutral-very-dark-blue duration-200"
          >
            <a href="#"> Resources </a>
          </li>
        </ul>

        <hr class="mx-auto my-6 md:hidden" />

        <div
          class="login-group flex flex-col items-center gap-x-8 gap-y-6 font-bold text-white text-center md:flex-row md:items-center md:text-neutral-grayish-violet"
        >
          <a
            href="#"
            class="w-fit tracking-tight md:hover:text-neutral-very-dark-blue duration-200"
          >
            Login
          </a>

          <a
            href="#"
            class="w-full bg-primary-cyan px-6 py-2 rounded-full text-white hover:brightness-110 duration-200"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isActive = ref(false);

// const activeNav = 'visible scale-y-100';
// const inActiveNav = 'invisibe scale-y-0';
const activeNav = 'visible h-96';
const inActiveNav = 'invisibe h-0';

const toggleNav = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped></style>
