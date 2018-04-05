'use strict';
var dataProvider = require('../../../data/return/line/{id}.js');
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
     */
    patch: function updateLine(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['patch']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    },
    /**
     * summary: Update part of a line
     * description: 
     * parameters: id, data
     * produces: 
     * responses: 200, default
     */
    get: function updateLine(req, res, next) {
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
