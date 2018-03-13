'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /returnsTypes
 */
module.exports = {
    /**
     * summary: standard response for key value lists
     * description: 
     * parameters: 
     * produces: 
     * responses: 200, default
     * operationId: getKeyValueList
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/returnsTypes',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/returnsTypes',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
