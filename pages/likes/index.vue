<template>
  <div>
    <div class="columns features is-desktop">
      <div class="column is-6">
        <simplecard v-for="card in cards" :card="card" v-bind:key="card.title"></simplecard>
      </div>
    </div>
  </div>
</template>
<script>
import simplecard from "~/components/simplecard";
export default {
  components: {
    simplecard
  },
  data() {
    return {
      cards: [
          {
          title: "ひとり相撲",
          subtitle: "色川武大",
          quotation:
            "私はなぜかいつも悔いている。道を歩いているとしょっちゅう砂漠にぶつかるのである。"+
            "私としては心のままにまっすぐ歩いていきたいが、そのまま歩けば不毛の土地であり、いずれ飢え死にしてしまう。",
          desc:
            "エッセイ風の純文学。なんの為にもならない一人遊びに囚われた人間を描いている。" +
            "「そんなことをしていたらろくな人間にならないぞ」などと小うるさいだけのバカ、あるいは心配してくれる人間に説教されてる。"+
            "それでも結局愚行を繰り返していくさま、むしろそれこそが生きるということの本質と言い切ってしまうさま、ほんと最高に好き。", 
          link: "http://www.chikumashobo.co.jp/product/9784480102089/"
        },
        {
          desc:
            "ハードボイルド小説。変態じみた猟奇殺人を三人の刑事が追う。同時に赤狩りもやる。" +
            "異様な執念に取り憑かれた若い保安官、ダニー・アップショーが最高。軋轢を乗り越えた男同士の友情もアツい。" +
            "情報量が多すぎて、脳みそが猛烈に疲れる。登場人物が多すぎる。"+
            "プロットも巧みだが、常軌を逸した執念を描く作家の熱量が恐ろしい。イカれてて好き。",
          title: "ビッグ・ノーウェア",
          subtitle: "ジェイムズ・エルロイ",
          quotation:
            "「お前さんみたいな若くていい男を見ると、ああいう変態爺はイチモツがコチコチになるはずだぜ。」ダニーはまた赤くなった。",
          link: "https://books.bunshun.jp/ud/book/num/9784167218508"
        },
        
      ]
    };
  }
};
</script> 