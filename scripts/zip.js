const compressing = require('compressing');
const path = require('path');
compressing.zip
  .compressDir(path.resolve(__dirname, '../build'), path.resolve(__dirname, '../build.zip'))
  .then(function() {
    console.log('compress zip success');
  })
  .catch(function() {
    console.log('compress zip  error');
  });
