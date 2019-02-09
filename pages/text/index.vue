<template>
  <simplecard :card="cards[0]"></simplecard>
</template>
<script>
import simplecard from "~/components/simplecard";
export default {
  components: {
    simplecard
  },data() {
    return {
      cards:[
          {
              desc:"a",title:"a",link:"/text/contents/test"
          }
      ]
    }
  }
};
</script> 