# metapol-web
Metalpol FrontEnd
Go to rool folder
type npm innit and enter to get the package.json file.
It will prompt you to enter a name. You can skip the rest of the steps (Description, entry point etc, License etc)
It will ask 'is this okay?' Press Enter

Step 2:

Install Uglifyjs as a Dev Dependency by running

npm install uglifyjs-folder --save-dev

A node-modules folder will be added and uglifyjs will be added as DevDependecy


In your package.json file, go to the "scripts" sections 
and add the following under test:

"minify": "uglifyjs-folder ./assets/scripts -o ./assets/scripts.min.js"
  },

This will create a scripts.min.js in the folder 'assets'

In the index.html  change the head tags to the new script.min.js

You can delete the node_modules folder 
