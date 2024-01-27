function isTweetable(text) {
    return text.length <= 140;
};
function alertTweetable(text) {
    if (isTweetable(text)) {
        console.log("you can tweet!");
    }
};
alertTweetable("foo");

// #7-1
const isTweetable = function(text) {
    return text.length <= 140;
}
console.log(isTweetable("foo"));

// #7-2
const unfollw = function() {
    console.log("フォローを外しました");
}
function confirmed(fn) {
    if (window.confirm("実行しますか？")) {
        fn();
    }
}
confirmed(function() {
    console.log("フォローを外しました");
});

// #7-3
function confirmed(fn) {
    const input = window.prompt("実行しますか？");
    fn(input);
}
confirmed(function (input) {
    if (input === "実行") {
        console.log("リポジトリを取得");
    }
});

// #7-4
const foods = ["にんじん", "じゃがいも", "玉ねぎ"];

foods.forEach(function(food){
    console.log(food);
})

// WebAPIを叩く
async function callApi() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users);
}

callApi();