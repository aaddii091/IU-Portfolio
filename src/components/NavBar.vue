<template>
  <div class="navbar-bg">
    <div class="navbar">
      <li class="hover-underline-animation">Home</li>
      <li class="hover-underline-animation">Testimonials</li>
      <li class="hover-underline-animation">Recent Work</li>
      <li class="hover-underline-animation">Get In Touch</li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  background-color: rgba(240, 248, 255, 0);
  margin: 0px;
}
.navbar li {
  list-style: none;
  margin-inline: 2rem;
  color: var(--text);
  cursor: pointer;
  transition: all 0.25s;
}
li:hover {
  color: var(--texthover);
}
.navbar {
  display: flex;
  /* justify-content: center; */
}
.navbar-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg1);
  height: 70px;
  margin-inline: 8rem;
  border-radius: 0px 0px 20px 20px;
}
</style>
