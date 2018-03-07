'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /login
 */
module.exports = {
    /**
     * summary: Login summary
     * description: 
     * parameters: body
     * produces: 
     * responses: 200, default
     * operationId: login
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/login',
                operation: 'post',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/login',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
