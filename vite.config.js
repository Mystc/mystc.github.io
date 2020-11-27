const path = require('path')
module.exports  ={
  base : '/',
  outDir : 'dist',
  port : '8888',
  open:true,
  proxy: {
    '/stc': {
      target: 'http://xxxxxxxx/',
      changeOrigin: true,
      // rewrite: path => path.replace(/^\/lsbdb/, '')
    }
  }
}
