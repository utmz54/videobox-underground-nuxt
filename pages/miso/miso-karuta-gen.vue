<template>
  <div class="root columns is-centered is-multiline">
    <b-loading :active.sync="isLoading"></b-loading>
    <div class="conlumn">
      <karuta v-bind:karuta="karuta" ref="karuta_gen"/>
    </div>
    <div class="column is-narrow">
      <b-field label="頭文字">
        <b-input v-model="karuta.head" maxlength="1"></b-input>
      </b-field>
      <b-field label="本文">
        <b-input type="textarea" v-model="karuta.text"></b-input>
      </b-field>
      <b-field label="絵">
        <b-select placeholder="絵を選んでね" v-model="karuta.src">
          <option v-for="option in images" :value="option.src" :key="option.src">{{ option.text }}</option>
        </b-select>
      </b-field>
      <b-field label="動画指定（オプション）">
        <b-select placeholder="プラットホーム" v-model="karuta.videolink">
          <option value="none">------</option>
          <option
            v-for="video in videos"
            :value="video.href"
            v-bind:key="video.title"
          >{{video.title}}</option>
        </b-select>
      </b-field>
      <button class="button is-info" @click="submit">
        <span>共有する</span>
      </button>
      <b-notification
        auto-close
        type="is-danger"
        :active.sync="isNotWritten"
      >入力欄が空欄です。本文と頭文字の入力欄をお確かめください。</b-notification>
    </div>
    <iframe width="560" height="315" :src="youtube_src" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>
<script>
import karuta from "~/components/karuta-no-link";
import firebase from "~/plugins/firebase";
import domtoimage from "dom-to-image";

export default {
  components: {
    karuta
  },
  computed:{
    youtube_src(){
      if(this.karuta.videolink==="none"){
        return "https://www.youtube.com/embed/7QBW67x4-HY";
      }else{
        return "https://www.youtube.com/embed/"+this.karuta.videolink
      }
    }
  },
  methods: {
    popup() {
      this.isNotWritten = true;
    },
    async submit() {
      if (!this.karuta.text | !this.karuta.head) {
        this.popup();
        return;
      }
      const el = this.$refs.karuta_gen.$el;
      el.style.fontFeatureSettings = '"liga" 0';
      console.debug(el);
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: "dataURL"
      };
      this.output = await domtoimage.toPng(el, { height: 370, width: 370 });
      await this.upload(this.output);
    },
    async upload(data) {
      const db = firebase.firestore();
      const sRef = firebase.storage().ref();
      const name =
        Math.random()
          .toString(36)
          .slice(-8) +
        Math.random()
          .toString(36)
          .slice(-8);
      const fileRef = sRef.child(`misokaruta-image/${name}.png`);
      this.isLoading = true;
      // Cloud Storageにアップロード
      fileRef
        .putString(data, "data_url")
        .then(snapshot => {
          // Firestoreに保存しておく
          const card = db.collection("misokaruta").doc(name);

          return card.set(
            {
              message: this.karuta
            },
            { merge: false }
          );
        })
        .then(docRef => {
          console.log(docRef);
          this.isLoading = false;
          this.$router.push(`/miso/karutas/${name}`);
        })
        .catch(err => {
          this.isLoading = false;
          console.error(err);
        });
    }
  },
  data() {
    return {
      videolink: "none",
      isNotWritten: false,
      isLoading: false,
      output: null,
      images: [
        { src: "/miso-basic.png", text: "ミソシタ" },
        { src: "/miso-old.png", text: "初期ミソシタ" },
        { src: "/bool.png", text: "BOOL氏" }
      ],
      karuta: {
        head: "",
        text: "",
        src: "/miso-old.png",
        href: "#",
        videolink:"none"
      },
      videos: [
        { title: "『ミソシタ#38』ネネコ隊長", href: "PZTW6DNrypc" },
        {
          title: "『ミソシタ#37』ミソシタおじさんの正月",
          href: "6tLxWiryH3c"
        },
        {
          title: "『ミソシタ#36』ダンシング イン ザ ダーク",
          href: "Xvat09fNJsI"
        },
        {
          title:
            "『ミソシタ#35』ミソシタの闇対談 第五回(最終回)ゲスト:湯冷飯ユナ",
          href: "w0SwJrxa_Vw"
        },
        { title: "『ミソシタ#34』RESTART", href: "7QBW67x4-HY" },
        {
          title:
            "『ミソシタ#33』ミソシタの闇対談 第四回　ゲスト:ペギーザ•ボンボン",
          href: "Hx4SVVBcbQE"
        },
        {
          title: "『ミソシタ#32』ミソシタの闇対談 第三回　ゲスト ウィリオ",
          href: "3Et5q7YJu60"
        },
        {
          title: "『ミソシタ#31』ミソシタの闇対談 第二回　ゲスト BOOL",
          href: "g-k8MDfVwQs"
        },
        {
          title: "『ミソシタ#30』ミソシタの闇対談 第一回　ゲスト BOOL",
          href: "7AhS1gsqoj0"
        },
        {
          title: "『ミソシタ#29』Spotifyに全裸で来た",
          href: "jcRx6vfNF5o"
        },
        { title: "『ミソシタ#28』カラオケ", href: "hhPDLzU3Zz4" },
        {
          title: "『ミソシタ#27』サザン・パフューム・ミソシタ",
          href: "OtcC7LQzQyQ"
        },
        {
          title: "『ミソシタ#26』どうした ミソシタ!?",
          href: "BuEWDQ0D0SI"
        },
        {
          title: "『ミソシタ#25』チビッコが怒ってる",
          href: "I1snAOXV0vY"
        },
        {
          title: "『ミソシタ#24』ミソシタ相談室・チビッコから相談がきた",
          href: "4Bq7AEImiWQ"
        },
        {
          title:
            "『ミソシタ#23』地下二階のレジスタンス feat. world's end girlfriend",
          href: "lqqiv6NbXaA"
        },
        {
          title: "『ミソシタ#22』ミソパーティー開催決定！",
          href: "FXkTuwc6xug"
        },
        {
          title: "『ミソシタ#21』我闇ナリ feat. arai tasuku",
          href: "TfwMKwpBqkQ"
        },
        {
          title: "『ミソシタ#20』ミソシタ相談室20180623",
          href: "0-44FzxLk8A"
        },
        {
          title: "『ミソシタ#19』ミソシタ相談室20180531",
          href: "LqyPO4yDBHI"
        },
        { title: "『ミソシタ#18』闇の発表", href: "zhLcjI8jTT4" },
        {
          title: "『ミソシタ#17』Life is Dark feat. world's end girlfriend",
          href: "Ev0VnZGg_tc"
        },
        {
          title: "『ミソシタ#16』ミソシタ相談室その1",
          href: "6UTFio0A13A"
        },
        { title: "『ミソシタ#15』人生相談募集", href: "X78O8CwqoVQ" },
        {
          title: "『ミソシタ#14』ヘンリー・ダーガー",
          href: "cVzZR5aTvTQ"
        },
        { title: "『ミソシタ#13』もにゃお", href: "2XoSSWPp-ZE" },
        { title: "『ミソシタ#12』プレゼント", href: "2aQqcFoKCsQ" },
        { title: "『ミソシタ#11』革命前夜", href: "keEX8HRlMEA" },
        {
          title: "『ミソシタ#10』バーチャルスター名鑑",
          href: "D2ilJCDm-b8"
        },
        {
          title: "『ミソシタ#9』ミッドナイト・ファイティングブリーフ",
          href: "4VeCXCZRmlA"
        },
        { title: "『ミソシタ#8』エゴサーチ", href: "hvkdp-2daw4" },
        {
          title: "『ミソシタ#7』エンドレスナイン",
          href: "QmjxXkpZ7rA"
        },
        { title: "『ミソシタ#6』闇の告知", href: "z7EMSuMFlTw" },
        { title: "『ミソシタ#5』壺", href: "WjO9IYYgxtw" },
        { title: "『ミソシタ#4』これでいい", href: "zQnRcvX9KyA" },
        { title: "『ミソシタ#3』相棒", href: "krjctGTc2hY" },
        { title: "『ミソシタ#2』生と死について", href: "-oLDy9I5aXw" },
        { title: "『ミソシタ#1』", href: "u3sSZyv_1xk" }
      ]
    };
  }
};
</script>

<style scoped>
.centered {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  width: 100%;
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
