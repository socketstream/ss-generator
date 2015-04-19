# ss-generator
The app generator for SocketStream

[![Build Status](https://travis-ci.org/socketstream/ss-generator.svg?branch=master)](https://travis-ci.org/socketstream/ss-generator)
[![Coverage Status](https://coveralls.io/repos/socketstream/ss-generator/badge.svg?branch=master)](https://coveralls.io/r/socketstream/ss-generator?branch=master)
[![Code Climate](https://codeclimate.com/github/socketstream/ss-generator/badges/gpa.svg)](https://codeclimate.com/github/socketstream/ss-generator)
[![Codacy Badge](https://www.codacy.com/project/badge/7a896131bb91417f803c46582f096266)](https://www.codacy.com/app/paulbjensen/ss-generator)


Summary
---

ss-generator is the CLI component of the SocketStream web framework. It has been extracted out of the framework so that it can be used in a Yeoman generator, as well as to help SocketStream's codebase become more modular.

Installation
---

It is primarily for use in the SocketSteam module, but you can install it with npm:

    npm install ss-generator

Usage
---

If you then wish to use it programmatically, run the following code:

```javascript
    var ssGenerator = require('ss-generator');
    ss.process({args: ['new ', 'my_ss_app']}, function () {
    	console.log('app created');
    });
```

Test
---

    npm test

License
---

MIT Licence. See [License](https://github.com/socketstream/ss-generator/blob/master/LICENSE) For more details.