### Commands:

1. create folder, cd into it.

2. npm init, fillin details

3. npm install --save react react-dom

4. Dependencies mentioned in dependencies section of package.json is needed to run the code in browser

5. Dev-dependencies are helpful for us to write Code.
   * npm install --save -D typescript
   * npm install --save -D @types/react @types/react-dom
   * npm install --save -D @types/node

6. To uninstall any dependencies, do ```npm uninstall @types/node```
7. tsc in package.json build script is going to look into src folder by default

8. create src folder & create index.ts file there with following content -
   ``` const name = "Ritu"```
   In the package.json script section, add -
   "build": "tsc", and main to index.ts

9. Lets see stuff on browser -
* Create index.html. put following content into it -
  ```<html>
      <header>
         <h1>This is page</h1>
      </header>
   <body>
      <div id="root"></div>
   </body>
   </html>
   ```
  * create src folder & create index.tsx file with following content - 
  ```
   import * as React from "react";
   import * as ReactDOM  from "react-dom";
   ReactDOM.render(
      <h1>Hi Again World!!</h1>,
      document.querySelector('#root')
   );
   ```
 * Now rebuild the application & open index.html into browser.
 * Oops, you will be getting error & not able to see any content of index.tsx. Because now we need module bundler like webpack.




   

