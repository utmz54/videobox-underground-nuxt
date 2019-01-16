<template>
  <nav class="navbar is-warning" role="navigation" aria-label="main navigation">
    <div class="navbar-brand is-marginless">
      <nuxt-link class="navbar-item" to="/">
        <img src="/chikanikai.png" height="28">
      </nuxt-link>
    </div>
    <div id="navbarBasicExample" class="navbar-menu is-active">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" to="/miso/miso-karuta">
          <img src="/misokaruta.png" height="28">
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
$pink: #ffb3b3;
$primary:$pink;
</style>

