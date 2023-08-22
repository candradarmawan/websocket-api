const users = [
    {
        id: "1",
        name: "Nawi",
        email: "nawi@ingen.net",
        avatar:
            "https://talenta.oss-ap-southeast-5.aliyuncs.com/avatar/20220824_181103_1661339452946.jpg",
    },
    {
        id: "2",
        name: "Ravi",
        email: "ravi@ingen.net",
        avatar:
            "https://talenta.oss-ap-southeast-5.aliyuncs.com/avatar/20220923_193148_1663936258555.jpg",
    },
    {
        id: "3",
        name: "Papabear",
        email: "joshe@ingen.net",
        avatar:
            "https://talenta.oss-ap-southeast-5.aliyuncs.com/avatar/K917Amt13InsAze-KSzCTiFSzIhfVZCS.png",
    },
];

function findUserById(userId) {
    return users.find((user) => user.id === userId);
}

module.exports = { users, findUserById };