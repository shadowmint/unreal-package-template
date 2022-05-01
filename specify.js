const ignore = [".git"]
const namespace = "Project";

const mapping = {
  "files": {
    "Template": namespace
  },
  "content": {
    "Template": namespace
  }
}

const fs = require('fs');
const path = require('path');

const getFilesIn = (target, results) => {
  const files = fs.readdirSync(target);
  results = results || [];

  files.forEach((file) => {
    const filepath = path.join(target, file);
    if (fs.statSync(filepath).isDirectory()) {
      results = getFilesIn(filepath, results);
      results.push({type: "directory", path: filepath, file: file});
    } else {
      results.push({type: "file", path: filepath, file: file});
    }
  });

  return results;
};

let files = getFilesIn(".");

// Patch file content
for (var i = 0; i < files.length; i++) {
  const ref = files[i];
  if (ref.type === "file") {
  }
}

// Patch file names
for (var i = 0; i < files.length; i++) {
  const ref = files[i];
  if (ref.type === "file") {
  }
}

// Patch directories
for (var i = 0; i < files.length; i++) {
  const ref = files[i];
  if (ref.type === "directory") {
  }
}
