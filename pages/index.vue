<template>
  <div class="columns features is-desktop">
    <div class="column is-6">
      <div class="card is-shady">
        <div class="card-content">
          <div class="content">
            <nuxt-link to="/miso/topics">
              <h4>最近のミソシタ</h4>
            </nuxt-link>
            <p>ミソシタの情報まとめ（気が向いたら更新）</p>
          </div>
        </div>
      </div>
      <div class="card is-shady">
        <div class="card-content">
          <div class="content">
            <nuxt-link to="/miso/miso-karuta">
              <h4>ミソカルタ</h4>
            </nuxt-link>
            <p>ポエムコアのパンチラインまとめ</p>
          </div>
        </div>
      </div>
      <div class="card is-shady">
        <div class="card-content">
          <div class="content">
            <nuxt-link to="/miso/miso-karuta-gen">
              <h4>ミソカルタメーカー</h4>
            </nuxt-link>
            <p>パンチラインをみんなで共有できる</p>
          </div>
        </div>
      </div>
      <!-- <div class="card is-shady">
        <div class="card-content">
          <div class="content">
            <nuxt-link to="/likes/">
              <h4>これ好き</h4>
            </nuxt-link>
            <p>好きなものについてかいてる</p>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.card {
  margin: 0.3rem;
}
</style>
