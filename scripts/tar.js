const compressing = require('compressing');
const path = require('path');
compressing.tar
  .compressDir(path.resolve(__dirname, '../build'), path.resolve(__dirname, '../build.tar'))
  .then(function() {
    console.log('tar success');
  })
  .catch(function() {
    console.log('tar error');
  });
