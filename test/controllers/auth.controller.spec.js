var assert = require('assert');

var authController = require("../../controllers/auth.controller");

describe('Auth Controller', function(){
    
    describe('isAuthorized', function(){
        it('should return false if not authorized', function(){
            assert.equal(false, authController.isAuthorized(['user'], 'admin'));
            
        });

        it('should return true if authorized', function(){
            assert.equal(true, authController.isAuthorized(['user', 'admin'], 'admin'));
            
        });

    });

});