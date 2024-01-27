'use strict';

// //confirmメソッドではブール値が返ってくる
// if (window.confirm('ゲームスタート！準備はいい？')) {
//     console.log('ゲームを開始します。');
// } else {
//     console.log('ゲームを終了します。');
// }

// let answer = window.prompt('ヘルプを見ますか？');
// if (answer === 'yes') {
//     window.alert('タップでジャンプ、障害物を避けます');
// } else if (answer === 'no') {
//     window.alert('ゲーム起動中');
// } else {
//     window.alert('yesかnoでお答えください');
// }

// const number = Math.floor(Math.random() * 6);
// const answer = parseInt(window.prompt('数当てゲーム。0~5の数字を入力してね。'));
// let message;
// if (answer === number) {
//     message = 'あたり！';
// } else if(answer < number) {
//     message = '残念でした！もっと大きい';
// } else if(answer > number) {
//     message = '残念でした！もっと小さい';
// } else {
//     message = '0~5の数字を入力してね。'
// }
// window.alert(message);

// const hour = new Date().getHours();
// if (hour >= 19 && hour < 21) {
//     window.alert('お弁当30%OFF！');
// } else if(hour === 9 || hour === 15) {
//     window.alert('お弁当１個買ったら１個おまけ！');
// } else {
//     window.alert('お弁当はいかがですか');
// }

// let enemy = 100;
// let count = 0;
// window.alert('戦闘スタート');
// while (enemy > 0) {
//     const attack = Math.floor(Math.random() * 30) + 1;
//     console.log('モンスターに'　+ attack + 'のダメージ！');
//     enemy -= attack;
//     count += 1;
// }
// console.log(count + '回でモンスターを倒した！');

// function total(price) {
//     const tax = 0.1;
//     return price + price * tax;
// }
// console.log('コーヒーメーカーの値段は' + total(8000) + '円(税込)です。');
// document.getElementById('output').textContent = 'コーヒーメーカーの値段は' + total(8000) + '円(税込)です。';

// let todo = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳買う'];
// todo.push('歯医者に行く');
// for (let item of todo) {
//     const li = `<li>${item}</li>`;
//     document.getElementById('list').insertAdjacentHTML('beforeend', li);
// }

// let jsbook = {title: 'JavaScript入門', price: 2500, stock: 3};
// for (let p in jsbook) {
//     console.log(p + '=' + jsbook[p]);
// }

// let jsbook = {title: 'JavaScript入門', price: 2500, stock: 3};
// document.getElementById('title').textContent = jsbook.title;
// document.getElementById('price').textContent = jsbook.price;
// document.getElementById('stock').textContent = jsbook.stock;

// document.getElementById('form').onsubmit = function (event) {
//     event.preventDefault(f);
//     const search = document.getElementById('form').word.value;
//     document.getElementById('output').textContent = `「${search}」の検索中...`;
// };

// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth();
// const date = now.getDate();
// const hour = now.getHours();
// const min = now.getMinutes();
// let ampm = '';
// if (hour < 12) {
//     ampm = 'a.m.';
// } else {
//     ampm = 'p.m.';
// }
// const output = `${year}/${month + 1}/${date} ${hour % 12}:${min}${ampm}`;
// document.getElementById('time').textContent = output;

// function point(num, digit) {
//     const mover = 10 ** digit;
//     return Math.floor(num * mover) / mover;
// }
// document.getElementById('output').textContent = point(Math.PI, 2);

function countdown(due) {
    const now = new Date();

    const rest = due.getTime() - now.getTime();
    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest/ 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    const count = [days, hours, min, sec];
    
    return count;
}
let goal = new Date();
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);
function recalc() {
    const counter = countdown(goal);
    const time = `${counter[1]}時間${counter[2]}分${counter[3]}秒`;
    document.getElementById('timer').textContent = time;
    refresh();
}
function  refresh() {
    setTimeout(recalc, 1000);
}
recalc();
console.log(countdown(goal));
const counter = countdown(goal);
const time = `${counter[1]}時間${counter[2]}分${counter[3]}秒`;
document.getElementById('timer').textContent = time;