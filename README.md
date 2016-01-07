Webpack Extract-text plugin experiment
======================================

## How to use

1. Go to root directory of this repo.
2. Install node modules.
   `npm install`
3. Pack javascript files.
   `webpack`
4. See what happens.
   Open build/app.css, and you will see duplicated CSS lines.

## Description

The dependencies are:

```
           +---> a.js ---> a.styl ---+
           |                         |
main.js ---+                         +---> common.styl
           |                         |
           +---> b.js ---> b.styl ---+
```

Finally, webpack copies common.styl exactly twice.

But, if you refactor your code in this way:

```
                  +---> a.styl
                  |
           +---> a.js ---+
           |             |
root.js ---+             +---> common.js ---> common.styl
           |             |
           +---> b.js ---+
                  |
                  +---> b.styl
```

Now, webpack will copy common.styl only once.

Still have doubts? Checkout `another-example` branch and test by yourself!
