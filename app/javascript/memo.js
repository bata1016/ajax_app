function memo() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form")); //formDataはフォームで入力された値を取得できるオブジェクト
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true); //リクストの内容を初期化
    XHR.responseType = "json"; //受け取るデータの形式を指定
    XHR.send(formData);
    XHR.onload = () => {        //受け取ったリクエストに対して自動で処理を返してくれる記述
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null; //エラーの際に処理を止めるための記述
      }
      const item = XHR.response.post;
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const HTML = `
      <div class="post" data-id=${item.id}>
         <div class="post-date">
           投稿日時：${item.created_at}
         </div>
         <div class="post-content">
         ${item.content}
         </div>
       </div>`;
       list.insertAdjacentHTML("afterend", HTML);
       formText.value = "";
    };
    e.preventDefault(); //プログラム本来の処理を止めるための記述
  });
}
window.addEventListener("load", memo);