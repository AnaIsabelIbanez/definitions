'use strict';
var Mockgen = require('../../../mockgen.js');
/**
 * Operations on /return/line/{id}/photo
 */
module.exports = {
    /**
     * summary: add photo to a line
     * description: 
     * parameters: id, file
     * produces: 
     * responses: 200, default
     * operationId: addPhoto
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/return/line/{id}/photo',
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
                path: '/return/line/{id}/photo',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
