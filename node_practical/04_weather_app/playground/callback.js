var getUser = (id, callBack) => {
    var user = {
        id: id,
        name: 'Mayur'
    }

    callBack(user);
};

getUser(31, (user) => {
    console.log(user);
});