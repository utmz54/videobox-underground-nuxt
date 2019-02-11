<template>
  <div class="root">
    <b-loading :active.sync="isLoading"></b-loading>
    <div class="columns is-centered is-multiline">
      <div class="column is-full">
      </div>
      <div class="column ">
        <div class="centered">
          <karuta v-bind:karuta="karuta"/>
        </div>
      </div>
<div class="column centered">
          <iframe width="560" height="315" :src="youtube_src" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
      <div class="column share-butttons is-full">
        <div class="centered">
          <a class="button is-info" :href="twitterlink">
            <b-icon icon="twitter" size="is-small"></b-icon>
            <span>Tweet</span>
          </a>
          <br>
          <nuxt-link class="button" to="/miso/miso-karuta-gen">
            <span>カルタを作ってみる</span>
          </nuxt-link>
          <b-notification
            auto-close
            type="is-danger"
            :active.sync="erroed"
          >データが取得できませんでした。再読み込みをお試しください。</b-notification>
        </div>
    </div>
  </div>
</template>
<script>
import karuta from "~/components/karuta-no-link";
import firebase from "~/plugins/firebase";
import domtoimage from "dom-to-image";

export default {
  head() {
    return {
      meta: [
        // OGP共通
        {
          name: "og:url",
          content:
            "https://videobox-underground.herokuapp.com/" + this.$route.path
        },
        {
          name: "og:title",
          content: "ミソカルタ"
        },
        {
          name: "twitter:description",
          content: "ミソシタのカルタ。"
        },
        {
          name: "og:description",
          content: "ミソシタのカルタ。"
        },
        {
          name: "og:image",
          content: `https://firebasestorage.googleapis.com/v0/b/videobox-underground.appspot.com/o/${encodeURIComponent(
            `misokaruta-image/${this.$route.params.id}.png`
          )}?alt=media`
        },
        {
          name: "og:type",
          content: "article"
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image"
        }
      ]
    };
  },
  components: {
    karuta
  },
  method: {
    submit() {}
  },
  async asyncData({ store, params, error }) {
    try {
      const db = firebase.firestore();
      const name = params.id;
      const data = db.collection("misokaruta").doc(name);
      data
        .get()
        .then(res => {
          if (res.exists) {
            return {
              karuta: res.data().message
            };
          } else {
            return null;
          }
        })
        .catch(ex => {
          return null;
        });
    } catch (ex) {}
  },
  computed: {
    desc() {
      return (
        "「" +
        this.karuta.text.replace(/\r\n/g, " ").replace(/(\n|\r)/g, " ") +
        "」"
      );
    },
    twitterlink() {
      // 現在のurlをエンコード
      var url = "https://videobox-underground.herokuapp.com" + this.$route.path;
      // ページ文言(タイトルとかdescription) ここではdescriptionを使用
      var txt = encodeURIComponent(this.desc);
      var hashtag = encodeURIComponent("ミソシタ");
      // Twitter用のurl作成 ハッシュタグもtxtを使用
      return (
        "https://twitter.com/intent/tweet?text=" +
        txt +
        "&hashtags=" +
        hashtag +
        "&url=" +
        url
      );
    },
    youtube_src(){
      if(!this.karuta.videolink)
      return "https://www.youtube.com/embed/7QBW67x4-HY";
      if(this.karuta.videolink==="none"){
        return "https://www.youtube.com/embed/7QBW67x4-HY";
      }else{
        return "https://www.youtube.com/embed/"+this.karuta.videolink
      }
    }
  },
  mounted() {
    const db = firebase.firestore();
    const name = this.$route.params.id;

    try {
      const data = db.collection("misokaruta").doc(name);
      data
        .get()
        .then(res => {
          if (res.exists) {
            this.karuta = res.data().message;
            //console.log(`https://firebasestorage.googleapis.com/v0/b/videobox-underground.appspot.com/o/${encodeURIComponent(`misokaruta-image/${this.$route.params.id}.png`)}?alt=media`);
            this.isLoading = false;
          } else {
            console.log(res);

            this.isLoading = false;
            this.error = true;
          }
        })
        .catch(ex => {
          console.error(ex);
          this.isLoading = false;
          this.error = true;
        });
    } catch (ex) {}
  },
  data() {
    return {
      karuta: {
        head: "",
        text: "",
        src: "/miso-old.png",
        href: "#"
      },
      erroed: false,
      isLoading: true
    };
  }
};
</script>
<style scoped>
.share-butttons {
  margin-top: 20px;
}
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
