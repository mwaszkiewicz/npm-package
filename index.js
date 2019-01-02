"use strict";

 var SERVER_METHODS = {
    GET: 0,
    POST: 1,
    PATCH: 2,
    DELETE: 3
  };
  
 function getMethodName (method) {
    switch (method) {
      case SERVER_METHODS.GET:
        return 'GET';
      case SERVER_METHODS.POST:
        return 'POST';
      case SERVER_METHODS.PATCH:
        return 'PATCH';
      case SERVER_METHODS.DELETE:
        return 'DELETE';
      default:
        return 'UNKNOWN';
    }
  };


module.exports = { getMethodName, SERVER_METHODS }; 