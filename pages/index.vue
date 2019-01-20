<template>
  <div>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">なにこれ</h1>
              <p>test{{ text }}</p>
          <p>個人的に好きなものを、節操なく羅列していく為のページです。</p>
          <p>今のところ見られるコンテンツは、バーチャルYoutuber<a href="https://www.youtube.com/channel/UCctWfjgLUh1yt-Wdz6W4yFQ" target="_blank">ミソシタ</a>の
            <nuxt-link to="/miso/miso-karuta">ミソカルタ</nuxt-link>しかございません。
          </p>
          <p><a href="https://twitter.com/KUMANOPUXTU" target="_blank">管理者連絡先</a></p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      // asyncDataで上書きされる
      text: ''
    }
  },
  asyncData(context) {
    return {
      // asyncDataでreturnすると、dataにマージされる
      text: context.query['text']
    }
  }
}
</script>
