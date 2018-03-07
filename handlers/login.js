'use strict';
var dataProvider = require('../data/login.js');
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
     */
    post: function login(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['post']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
