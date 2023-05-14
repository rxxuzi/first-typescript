// input要素
const inputElem = document.getElementById('num1') as HTMLInputElement; 
// 埋め込む先のspan要素
const currentValueElem = document.getElementById('width') as HTMLSpanElement;

//現在の値をspanに埋め込む
const setCurrentValue = (value: string) => {
    currentValueElem.innerText = value;
    console.log(value);
}

//inputイベント時に値をセットする
const rangeOnChange = (e: Event) => {
    currentValueElem.textContent = (e.target as HTMLInputElement).value;
}




// window.onload = function () {
//     var hoge = document.getElementById("width");
//     // 選択した際のイベント取得
//     hoge.addEventListener('change', (e) => {
//       document.getElementsByClassName('eva')[0].textContent = hoge.value;
//     });
// }