'use strict';
const userNameInput = document.getElementById('user -name');
const assessmentButton= document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('twwet-area');

function removeAllChildren(element) {
    while(element.firstChildren) {
        element.removeChild(element.firstCild);
    }
}
assessmentButton.onclick = ()=>{
    const userName = userNameInput.value;
    if (userName.length === 0){
        return;
    }

    removeAllChildren(resultDivided);
    const header= document.createElement('h3');
    header.innerText= '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

};

 const answers = [
    '{userName}のいいところは声です。{userName}の特徴的な声は皆をひきつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさは物事をいつも成功に導きます。',
    '{userName}のいいところは知識です。{userName}の知識を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察で多くの人を助けます。',
    '{userName}のいいところは見た目です。{userName}の内側からあふれ出る良さにみんな惹かれます。',
    '{userName}のいいところは決断力です。{userName}の決断にいつも助けられます。',
    '{userName}のいいところは思いやりです。{userName}に気にかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感します。',
    '{userName}のいいところは節度です。{userName}は強引すぎない素晴らしい考えを持っています。',
    '{userName}のいいところは好奇心です。{userName}はいつも新しいことに取り組みます。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはそのすべてです。{userName}のありのまますべてがいいところです。',
    '{userName}のいいところは自制心です。{userName}は、いつも冷静に行動しています。',
];

function assessment(userName){
    let sumOfCharCode = 0;
    for (let i = 0; i< userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);

    }
    const index =sumOfCharCode % answers.length;
    let result= answers[index];

    result = result.replace(/\{userName\}/g, userName);
return result;

}

console.assert(
    assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
);
console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じなら同じ診断結果を出力する処理が正しくありません。'
);
