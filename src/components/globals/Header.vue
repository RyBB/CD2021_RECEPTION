<template>
  <div class="header-contents">
    <div class="top">
      <div class="logo cursor">
        <a href="/CD2021_RECEPTION">
          <img class="header-logo" src="./kintone_logo_black.png"
        /></a>
      </div>
    </div>
    <div class="menu">
      <div class="icon">
        <i class="fas fa-bars cursor"></i>
        <i class="fas fa-home cursor"></i>
        <i class="fas fa-bell cursor"></i>
        <i class="fas fa-star cursor"></i>
      </div>
    </div>
    <div class="image">
      <a href="/CD2021_RECEPTION"
        ><div class="title">kintone <span id="neon">GAME</span> Labo</div></a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Exo+2:200i);

a {
  text-decoration: none;
  color: #000;
}
.header-contents {
  .top {
    margin: 0;
    height: 50px;
    background-color: rgb(255, 204, 0);
  }
  .logo {
    padding: 0.5em 0 0 1em;
    font-size: 2rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
  }
  .menu {
    height: 30px;
    background-color: #4b4b4b;
    .icon {
      margin: 0 10px;
    }
  }
  .image {
    display: flex;
    font-size: 25px;
    height: 50px;
    align-items: center;
    background-image: url("https://p4.wallpaperbetter.com/wallpaper/586/620/26/cyberpunk-city-future-tokyo-artur-sadlos-future-tokyo-hd-wallpaper-preview.jpg");
  }
  .title {
    padding: 0 30px;
    font-size: calc(min(5vw, 3rem));
    color: rgb(255, 0, 238);
    font-weight: bold;
    font-family: "Exo 2", sans-serif;
    text-shadow: 5px 3px 10px rgb(235, 146, 255);
  }
}
.header-logo {
  width: 13rem;
  margin: 0.3rem 0 0 0;
}
#neon {
  color: rgb(30, 214, 255);
  text-shadow: 5px 3px 10px rgb(146, 244, 255);
}

.cursor {
  cursor: pointer;
}
</style>
