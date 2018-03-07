'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /product
 */
module.exports = {
    /**
     * summary: Products info for a specific filter
     * description: 
     * parameters: filter, sort, page
     * produces: 
     * responses: 200, default
     * operationId: getProducts
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/product',
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
                path: '/product',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
