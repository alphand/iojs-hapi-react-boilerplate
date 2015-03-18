
var path = {
    src:"./src",
    dest:{
      dist:"./lib/statics",
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
      entries: path.src + '/client/main.jsx',
      dest: path.dest.assets + "/js",
      outputName: 'main.js',
      extensions:['js','jsx'],
      builtins:true,
      commondir:true,
      bundleExternal:true,
      insertGlobals:true,
      standalone:"reactapp",
      debug:true
    },
    {
      entries: [path.src+"/server/controllers/react.js"],
      dest: "./lib/controllers/",
      outputName: 'react.js',
      extensions:['js','jsx'],
      builtins:false,
      commondir:false,
      insertGlobalsVars:"__filename,__dirname",
      bundleExternal:false,
      standalone:"reactctr",
      debug:false
    }
    ]
  },
  images: {
    src: path.src + "/images/**",
    dest: "./lib/statics/assets/images"
  },
  path: path
}