<template>
  <div class="root columns is-centered is-multiline ">
    <b-loading :active.sync="isLoading"></b-loading>
    <div class="conlumn ">
        <karuta v-bind:karuta="karuta" ref="karuta_gen"/>
    </div>
    <div  class="column  is-narrow">
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
        <b-field label="動画・音源指定（オプション）">
        <b-select placeholder="プラットホーム" v-model="videolink">
          <option value="none">------</option>
          <option value="youtube">Youtube</option>
          <option value="soundcloud">SoundCloud</option>
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
      videolink:"none",
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
        href: "#"
      }
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
