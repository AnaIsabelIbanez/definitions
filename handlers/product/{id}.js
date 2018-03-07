'use strict';
var dataProvider = require('../../data/product/{id}.js');
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
     */
    get: function getProductById(req, res, next) {
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
