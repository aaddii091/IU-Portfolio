<template>
  <!-- Work Section  -->
  <div class="margins">
    <h1 class="header">Recent Work</h1>
    <div class="work_sample">
      <div class="card">
        <div class="card-inner">
          <!-- Ecommerce Website  -->
          <div class="img-outer">
            <img src="../assets/ss.png" alt="" />
          </div>
          <h2>Ecommerce Website</h2>
          <h3>
            Discover an immersive ecommerce experience on my HTML, CSS, and
            JavaScript powered website. Browse stylish products, enjoy
            effortless navigation, and shop securely with ease. Responsive and
            optimized for mobile, it's never been easier to find and purchase
            your favorite item
          </h3>
          <a
            href="https://aaddii091.github.io/Clothify-E-Commerce-/"
            target="_blank"
            ><button>Visit ></button></a
          >
        </div>
      </div>
      <div class="card">
        <div class="card-inner">
          <!-- NFT Website -->
          <div class="img-outer">
            <img src="../assets/nft.png" alt="" />
          </div>
          <h2>NFT Website</h2>
          <h3>
            Apollo NFT: Our HTML, CSS, and JavaScript-powered marketplace is a
            constellation of creativity, offering a seamless platform to
            explore, buy, and sell exclusive NFT artworks. Embark on a cosmic
            journey to own and appreciate unique digital masterpieces at Apollo
            NFT
          </h3>
          <a href="https://aaddii091.github.io/NFT-web/" target="_blank">
            <button>Visit ></button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Custom CSS  */
* {
  margin: 0;
  background-color: #f5f5f5;
}

h1 {
  text-align: center;
  padding-block: 50px 50px;
}

img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(43, 255, 0, 0.342);
}
.card {
  width: 35vw;
  /* max-height: 200px; */
  margin-bottom: 5vw;
  display: flex;
  /* flex-direction: column; */
}
.card-inner {
  margin: 10px 10px;
}
.img-outer {
  width: 33vw;
}
button {
  padding: 10px 24px;
  gap: 10px;
  width: 139.89px;
  height: 38px;
  margin: 10px 0px;
  background: var(--btnglow);
  border: 1px solid #53a70e;
  box-shadow: 0px 8px 30px rgba(63, 142, 0, 0.3);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.25s;
}
button:hover {
  background: rgba(0, 0, 0, 0.932);
  color: var(--btnglow);
}
h3 {
  font-weight: 400;
  font-size: 0.75rem;
  margin: 5px 0px;
}
.work_sample {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.margins {
  padding-inline: 6vw;
}
a {
  text-decoration: none;
  list-style: none;
  background-color: transparent;
  color: black;
}
</style>
