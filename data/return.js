'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /return
 */
module.exports = {
    /**
     * summary: Returns info for a specific filter
     * description: 
     * parameters: filter, sort, page, include
     * produces: 
     * responses: 200, default
     * operationId: getReturns
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/return',
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
                path: '/return',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
