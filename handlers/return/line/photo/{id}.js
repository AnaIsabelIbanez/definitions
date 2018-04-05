'use strict';
var dataProvider = require('../../../../data/return/line/photo/{id}.js');
/**
 * Operations on /return/line/photo/{id}
 */
module.exports = {
    /**
     * summary: Delete photo to a line
     * description: 
     * parameters: id
     * produces: 
     * responses: 200, default
     */
    delete: function deletePhoto(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['delete']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
