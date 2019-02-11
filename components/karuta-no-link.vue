<template>
  <div>
    <div class="karuta-padding">
      <div class="karuta-container">
        <div class="karuta-root">
          <div class="karuta-head">{{karuta.head}}</div>
          <div class="karuta-body">
            <div class="karuta-text">
              <p class="karuta-line" v-for="line in lines">{{line}}</p>
            </div>
          </div>
        </div>
      </div>
      <span>
        <img class="karuta-img" :src="src_replaced">
      </span>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Noto+Serif+JP"
        }
      ]
    };
  },
  computed: {
    lines() {
      if (this.karuta.text) {
        //全角から半角にする
        const lines = this.karuta.text
          .replace(/[!-~]/g, function(s) {
            return String.fromCharCode(s.charCodeAt(0) + 65248);
          })
          .split("\n");
        return lines;
      } else [];
    },
    src_replaced() {
      if (this.karuta.src) return this.karuta.src;
      else return "/miso-basic.png";
    }
  },
  props: ["karuta"]
};
</script>

<style>
.karuta-padding {
  height: 370px;
  width: 370px;
  padding-left: 56px;
  padding-right: 56px;
  padding-top: 6px;
  padding-bottom: 6px;
}
.karuta-container {
  height: 364px;
  width: 260px;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
  margin: 2px;
}

.karuta-root {
  font-family: "Noto Serif JP", serif;

  height: 100%;
  width: 100%;
  border: solid 8px gray;
  background-color: white;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  flex-direction: row-reverse;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.karuta-head {
  background-color: #d53;
  margin-top: 5%;
  margin-right: 5%;
  font-size: 2.5rem;
  font-weight: bold;
  color: white;

  border: solid 1px black;
  border-radius: 100%;
  height: 80px;
  width: 80px;
  text-align: center;
  line-height: 80px;

  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
}
.karuta-body {
  font-size: 1.33rem;
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  margin-right: 0%;
  padding-top: 30%;
  padding-bottom: 5%;
}
.karuta-text {
  width: 100%;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row-reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.karuta-line {
  margin: 0.2rem;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
}

.karuta-img {
  position: relative;
  bottom: 135px;
  left: 53%;
  height: 33%;
}
.karuta-line:nth-child(2) {
  padding-top: 10%;
}
.karuta-line:nth-child(3) {
  padding-top: 20%;
}
.karuta-line:nth-child(4) {
  padding-top: 30%;
}
</style>

