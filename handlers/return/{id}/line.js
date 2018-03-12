'use strict';
var dataProvider = require('../../../data/return/{id}/line.js');
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
     */
    get: function getLines(req, res, next) {
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
