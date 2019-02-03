<template>
  <div class="root columns">
    <div class="column">
      <div class="centered">
        <karuta v-bind:karuta="karuta" ref="karuta_gen"/>
        <img :src="output">
      </div>
    </div>
    <div class="column">
      <b-field label="頭文字">
        <b-input v-model="karuta.head" maxlength="1"></b-input>
      </b-field>
      <b-field label="本文を書いてね">
        <b-input type="textarea" v-model="karuta.text"></b-input>
      </b-field>
      <b-field label="絵">
        <b-select placeholder="絵を選んでね" v-model="karuta.src">
          <option v-for="option in images" :value="option.src" :key="option.src">{{ option.text }}</option>
        </b-select>
      </b-field>
      <button class="button is-link" @click="submit">送信</button>
    </div>
  </div>
</template>
<script>
import karuta from "~/components/karuta";
import firebase from "firebase";
import domtoimage from 'dom-to-image';

const config = {
  apiKey: "AIzaSyDrboaVdgyIZvJ0KtrXUEJhJNeBka5aKAE",
  authDomain: "videobox-underground.firebaseapp.com",
  databaseURL: "https://videobox-underground.firebaseio.com",
  projectId: "videobox-underground",
  storageBucket: "videobox-underground.appspot.com",
  messagingSenderId: "760137609377"
};

export default {
  components: {
    karuta
  },
  beforeMount() {
    firebase.initializeApp(config);
    
  },
  methods: {
    async vue_html2canvas(el, options = {}) {
      const { type } = options;
      const canvas = await html2canvas(el, options);
      if (type && type === "dataURL") {
        return canvas.toDataURL();
      } else {
        console.warn(
          "Vue Html2Canvas Warn: Invalid option type. Use 'dataURL' instead. Returning canvas."
        );
        return canvas;
      }
    },
    async submit() {
      const el = this.$refs.karuta_gen.$el;
      el.style.fontFeatureSettings = '"liga" 0';
      console.debug(el);
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: "dataURL"
      };
      this.output = await domtoimage.toPng(el);
      //await this.upload(this.output);
    },
    async upload(data) {
      const db = firebase.firestore();
      const sRef = firebase.storage().ref();
      const name = Math.random().toString(36).slice(-8);
      alert(name)
      const fileRef = sRef.child(`${name}.png`);
      // Cloud Storageにアップロード
        fileRef.putString(data, 'data_url').then((snapshot) => {
          // Firestoreに保存しておく
          const card = db.collection('cards').doc(name)

          return card.set({
            message: this.description
          }, { merge: false })
        }).then(docRef => {
          console.log(docRef)
        }).catch(err => {
          console.error(err)
        })
    }
  },
  data() {
    return {
      output: null,
      images: [
        { src: "/miso-basic.png", text: "ミソシタ" },
        { src: "/miso-old.png", text: "初期ミソシタ" },
        { src: "/bool.png", text: "BOOL氏" }
      ],
      karuta: {
        head: "あ",
        text: "アイム ミソシタ\n今朝 クソした",
        src: "/miso-old.png",
        href: "#"
      }
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
