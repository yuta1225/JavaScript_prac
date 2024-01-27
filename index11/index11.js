// const button = document.getElementById("addBtn");
// const listsw = document.getElementById("lists");

//　クリックしたらユーザーの名前をリストに追加
// button.addEventListener("click", async function () {
//     // データのやりとり
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await res.json();

//     // DOM操作
//     users.forEach(function(user) {
//         const list = document.createElement("li");
//         list.innerText = user.name;
//         lists.appendChild(list);
//     });
// });

// // ロードしたらユーザーの名前をリストに追加
// window.addEventListener("load", async function () {

//     // データのやりとり
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await res.json();

//     // DOM操作
//     users.forEach(function(user) {
//         const list = document.createElement("li");
//         list.innerText = user.name;
//         lists.appendChild(list);
//     });
// });


// リファクタリング 処理を共通化する&APIを叩いて処理を分解する //
// DOM
const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");

// 関数 (メソッド)
function addList(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
}

async function getUsers() {
    // データのやりとり
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}

async function ListUsers() {
    const users = await getUsers();
    users.forEach(addList);
}

//イベント
window.addEventListener("load", ListUsers);
button.addEventListener("click", ListUsers);
