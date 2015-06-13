/**
 * A collection of tracking utilities
 */

var url     = require('url') ;
var config  = require('config') ;

module.exports = {
    addSongPalXID : function(link) {

        if(link == ""){
            return link;
        }

        var newUrlObject = url.parse(link,true);
        newUrlObject.search = null;
        newUrlObject.query.XID = config.songpal_tracking_xid;
        var newUrl = url.format(newUrlObject);

        return newUrl;
    }
};