<template>
  <NavBar />
  <HeroSectionVue class="margin" />
  <TestimonialVue />
  <Work class="margin2" />
  <GetInTouch />
</template>

<script setup>
import HeroSectionVue from "../views/HeroSection.vue";
import TestimonialVue from "../views/Testimonial.vue";
import NavBar from "./NavBar.vue";
import Work from "../views/Work.vue";
import GetInTouch from "../views/GetInTouch.vue";
</script>

<style>
.margin {
  margin-block: 100px;
}
.margin2 {
  margin-top: 100px;
}
</style>
