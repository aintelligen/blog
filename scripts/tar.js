const compressing = require('compressing');
const path = require('path');
compressing.tgz
  .compressDir(path.resolve(__dirname, '../build'), path.resolve(__dirname, '../build.tar.gz'))
  .then(function() {
    console.log('tar success');
  })
  .catch(function() {
    console.log('tar error');
  });
