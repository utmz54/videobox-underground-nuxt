module.exports = {
    // css: [
    //   'bulma',
    // ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+JP' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css' }
    ],
    modules: [
      ['nuxt-buefy', { /* buefy options */ }]
   ],
   plugins:[
     "~/plugins/firebase"
   ]
  }