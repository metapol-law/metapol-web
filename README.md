# metapol-web
Metalpol FrontEnd
<ul>
  
<li>To get the package.json entry file, go to root folder and run 
  
<pre> npm innit</pre></>
  
<li>It will prompt you to enter a name. You can skip the rest of the steps (Description, entry point etc, License etc)
  
<li>It will ask 'is this okay?' Press Enter

Step 2:

<li>Install Uglifyjs as a Dev Dependency by running

<pre>npm install uglifyjs-folder --save-dev</pre>

<li>A node-modules folder will be added and uglifyjs will be added as DevDependecy

<li>In your package.json file, go to the "scripts" sections and add the following under test:

<li><pre>"minifyjs": "uglifyjs-folder ./assets/scripts -o ./assets/scripts.min.js"},</pre>

<b> Run</b> 
 
 <pre>npm run minifyjs</pre>
  
This will create a scripts.min.js in the folder 'assets'
  
<li>Add another line for vendor scripts
  
<pre>"minifyvendor": "uglifyjs-folder ./assets/vendors -o ./assets/vendors.min.js"},</pre>
  
<b>Run</b> 
  
<pre>npm run minifyvendor</pre>
  
<li> This will create a vendors.min.js in the folder 'assets'

<li>In the index.html change the head tags to the new script.min.js and vendors.min.js

<li> Feel free to delete the old scripts files [You can alsodelete the node_modules folder]
</ul>
