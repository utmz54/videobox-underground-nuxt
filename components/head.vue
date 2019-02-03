<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand is-marginless">
        <nuxt-link class="navbar-item" to="/">地下二階</nuxt-link>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          v-bind:class="{ 'is-active': menuActive }"
          v-on:click="menuToggle()"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': menuActive }">
        <div class="navbar-start">
          <nuxt-link class="navbar-item" to="/miso/miso-karuta">ミソカルタ</nuxt-link>
          <nuxt-link class="navbar-item" to="/miso/miso-karuta-gen">ミソカルタメーカー（テスト）</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      menuActive: true
    };
  },
  methods: {
    menuToggle() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

