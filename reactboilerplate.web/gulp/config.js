
var path = {
    src:"./src",
    dest:{
      dist:"./dist",
      assets: "./lib/statics/assets"
    },
    sass:[
      "./styles/**/!(_)*.scss"
    ]  
  }

module.exports = {
  browserify: {
    // Enable source maps
    debug: true,
    bundleConfigs: [
    {
      entries: path.src + '/main.jsx',
      dest: path.dest.assets + "/js",
      outputName: 'main.js',
      extensions:['js','jsx']
    },
    {
      entries: path.src + '/router.jsx',
      dest: "./lib/controllers/",
      outputName: 'app-routes.js',
      extensions:['js','jsx']
    }
    ]
  },
  images: {
    src: path.src + "/images/**",
    dest: "./lib/statics/assets/images"
  },
  path: path
}