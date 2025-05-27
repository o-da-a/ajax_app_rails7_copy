function post() {
  const form = document.getElementById("form"); // ① フォーム要素を取得
  form.addEventListener("submit", (e) => {      // ② フォームが送信されたとき
    e.preventDefault();                         // ③ 通常の送信（ページリロード）を止める
    const formData = new FormData(form);        // ④ フォームのデータを取得

    const XHR = new XMLHttpRequest();           // ⑤ 通信用のXHRオブジェクトを作成
    XHR.open("POST", "/posts", true);           // ⑥ POSTで「/posts」に非同期で送信準備
    XHR.responseType = "json";                  // ⑦ サーバーからのレスポンスの型は JSON にしてほしいと指定
    XHR.send(formData);                         // ⑧ フォームのデータを送信
  });
}


window.addEventListener('turbo:load', post);