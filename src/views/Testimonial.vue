<template>
  <div class="margins">
    <div>
      <h1 class="header">Testimonials</h1>
      <div class="flex">
        <div class="card">
          <div class="inner">
            <div class="info">
              <h3>
                <span>"</span>Aditya is an exceptional full stack developer.
                Their wealth of experience and versatile skillset enable them to
                create innovative and seamless solutions, exceeding all
                expectations.<span>"</span>
              </h3>
            </div>
            <div class="name">
              <img src="../assets/Client photo 1-1.svg" alt="" />
              <h2>Jessica Merlins</h2>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="inner">
            <div class="info">
              <h3>
                <span>"</span>Aditya is a top-notch full stack developer. Their
                skillset encompasses both front-end and back-end development,
                resulting in seamless and high-quality solutions.<span>"</span>
              </h3>
            </div>
            <div class="name">
              <img src="../assets/Client photo 1.svg" alt="" />
              <h2>Scarlett Markson</h2>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="inner">
            <div class="info">
              <h3>
                <span>"</span>Aditya is a highly skilled full stack developer
                with impressive experience. Their expertise in front-end and
                back-end development ensures top-notch solutions and exceptional
                results.<span>"</span>
              </h3>
            </div>
            <div class="name">
              <img src="../assets/Client photo 2-1.svg" alt="" />
              <h2>Cristiano Ronaldo</h2>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="inner">
            <div class="info">
              <h3>
                <span>"</span>Aditya is a skilled full stack developer with a
                wealth of experience. Their ability to seamlessly navigate both
                front-end and back-end development makes them an invaluable
                asset to any team or project.<span>"</span>
              </h3>
            </div>
            <div class="name">
              <img src="../assets/Client photo 2.svg" alt="" />
              <h2>Jelly Orleans</h2>
            </div>
          </div>
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
  /* background: whitesmoke; */
}
.header {
  color: #ffff;
  text-align: center;
  font-size: 2.5rem;
  margin-block: 5vw;
  /* font-family: "Raleway", sans-serif; */
}
.card {
  margin: 20px;
  max-height: 300px;
  max-width: 500px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  border: 1px solid rgba(255, 255, 255, 0.336);
  transition: all 0.25s;
}
.info {
  margin: 15px 0px;
}
span {
  color: var(--btnglow);
  transition: all 0.25s;
}
.inner {
  margin: 25px 20px;
}
.name {
  display: flex;
  align-items: center;
}
.name h2 {
  color: #ffff;
}
.name img {
  margin-inline: 10px;
}
.margins {
  margin-inline: 6vw;
}
.flex {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card:hover {
  transform: scale(1.025);
  box-shadow: 0px 0px 10px white;
}
h3 {
  transition: all 0.25s;
}
.card:hover h3 {
  color: var(--btnglow);
}
.card:hover span {
  color: aliceblue;
}
</style>
