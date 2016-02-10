var mkdirp = require('mkdirp');
var path = require('path');
var ncp = require('ncp');
var fs = require('fs');

// Config
var config = path.join(__dirname, '..', '..', '..', 'package.json');
config = JSON.parse(fs.readFileSync(config));
if (!config.unreal) {
  console.log("You must set the 'unreal' setting in your package.json to your project name");
  throw new Error("Invalid package.json");
}

// Paths
var src = path.join(__dirname, '..', 'src');
var dir = path.join(__dirname, '..', '..', '..', 'Source', config.unreal, 'packages');

// Create folder if missing
mkdirp(dir, function (err) {
  if (err) {
    console.error(err)
    process.exit(1);
  }

  // Transform to add header
  var transform = {
    transform: function(read, write, file) {
      if (file.name.endsWith('.cpp')) {
        write.write('#include "' + config.unreal + '.h"\n');
      }
      read.pipe(write);
    }
  };

  // Copy files
  ncp(src, dir, transform, function (err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
});
