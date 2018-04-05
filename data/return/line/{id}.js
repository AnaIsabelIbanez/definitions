'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /return/line/{id}
 */
module.exports = {
    /**
     * summary: Update part of a line
     * description: 
     * parameters: id, data
     * produces: 
     * responses: 200, default
     * operationId: updateLine
     */
    patch: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/return/line/{id}',
                operation: 'patch',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/return/line/{id}',
                operation: 'patch',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Update part of a line
     * description: 
     * parameters: id, data
     * produces: 
     * responses: 200, default
     * operationId: updateLine
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/return/line/{id}',
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
                path: '/return/line/{id}',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    }
};
