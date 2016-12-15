# Demo application to visualize real-time data with AngularJS, Node.js and Socket.IO

## Prerequisites
* Node.js - Download and Install [Node.js] (http://www.nodejs.org/download/)

### Tools Prerequisites
* NPM - Node.js package manager, should be installed when you install Node.js.

## Additional Packages
* Express - Defined as npm module in the [package.json](package.json) file.
* Express-Session - Defined as npm module in the [package.json](package.json) file.
* Body-Parser - Defined as npm module in the [package.json](package.json) file.
* Bower - Defined as npm module in the [package.json](package.json) file.
* EJS - Defined as npm module in the [package.json](package.json) file.
* Morgan - Defined as npm module in the [package.json](package.json) file.
* Socket.IO - Defined as npm module in the [package.json](package.json) file.
* Angular - Defined as bower module in the [bower.json](bower.json) file.
* Angular-Route - Defined as bower module in the [bower.json](bower.json) file.
* Bootstrap - Defined as bower module in the [bower.json](bower.json) file.
* jQuery - Defined as bower module in the [bower.json](bower.json) file.
* Rickshaw - Defined as bower module in the [bower.json](bower.json) file.

## Quick Install
The quickest way to see the demo in action ist to clone the project and utilize it like this:

Install dependencies:

    $ npm install
    $ bower install

Start the server:

    $ node server

Open a browser and go to:

    http://localhost:3000

## Troubleshooting
During installation you may encounter some issues, most of the issues can be solved by one of the following tips.
If you can't solve the issues despite the following tips feel free to contact me for support.

Updating NPM:

    $ npm update -g npm

Cleaning NPM and Bower cache:

    $ npm cache clean
    $ bower cache clean

Delete the downloaded dependencies:

    $ rm -r node_modules
    $ rm -r public/libs

    or

    git clean -fdx

## More Information
* You can contact Tobias Dörner on any issue via [E-Mail](mailto:tobias.doerner@bfft.de)
* Visit the company I'm working for [BFFT Gesellschaft für Fahrzeugtechnik mbH](https://www.bfft.de)

## Credits
* Thanks to [Amos Haviv](https://github.com/amoshaviv) and his Books and Tutorials about the MEAN Stack

## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.