'use strict';
var dataProvider = require('../data/return.js');
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
     */
    get: function getReturns(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
