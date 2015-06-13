'use strict';


/**
 * Namespace for luigi 
 * @type {{modules: {}}}
 */

var Luigi = {
	modules : {},
	services : {},
	controllers : {}
};

Luigi.modules.luigi = angular.module('luigi', ['ui.bootstrap', 'ngResource', 'ngDragDrop', 'ngTouch', 'util', 'ngSanitize', 'lvl.directives.dragdrop']);