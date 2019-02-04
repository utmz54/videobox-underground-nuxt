<template>
  <section class="hero is-default is-bold">
    <div class="hero-head">
    <HeadNav/>
    </div>
      <div class="hero-body">
        <div class="container">
          <nuxt/>
        </div>
      </div>
  </section>
</template>
<script>
import HeadNav from "~/components/head";
export default {
  components: {
    HeadNav
  }
};
</script>
<style lang="scss">
.info {
  font-size: 13px;
}
</style>

