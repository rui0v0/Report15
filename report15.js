// タブ切り替え処理
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// 初期状態に戻す関数
function resetState() {
  // 背景色を初期状態に戻す（特にタブ3対策）
  document.body.style.backgroundColor = '';

  // タブ2の文章を元に戻す
  document.querySelector('#tab2 p').textContent = '2';
}

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 状態リセット
    resetState();

    // すべて非アクティブにする
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // クリックされたタブをアクティブに
    button.classList.add('active');
    const targetId = button.dataset.tab;
    document.getElementById(targetId).classList.add('active');
  });
});

// 各タブ内ボタンの反応
document.getElementById('btn1').addEventListener('click', () => {
  alert('タブ1のボタンが押されました');
});

document.getElementById('btn2').addEventListener('click', () => {
  document.querySelector('#tab2 p').textContent = 'プログラミング難しい; ;';
});

document.getElementById('btn3').addEventListener('click', () => {
  document.body.style.backgroundColor = '#e0e0ff';
  document.querySelector('#tab3 p').textContent = '色が変わります';
});