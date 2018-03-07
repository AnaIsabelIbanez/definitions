'use strict';
var Mockgen = require('../mockgen.js');
/**
 * Operations on /product/{id}
 */
module.exports = {
    /**
     * summary: Info for an specific product
     * description: 
     * parameters: id
     * produces: 
     * responses: 200, default
     * operationId: getProductById
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/product/{id}',
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
                path: '/product/{id}',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
