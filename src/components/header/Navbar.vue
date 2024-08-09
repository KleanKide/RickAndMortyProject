<template>
  <div>
    <header>
      <router-link to="/">
        <img class="img" src="https://i5.walmartimages.com/seo/Rick-and-Morty-Metal-Wall-Art_bcc4085e-c311-4886-a7a4-aa58127883d7.5958f8a36f96aa4c08dbc4a8a580e57c.png" alt="Logo">
      </router-link>
      <ul>
        <li>
          <router-link to="/Episodes">Episodes</router-link>
        </li>
        <li>
          <router-link to="/Locations">Locations</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar'
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;

  &::selection {
    background: rgba(66, 184, 131, 0.5);
  }
}

body {
  background-color: rgb(32, 35, 41);
  margin: 0;
}

a {
  text-decoration: none;
  color: #FFF;

  &:hover {
    color: #42B883; 
  }
}

header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #2c3d4e;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;

}

ul {
  display: flex;
  list-style: none;
}

li {
  margin: 0 15px; /* Увеличиваем промежуток между пунктами меню */
}

.img {
  width: 80px;
}


</style>
