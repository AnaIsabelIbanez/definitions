'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /return/{id}/line
 */
module.exports = {
    /**
     * summary: Lines info for a specific return with pagination
     * description: 
     * parameters: id, page, include
     * produces: 
     * responses: 200, default
     * operationId: getLines
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/return/{id}/line',
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
                path: '/return/{id}/line',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
