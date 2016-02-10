# TEMPLATE

...

## Usage

See the tests in the `Editor/` folder for each class for usage examples.

## Install

From your unreal project folder:

    npm init
    npm install TEMPLATE --save
    echo packages >> .gitignore

The package and all its dependencies will be installed in your Assets/packages
folder.

Now right click on your '.uproject' file and choose 'Generate...' to regenerate
the project file.

### Tests

All tests are wrapped in `#if ...` blocks to prevent test spam.

You can run tests using `Window > Developer Tools > Session Frontend` under the
`Automation` tab.

The test key for this package is: TEMPLATE_TESTS
