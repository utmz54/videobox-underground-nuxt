<template>
  <div class="columns is-centered">
    <div class="column">
      <div class="centering">
        <karuta v-bind:karuta="inputedkaruta"/>
      </div>
    </div>
    <div class="column">
      <b-field label="頭文字">
        <b-input maxlength="1" placeholder="読み札の頭文字を書いてね" v-model="head"></b-input>
      </b-field>
      <b-field label="本文">
        <b-input type="textarea" placeholder="読み札の本文を書いてね" v-model="text"></b-input>
      </b-field>
      <b-field label="画像">
        <b-select placeholder="表示させたい画像を選んでね" v-model="src">
          <option value="/miso-basic.png" selected>ミソシタ</option>
          <option value="/miso-old.png">初期ミソシタ</option>
          <option value="/bool.png">BOOL</option>
        </b-select>
      </b-field>
    </div>
  </div>
</template>
<style lang="scss">
.centering {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: baseline;
  -ms-flex-align: baseline;
  align-items: baseline;
}
</style>

<script>
import karuta from "~/components/karuta";
export default {
  components: {
    karuta
  },
  computed: {
    // shareparams() {
    //     let url ="http://localhost:3000/miso/make"
        
    //   let url = encodeURIComponent(`http://localhost:3000/miso/make?text=${
    //     encodeURIComponent(this.text)
    //   }&head=${encodeURIComponent(this.head)}&src=${encodeURIComponent(this.src)}`);
    //   // 現在のurlをエンコード
    //   let txt = "test";
    //   console.log(url)
    //   // Twitter用のurl作成 ハッシュタグもtxtを使用
    //   return "https://twitter.com/intent/tweet?text=" + txt + "&url=" + url;
    // },
    inputedkaruta() {
      return {
        head: this.head,
        text: this.text,
        src: this.src,
        href: "#",
      }
    }
  },
  data: () => {
    return {
      head: "",
      text: "",
      src: "/miso-basic.png",
      item: {
        head: "あ",
        text: "アイム ミソシタ\\n今朝 クソした",
        src: "/miso-old.png",
        href: "#"
      }
    };
  },
//   asyncData(context) {
//     return {
//       // asyncDataでreturnすると、dataにマージされる
//       text: context.query['text'],
//       src: context.query['src'],
//       head: context.query['head'],
//     }
//   }
};
</script>
