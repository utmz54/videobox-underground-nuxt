<template>
  <div class="card is-shady">
    <header class="card-header">
      <div class="content">
              <a :href="card.link" rel="noopener noreferrer" target="_blank">
          <p class="title">{{card.title}}</p>
          <p class="subtitle">{{card.subtitle}}</p>
        </a>
        </div>
      </header>
    <div class="card-content">
      <div class="content">
        <p>{{card.desc}}</p>
      </div>
      <div class="content">
      
        <blockquote>{{card.quotation}}</blockquote>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["card"]
};
</script>
<style lang="scss" scoped>
.card-header{
  padding:1.5rem;
}
.card {
  margin: 0.3rem;
}
</style>
