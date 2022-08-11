# metapol-web



💀💀💀💀<h1>DON'T DO IT, I TRIED AND IT BROKE THE CODE💀💀💀💀</h1>
But I found a solution 😊😊
Go to the bottom of the index.html page and edit the Jquery path from 

<pre>script src="assets/vendors/jquery-3.5.1.min.js"></script></pre> to this 👇👇 <pre></span><script src="assets/scripts/jquery-3.5.1.min.js"></script></pre>
<li>Leave the other 3 as they are. Will figure out how to compile them without mangling Jquery dependents.
<li>Go to the 'assets/vendors' directory and copy the 'jquery-3.5.1.min.js'file. Paste it into 'assets/scripts' directory</li>
<li>Go ahead and delete the '/vendors' directory. We no longer need it.Everything should run perfectly now
<hr>
<h3>Minify Javascript </h2>

<h4>(For CSS, go <a href="#minify-css"> Minify CSS Section</a>)<br>
<hr>
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

<li><pre>"minifyjs": "uglifyjs-folder ./assets/scripts -o ./assets/scripts.min.js"</pre>

<b> Run</b> 
 
 <pre>npm run minifyjs</pre>
  
This will create a scripts.min.js in the folder 'assets'
  



<li>In the index.html change the head tags to the new script.min.js and vendors.min.js

<li> Feel free to delete the old scripts files [You can alsodelete the node_modules folder]
</ul>


<h3><a class="anchor" aria-hidden="true" href="#minify-css">Minify CSS<a/></>
