<template>
  <div class="root">
    <karuta v-for="item in karutas" v-bind:karuta="item" v-bind:key="item.head"/>
  </div>
</template>

<script>
import karuta from "~/components/karuta";
export default {
  components: {
    karuta
  },
  data() {
    return {
      isLoaded: true,
      current: "200706",
      karutas: [
        {
          head: "あ",
          text: "アイム ミソシタ\n今朝 クソした",
          src: "/miso-old.png",
          href: "https://youtu.be/zQnRcvX9KyA?t=7"
        },
        {
          head: "い",
          text: "生きてくのは\n辛い\nイカ臭い\nＦｌｙ",
          href: "https://youtu.be/7QBW67x4-HY?t=127"
        },
        {
          head: "う",
          text: "胡散臭い芸術\n飢餓みたいな平日\n個室ビデオ誠実",
          href:
            "https://www.youtube.com/watch?v=pSBAIOvspCo&feature=youtu.be&t=37",
          src: "/bool.png"
        },
        {
          head: "え",
          text:
            "エロ本はお菓子系\nスク水ブラックは宇宙\n紺のブルマは\nフェニックス",
          src: "/bool.png",
          href: "https://youtu.be/YVRVu5ZnyTg?t=67"
        },
        {
          head: "お",
          text: "おもしろと闇で\n世界をシコる",
          href:
            "https://www.youtube.com/watch?v=Xvat09fNJsI&feature=youtu.be&t=64"
        },
        {
          head: "か",
          text: "かわいいリスに\nなりたきゃ\nバーチャルに来い",
          href: "https://youtu.be/X78O8CwqoVQ?t=135"
        },
        {
          head: "き",
          text: "君も来なさい\n俺ら全員ダサい",
          href:
            "https://www.amazon.co.jp/%E3%83%9F%E3%82%BD%E3%82%B7%E3%82%BF/dp/B07DRF3GC8"
        },
        {
          head: "く",
          text: "クソみてえ\nリアル撃ち抜く",
          href:
            "https://www.youtube.com/watch?v=7QBW67x4-HY&feature=youtu.be&t=82"
        },
        {
          head: "け",
          text: "今朝クソしたって\nウソつきました",
          href:
            "https://www.amazon.co.jp/%E3%83%9F%E3%82%BD%E3%82%B7%E3%82%BF/dp/B07DRF3GC8"
        },
        {
          head: "こ",
          text: "個室ビデオが\n救ってくれた\n一人じゃなかった\n地下二階の同志",
          href:
            "https://www.youtube.com/watch?v=4VeCXCZRmlA&feature=youtu.be&t=55"
        },
        {
          head: "さ",
          text: "サル キジ イヌ\nより\n童貞 中年 ニート",
          href:
            "https://www.youtube.com/watch?v=Ev0VnZGg_tc&feature=youtu.be&t=38"
        },
        {
          head: "し",
          text: "シコっても\n寝ない\nこっからがＤＯＰＥ",
          href: "https://youtu.be/4VeCXCZRmlA?t=126"
        },
        {
          head: "す",
          text: "スケベ心は\nフェニックス\n何度だって立ち上がる",
          href:
            "https://www.youtube.com/watch?v=QmjxXkpZ7rA&feature=youtu.be&t=102"
        },
        {
          head: "せ",
          text: "成功よりも\nおもしろをとる",
          href:
            "https://www.youtube.com/watch?v=4VeCXCZRmlA&feature=youtu.be&t=93"
        },
        {
          head: "そ",
          text: "そりゃ\nリアルのやつの概念だ",
          href:
            "https://www.youtube.com/watch?v=hvkdp-2daw4&feature=youtu.be&t=72"
        },
        {
          head: "た",
          text: "だが\n俺の闇は笑え",
          href: "https://www.youtube.com/watch?v=4VeCXCZRmlA"
        },
        {
          head: "ち",
          text: "地下二階の同志達",
          href: "https://youtu.be/4VeCXCZRmlA?t=141"
        },
        {
          head: "つ",
          text: "辛すぎる現実ならば\nさっさと逃げて\nこっちこいよ",
          href: "https://youtu.be/Ev0VnZGg_tc?t=24"
        },
        {
          head: "て",
          text: "テクノロジーで\nすべて覆す",
          href:
            "https://www.youtube.com/watch?v=lqqiv6NbXaA&feature=youtu.be&t=74"
        },
        {
          head: "と",
          text: "ドウテイ\nコウテイ\nハスラー\nリーマン",
          href:
            "https://www.youtube.com/watch?v=4VeCXCZRmlA&feature=youtu.be&t=65"
        },
        {
          head: "な",
          text: "ナイフのような自意識",
          src: "/bool.png",
          href: "https://youtu.be/YVRVu5ZnyTg?t=238"
        },
        {
          head: "に",
          text: "握りしめる\nＴＥＮＧＡ",
          href: "https://youtu.be/Ev0VnZGg_tc?t=72"
        },
        {
          head: "ぬ",
          text: "ヌガーの包み紙が\n握られている",
          src: "/bool.png",
          href: "https://youtu.be/qHd13-XXP0Q?t=131"
        },
        {
          head: "ね",
          text: "ねぇ母さん\nここに置いてあった\nナメクジ見なかった？",
          src: "/miso-old.png",
          href: "https://youtu.be/hvkdp-2daw4?t=51"
        },
        {
          head: "の",
          text: "逃れられぬ\n労働と金",
          href:
            "https://www.youtube.com/watch?v=cVzZR5aTvTQ&feature=youtu.be&t=74"
        },
        {
          head: "は",
          text: "バーチャルから\nリアルを変えるんだ",
          href:
            "https://www.amazon.co.jp/%E3%83%9F%E3%82%BD%E3%82%B7%E3%82%BF/dp/B07DRF3GC8"
        },
        {
          head: "ひ",
          text: "昼のおでん\nぬるくしたくらいじゃ\nダメか",
          href:
            "https://www.youtube.com/watch?v=QmjxXkpZ7rA&feature=youtu.be&t=55"
        },
        {
          head: "ふ",
          text: "Ｖとの\n邂逅は\nもはや必然",
          href:
            "https://www.youtube.com/watch?v=TfwMKwpBqkQ&feature=youtu.be&t=140"
        },
        {
          head: "へ",
          text: "へへっ\nへっっぁ～～～\nむっはぁ～～～",
          src: "/miso-old.png",
          href: "https://youtu.be/u3sSZyv_1xk?t=14"
        },
        {
          head: "ほ",
          text: "本当の気持ちに\n上品も下品もねえよ",
          href: "https://youtu.be/7QBW67x4-HY?t=208"
        },
        {
          head: "ま",
          text: "真夜中\n戦う\nこっからが勝負",
          href:
            "https://www.youtube.com/watch?v=4VeCXCZRmlA&feature=youtu.be&t=121"
        },
        {
          head: "み",
          text: "ミッドナイト\nファイティング\nブリーフ",
          href:
            "https://www.youtube.com/watch?v=4VeCXCZRmlA&feature=youtu.be&t=119"
        },
        {
          head: "む",
          text: "無職全裸ジジイ\nガリガリ眼鏡童貞",
          href:
            "https://www.youtube.com/watch?v=X78O8CwqoVQ&feature=youtu.be&t=34"
        },
        {
          head: "め",
          text: "メメタンとの\n握手の番が\n近づいて来た",
          src: "/bool.png",
          href: "https://soundcloud.com/bool-4/memetan#t=9:23"
        },
        {
          head: "も",
          text: "もにゃおは\nいつだって\n小さなスケベを\n期待してる",
          href:
            "https://www.youtube.com/watch?v=2XoSSWPp-ZE&feature=youtu.be&t=99"
        },
        {
          head: "や",
          text: "闇の先に待っているのは\n光じゃない\nもっと美しい 闇だ",
          href: "https://youtu.be/keEX8HRlMEA?t=130"
        },
        {
          head: "ゆ",
          text: "ゆでちゃんの\n趣味は勉強",
          src: "/bool.png",
          href: "https://youtu.be/qHd13-XXP0Q?t=450"
        },
        {
          head: "よ",
          text: "弱さを捨てる必要はない\nそのまま\n強くなればいいだけ",
          href:
            "https://www.youtube.com/watch?v=lqqiv6NbXaA&feature=youtu.be&t=100"
        },
        {
          head: "ら",
          text:
            "ラッキーなスケベ\nラッキーなスケベ\nラッキーなスケベ\n秋茄子食え",
          href: "https://youtu.be/cVzZR5aTvTQ?t=91"
        },
        {
          head: "り",
          text: "リアルじゃないが\nフェイクでもない\n俺らはバーチャル",
          href: "https://youtu.be/keEX8HRlMEA?t=56"
        },
        {
          head: "る",
          text: "ループから\nどうやったら\n抜け出せるんだ",
          href: "https://youtu.be/QmjxXkpZ7rA?t=61"
        },
        {
          head: "れ",
          text: "０．５畳クローゼット\n潜りポエムをＲＥＣ",
          src: "/bool.png",
          href: "https://youtu.be/YVRVu5ZnyTg?t=139"
        },
        {
          head: "ろ",
          text: "労働で食わしてく家族\nインターネットと\n古びたエロ本",
          href:
            "https://www.youtube.com/watch?v=4VeCXCZRmlA&feature=youtu.be&t=32"
        },
        {
          head: "わ",
          text: "我闇ナリ\n闇から闇\n渡りゆく旅",
          href: "https://www.youtube.com/watch?v=TfwMKwpBqkQ"
        },
        {
          head: "を",
          text: "俺は俺の闇を\nレンダリング",
          href: "https://youtu.be/keEX8HRlMEA?t=30"
        }
      ]
    };
  }
};
</script>
<style scoped>
.root {
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
