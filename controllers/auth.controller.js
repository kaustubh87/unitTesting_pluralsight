function AuthController(){

    function isAuthorized(roles, neededrole){
        return roles.indexOf(neededrole) >= 0;
    }

    return {isAuthorized};

}

module.exports = AuthController();