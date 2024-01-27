const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次の内どれ？',
        answers: [
            'スーパーファミコン',
            'プレイステーション2', 
            'ニンテンドースイッチ', 
            'ニンテンドーDS'
        ],
        correct: 'ニンテンドーDS'
    }, {
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [
            'MOTHER2',
            'スーパーマリオブラザーズ3',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct: 'MOTHER2'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// const question = 'ゲーム市場、最も売れたゲーム機は次の内どれ？';
// const answers = [
//     'スーパーファミコン',
//     'プレイステーション2', 
//     'ニンテンドースイッチ', 
//     'ニンテンドーDS'
// ];
// const correct = 'ニンテンドーDS';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//定数の文字列をHTMLに反映させる
// document.getElementById('js-question').textContent = question;
// document.getElementsByTagName('button')[0].textContent = answers[0];
// document.getElementsByTagName('button')[1].textContent = answers[1];
// document.getElementsByTagName('button')[2].textContent = answers[2];
// document.getElementsByTagName('button')[3].textContent = answers[3];

//ボタンをクリックしたら正誤判定
// document.getElementsByTagName('button')[0].addEventListener('click', () => {
//     if (correct === document.getElementsByTagName('button')[0].textContent) {
//         window.alert('正解!');
//     } else {
//         window.alert('不正解!');
//     }
// });

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    const $button = document.getElementsByTagName('button');
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];    
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert('正解!');
        score++;
    } else {
        window.alert('不正解!');
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setupQuiz();
    } else {
        window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です!');
    }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
