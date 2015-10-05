/* jshint newcap: false */
(function(context, undefined) {
    var exportName = 'core-jsdk';
    var dependencies = {
        'core': './src/core'
    };

    function factoryFunction(require, core) {
        'use strict';

        if (require) {
            core = require(dependencies.core);
        }

        var retVal = factoryFunction[exportName] = core;
        return retVal;
    }

    ;(function (root, factory) {
        'use strict';

        /* istanbul ignore next */
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(['require'], factory);
        } else if (typeof exports === 'object') {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like environments that support module.exports,
            // like Node.
            var retVal = module.exports = factory.apply(null, [ null ].concat(Object.values(dependencies)));
            Object.defineProperty(retVal, '__module', {
                get: function() {
                    return module;
                },
                enumerable: false
            });
        } else {
            // Browser globals (root is window)
            var dependencyValues = [null];
            for(var key in dependencies) {
                dependencyValues.push(dependencies[key]);
            }
            root[exportName] = factory.apply(null, dependencyValues);
        }
    }(context, factoryFunction));
})(this);
