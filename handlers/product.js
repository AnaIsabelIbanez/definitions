'use strict';
var dataProvider = require('../data/product.js');
/**
 * Operations on /product
 */
module.exports = {
    /**
     * summary: Products info for a specific filter
     * description: 
     * parameters: filter, sort, page
     * produces: 
     * responses: 200, default
     */
    get: function getProducts(req, res, next) {
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
