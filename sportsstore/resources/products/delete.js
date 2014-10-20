if(me === undefined || me.username != 'admin'){
    cancel("Not authed bra", 401);
}