let _users = [];

let result;

function proceed(users,shuffledusers){
    const length = users.length;
    for(let i=0;i<length;i++){
        if(users[i]===shuffledusers[i]) {
            return false;
        }
    }
    return true;
}

function checkforidentity(users,shuffledusers){
    if(!proceed(users,shuffledusers)) {
        checkforidentity(users,shuffledusers.sort( ()=>Math.random()-0.5 ));
    }
    return "" + shuffledusers;
}


function init(users){
    _users = [...users];
    result= checkforidentity(_users,[..._users].sort( ()=>Math.random()-0.5 )).split(',');
    return result;
}

module.exports = {
    unshuffledusers:_users,
    shuffledusers:result,
    driver:init
};