# metapol-web
Metalpol FrontEnd
<ul>
  
<li>Go to root folder and run <pre> npm innit</pre> to get the package.json file.</>
<li>It will prompt you to enter a name. You can skip the rest of the steps (Description, entry point etc, License etc)
<li>It will ask 'is this okay?' Press Enter

Step 2:

<li>Install Uglifyjs as a Dev Dependency by running

  <pre>npm install uglifyjs-folder --save-dev</pre>

<li>A node-modules folder will be added and uglifyjs will be added as DevDependecy


<li>In your package.json file, go to the "scripts" sections and add the following under test:

 <pre>"minify": "uglifyjs-folder ./assets/scripts -o ./assets/scripts.min.js"
  },</pre>

Run <pre>npm run minify</pre>

This will create a scripts.min.js in the folder 'assets'

In the index.html  change the head tags to the new script.min.js

You can delete the node_modules folder 
</ul>
