<template>
  <div class="container">
    <HeadNav/>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <nuxt/>
        </div>
      </div>
    </section>
  </div>
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

