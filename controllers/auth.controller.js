function AuthController(){

    function isAuthorized(roles, neededrole){
        return roles.indexOf(neededrole) >= 0;
    }

    function isAuthorizedAsync(roles, neededrole, cb){
        setTimeout( function(){
            cb(roles.indexOf(neededrole) >= 0)
        }, 0);
    }

    return {isAuthorized , isAuthorizedAsync};

}

module.exports = AuthController();