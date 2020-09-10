# sel-workshop
====================

**Introduction:**

This project is to demonstrate creating a test framework for sample application using webdriverio
  * IDE Used: **WebStorm/VS Code** Community Edition
  * Programming language: **typescript**
  * Browser Driver: **Chrome**
  * Build/Dependency Management Tool: **node.js with node package manager**

**Prerequisites:**
 * For easy install use https://nodejs.org/en/download/ to download Node.js and NPM
 * To be more in control of each version use Node Version Manager, see instructions here https://github.com/nvm-sh/nvm
 * If you run `node -v` you could see the version installed
 * If you run `npm -v`  you could see the node package manager version installed

**Getting Started:**
 We would be executing the following commands during demo to perform setup and get started
 
 * `npm init -y` This will generate package.json
 * `npm i -D @wdio/cli`
 * `npx wdio config`
 * `tsc --init`  This will create a tsconfig.json
 * `npm install --save-dev typescript` 
 * `npm install ts-node --save-dev`
 * `npm install chai mocha ts-node @types/chai @types/mocha --save-dev`  
 
 
 **Run Test:**
 
 * ```sh
   $ npx wdio run wdio.conf.js
   
 
 * Once you have configured the test script in package.json descriptor under scripts section,then you could run your test using command 
 * ```sh
    $ npm test

 
  **Reporting:**
  * We would integrate allure reporting to our app https://webdriver.io/docs/allure-reporter.html
  * Run the following command to install allure
     ```sh
          $ npm install @wdio/allure-reporter --save-dev
          $ npm install -g allure-commandline --save-dev 
  * Generate a report using
    
     ```sh
     $ allure generate allure-results
     ``` 
  * Open a report using   
   
     ```sh
     $ allure open allure-report
     ``` 
     
    **Workshop Demo** 
  * During workshop you could checkout chapters in different branch
       ```sh
         $ git checkout chapter1
         $ git checkout chapter2
         $ git checkout chapter3 
  
  