'use strict';
var dataProvider = require('../../../../data/return/line/{id}/photo.js');
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
     */
    post: function addPhoto(req, res, next) {
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
