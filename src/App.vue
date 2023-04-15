<template>

  <nav class="container">
    <div class="col-12 nav-container">
      <img src="images/logo-new.svg" />
      <ul class="nav-items-container">
        <li><router-link to="/">Home</router-link></li>
        <li> <router-link to="/about">About</router-link></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </nav>
    
   
  <router-view />

  <footer class="container" data-aos="fade-up" data-aos-duration="800">
    <div class="row gx-5">
      <div class="col-3">
        <img class="img" src="images/logo-new.svg" />
      </div>
      <div class="col-9 d-flex justify-content-end">
        <ul>
          <li><a href="#">Project - MyPocketSkill</a></li>
          <li><a href="#">Project - Placeholder</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
// @import "@/assets/scss/_global.scss";
</style>
