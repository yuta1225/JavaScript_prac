//変数
let unko = 'Hello World';

// unko = 'Hello World 2';

//定数
const bugUnko = 'He..Hell...Hello World!';

//配列
let inoki = ['いーち', 'にーい', 'さーん', 'だーー!!'];

//ループ文
// let index = 0;
// while (index < inoki.length) {
//     console.log(inoki[index]);
//     index++;
// }

// if / else
// if (inoki.length > 3) {
//     console.log('ボンバイエ!');
// } else {
//     console.log('ボンバ');
// }

//関数
const test = (arg) => {
    //ここに実行したい命令を書く
    if (inoki.length > arg) {
        console.log('ボンバイエ!');
    } else {
        console.log('ボンバ');
    }   
};
test(3);

//オブジェクト
const unko2 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    goToilet: () => {
        console.log('Hello World');
    }
};


// console.log(window.innerHeight);
// window.alert('Unko!');

// console.log(document);
// console.log(document.getElementsByTagName('button')[1]);
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
    window.alert('Hello World');
});


