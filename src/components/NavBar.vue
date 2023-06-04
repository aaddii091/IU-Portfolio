<template>
  <div class="nav1">
    <div class="navbar-bg">
      <div class="navbar">
        <li class="hover-underline-animation">Home</li>
        <li class="hover-underline-animation">Testimonials</li>
        <li class="hover-underline-animation">Recent Work</li>
        <li class="hover-underline-animation">Get In Touch</li>
      </div>
    </div>
  </div>
  <div class="nav2">
    <div class="navbar-bg">
      <div class="navbar">
        <img src="../assets/list.svg" class="icon" id="button" />
        <li class="hover-underline-animation flip">Home</li>
        <li class="hover-underline-animation flip">Testimonials</li>
        <li class="hover-underline-animation flip">Recent Work</li>
        <li class="hover-underline-animation flip">Get In Touch</li>
      </div>
    </div>
  </div>
  <div class="side-bar" id="side">
    <li>Home</li>
    <li>Testimonials</li>
    <li>Recent Work</li>
    <li>Get In Touch</li>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      const button = document.getElementById("button");
      const data = document.getElementById("side");
      console.log(button.classList);
      button.addEventListener("click", () => {
        console.log(data.classList);
        if (data.style.right === "0px") {
          data.style.right = "100vw";
        } else {
          data.style.right = "0px";
        }
      });
    });
  },
};
</script>

<style scoped>
* {
  background-color: rgba(240, 248, 255, 0);
  margin: 0px;
}
.nav2 {
  display: none !important;
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
.icon {
  filter: invert(100%);
  height: 50px;
  display: none;
}
.side-bar {
  display: none;
}
@media only screen and (max-width: 1160px) {
  .nav2 {
    display: block !important;
  }
  .nav1 {
    display: none !important;
  }
  .navbar-bg {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background-color: var(--bg1);
    height: 70px;
    margin-inline: 0rem;
    border-radius: 0px;
  }
}

@media only screen and (max-width: 700px) {
  .content {
    margin-inline: 2rem;
  }
  .icon {
    display: block !important;
    padding-inline: 20px;
    padding-top: 10px;
    z-index: 99;
  }
  .flip {
    display: none;
  }
  .navbar {
    display: flex;
    justify-content: left;
  }
  .navbar-bg {
    display: block !important;
  }
  .side-bar {
    display: block !important;
    position: fixed !important;
    top: 0px;
    right: 100vw;
    padding-top: 20vw;

    backdrop-filter: blur(60px);
    height: 100vh;
    width: 100vw;
    transition: all 0.5s;
  }
  .side-bar li {
    color: white;
    list-style: none;
    margin-inline: 20px;
    margin-bottom: 20px;
    font-size: 2rem;
  }
}
</style>
