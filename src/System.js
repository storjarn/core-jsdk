/* jshint newcap: false */
(function(context, undefined) {
    var exportName = 'System';
    var required = [],
        requires = {
            'Class': '../dist/Class.min'
        };

    function factoryFunction(require, Class) {
        'use strict';

        if (require) {
            for(var key in requires) {
                factoryFunction[key] = require(requires[key]);
            }
        }

        var retVal = factoryFunction[exportName] = {};

        return retVal;
    }

    ;(function (root, factory) {
        'use strict';

        var d = typeof define === 'function' ? define : null,
            dp = Object.defineProperty, e, f = factory, key,
            r = typeof require === 'function' ? require : null,
            rs = requires, rd = required;

        /* istanbul ignore next */
        if (d && d.amd) {
            // AMD. Register as an anonymous module.
            rd = ['require'];
            for(key in rs) {
                rd.push(rs[key]);
            }
            d(rd, f);
        } else {
            rd = [null];
            if (typeof exports === 'object') {
                // Node. Does not work with strict CommonJS, but
                // only CommonJS-like environments that support module.exports,
                // like Node.
                for(key in rs) {
                    rd.push(r(rs[key]));
                }
                e = f.apply(null, rd);
                dp(e, '__module', {
                    get: function() {
                        return module;
                    },
                    enumerable: false
                });
                module.exports = e;
            } else {
                // Browser globals (root is window)
                rd = [null];
                for(key in rs) {
                    var target = null, paths = key.split('.');
                    for(var j = 0; j < paths.length; ++j) {
                        target = root[path[j]];
                    }
                    if (target) {
                        rd.push(target);
                    }
                }
                root[exportName] = factory.apply(null, rd);
            }
        }
    }(context, factoryFunction));
})(this);
