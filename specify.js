const fs = require('fs');
const path = require('path');

const ignore = [/.*\.png/]
const namespace = "Project";
const apply = false;

const mapping = {
    "files": {
        "Template": namespace
    },
    "content": {
        "Template": namespace
    }
}

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

let files = getFilesIn("./src");

// Patch file content
for (var i = 0; i < files.length; i++) {
    const ref = files[i];
    if (ref.type === "file") {
        if (ignore.filter(i => i.test(ref.path.toString())).length) continue;
        let rawContent = fs.readFileSync(ref.path).toString();
        let mappedContent = rawContent;
        for (let key of Object.keys(mapping['content'])) {
            mappedContent = mappedContent.replaceAll(key, mapping['content'][key]);
        }
        if (mappedContent !== rawContent) {
            console.log(`: CONTENT: PATCH: ${ref.path}`);
            if (apply) {
                fs.writeFileSync(ref.path, mappedContent);
            }
        }
    }
}

// Patch file names
for (var i = 0; i < files.length; i++) {
    const ref = files[i];
    if (ref.type === "file") {
        if (ignore.filter(i => i.test(ref.path.toString())).length) continue;
        let filename = ref.file;
        for (let key of Object.keys(mapping['files'])) {
            filename = filename.replaceAll(key, mapping['files'][key]);
        }
        if (filename !== ref.filename) {
            const outputPath = path.join(path.dirname(ref.path), filename);
            console.log(`: FILE: RENAME: ${ref.path} -> ${outputPath}`);
            if (apply) {
                fs.renameSync(ref.path, outputPath);
            }
        }
    }
}

// Patch directories
const depthFirstFolders = files.sort((a, b) => b.path.split(path.sep).length - a.path.split(path.sep).length);
for (var i = 0; i < depthFirstFolders.length; i++) {
    const ref = depthFirstFolders[i];
    if (ref.type === "directory") {
        if (ignore.filter(i => i.test(ref.path.toString())).length) continue;
        let fullpath = ref.path;
        for (let key of Object.keys(mapping['files'])) {
            fullpath = fullpath.replaceAll(key, mapping['files'][key]);
        }
        if (fullpath !== ref.path) {
            console.log(`: FOLDER: RENAME: ${ref.path} -> ${fullpath}`);
            if (apply) {
                fs.renameSync(ref.path, fullpath);
            }
        }
    }
}
