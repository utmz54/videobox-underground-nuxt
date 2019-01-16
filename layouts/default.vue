<template>
  <div class="container">
    <HeadNav/>
    <nuxt/>
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

