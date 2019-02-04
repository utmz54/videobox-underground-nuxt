module.exports = {
    // css: [
    //   'bulma',
    // ],
    mode: 'universal',
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+JP' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css' }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: "width=360"}
    ],
    modules: [
      ['nuxt-buefy', { /* buefy options */ }]
   ],
   plugins:[
     "~/plugins/firebase"
   ]
  }