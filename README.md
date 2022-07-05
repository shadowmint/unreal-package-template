# TEMPLATE

To get started you should probably edit and then run `node specify.js`.

...

## Usage

...

## Install

From your unreal project folder:

    npm init
    npm install TEMPLATE --save
    echo node_modules >> .gitignore

The package and all its dependencies will be installed in your Plugins folder.

### Local dev

npm will always link, and therefore, not install, local packages. To install a local copy,
you have to use `npm pack` to generate a snapshot.

    npm pack
    cd /project/folder
    npm install path/to/package/unreal-TEMPLATE-0.0.1.tgz
