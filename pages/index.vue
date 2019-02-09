<template>
  <section class="section">
    <section class="section">
      <div class="columns features">
        <div class="column is-12">
          <div class="card is-shady">
            <div class="card-content">
              <div class="content">
                <nuxt-link to="/miso/miso-karuta">
                  <h4>ミソカルタ</h4>
                </nuxt-link>
                <p>ポエムコアの好きなパンチライン</p>
              </div>
            </div>
          </div>
          <div class="card is-shady">
            <div class="card-content">
              <div class="content">
                <nuxt-link to="/miso/miso-karuta-gen">
                  <h4>ミソカルタメーカー</h4>
                </nuxt-link>
                <p>パンチラインをみんなで共有</p>
              </div>
            </div>
          </div>
          <div class="card is-shady">
            <div class="card-content">
              <div class="content">
                <nuxt-link to="/likes/">
                  <h4>これ好き</h4>
                </nuxt-link>
                <p>好きなものを好きといっているだけのコンテンツ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {};
</script>
<style lang="scss">
.card {
  margin: 10px;
}
</style>
