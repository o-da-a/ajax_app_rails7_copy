const buildHTML = (XHR) => {
  const item = XHR.response.post;          
  // ⑩ レスポンスの中から投稿されたメモの情報を抽出、itemに格納 postsコントローラのcreateアクションのrender json: {post: post}で、post=投稿内容に
       const html = `
          <div class="post">
            <div class="post-date">
              投稿日時：${item.created_at}
            </div>
            <div class="post-content">
              ${item.content}
            </div>
          </div>`;
       return html;
};


function post() {
  const form = document.getElementById("form"); // ① フォーム要素を取得
  form.addEventListener("submit", (e) => {      // ② フォームが送信されたとき
    e.preventDefault();                         // ③ 通常の送信（ページリロード）を止める
    const formData = new FormData(form);        // ④ フォームのデータを取得

    const XHR = new XMLHttpRequest();           // ⑤ 通信用のXHRオブジェクトを作成
    XHR.open("POST", "/posts", true);           // ⑥ POSTで「/posts」に非同期で送信準備
    XHR.responseType = "json";                  // ⑦ サーバーからのレスポンスの型は JSON にしてほしいと指定
    XHR.send(formData);                         // ⑧ フォームのデータを送信
  
    XHR.onload = () => {                        // ⑨ リクエストの送信が成功したら呼び出される、成功後の処理を定義
      if (XHR.status != 200) {
         alert(`Error ${XHR.status}: ${XHR.statusText}`); //statusとTextは規定されている内容が勝手に出てくる
         return null;                           //エラーが出たらJavaScriptの処理から抜け出す
      }
      const list = document.getElementById("list");
       const formText = document.getElementById("content");
        list.insertAdjacentHTML("afterend", buildHTML(XHR));
        formText.value = "";
          };
  });
};


window.addEventListener('turbo:load', post);