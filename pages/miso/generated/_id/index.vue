<template>
  <div class="root">
    <b-loading :active.sync="isLoading"></b-loading>
    <div class="container">
      <div class="centered">
        <karuta v-bind:karuta="karuta"/>
      </div>
    </div>
    <div class="container">
      <div class="centered">
        <button class="button is-info">
          <b-icon icon="twitter"></b-icon>
          <span>Tweet</span>
        </button>
        <b-notification auto-close type="is-danger" :active.sync="erroed">データが取得できませんでした</b-notification>
      </div>
    </div>
  </div>
</template>
<script>
import karuta from "~/components/karuta-no-link";
import firebase from "~/plugins/firebase";
import domtoimage from "dom-to-image";

export default {
  head(){
    return{
      meta:[
        // OGP共通
            {
            name: 'og:url',
            content: 'https://videobox-underground.netlify.com/' + this.$route.path
            },
            {
            name: 'og:title',
            content: "ミソシタのカルタ　ミソカルタ"
            },
            {
            name: 'og:description',
            content: this.karuta.text,
            },
            {
            name: 'og:image',
            content: `https://firebasestorage.googleapis.com/v0/b/videobox-underground.appspot.com/o/${encodeURIComponent(`${this.$route.params.id}.png`)}?alt=media`
            },
            {
            name: 'og:type',
            content: 'article'
            },
            // Twitter
            {
              name: 'twitter:card',
              content: 'summary'
            },
      ]
    }
  },
  components: {
    karuta
  },
  method: {
    submit() {}
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
            console.log(this.karuta);
            console.log(`https://firebasestorage.googleapis.com/v0/b/videobox-underground.appspot.com/o/${encodeURIComponent(`misokaruta-image/${this.$route.params.id}.png`)}?alt=media`);
            this.isLoading = false;
          } else {
            console.log(res);
            
            this.isLoading = false;
          }
        })
        .catch(ex => {
          console.error(ex);
          this.isLoading = false;
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
<style>
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
