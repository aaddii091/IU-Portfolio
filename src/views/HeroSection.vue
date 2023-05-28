<template>
  <div>
    <div class="herosection">
      <div class="content">
        <h1>Aditya Saxena</h1>
        <h3>
          I'm a full stack developer with expertise in Vue, React, MongoDB,
          Node.js, and Firebase. I'm passionate about creating engaging web
          applications and always looking for new challenges to expand my
          skills.
        </h3>
        <button>Let's get started ></button>
      </div>
      <div class="image">
        <img src="../assets/Photo.svg" alt="" />
      </div>
    </div>
    <div class="work">
      <h2>Worked with</h2>
      <div class="logos">
        <div class="imgdiv">
          <img src="../assets/Logo 1.svg" alt="" class="exp" />
        </div>
        <div class="imgdiv">
          <img src="../assets/Logo 2.svg" alt="" />
        </div>
        <div class="imgdiv">
          <img src="../assets/Logo 3.svg" alt="" />
        </div>
        <div class="imgdiv">
          <img src="../assets/Logo 4.svg" alt="" />
        </div>
        <div class="imgdiv">
          <img src="../assets/Logo 5.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
* {
  margin: 0;
  color: var(--text);
}
.herosection {
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* margin-inline: 8rem; */
}
h1 {
  color: #ffffff;
  font-size: 2.5rem;
  margin-block: 1rem;
}
h3 {
  font-weight: 400;
  margin-block: 1rem;
  line-height: 1.8rem;
}
.content {
  height: auto;
  width: 42rem;
  /* margin-inline: 0rem; */
}
.img {
  margin-inline: 4rem;
  width: 200px;
}

button {
  margin-block: 2rem;
  align-items: center;
  padding: 20px 60px;
  gap: 10px;
  color: #ffffff;
  width: 307.89px;
  height: 63px;
  background: #3f8e00;
  border: 1px solid #62ba1b;
  box-shadow: 0px 8px 30px rgba(63, 142, 0, 0.5);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.35s;
}
button:hover {
  box-shadow: 0px 8px 50px rgba(63, 142, 0, 0.5);
}
h2 {
  font-weight: 300;
  font-size: 1rem;
  color: white;
}
.work {
  margin-inline: 6vw;
  margin-block: 4rem;
}
.logos img {
  margin-block: 0.5rem;

  transition: 0.35s;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
}

.imgdiv {
  height: auto;
  width: 200px;
  /* margin-left: 8vw; */
}
.logos img:hover {
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.349);
}
.logos {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
/* .work h2 {
  font-size: 1vw;
} */
</style>
