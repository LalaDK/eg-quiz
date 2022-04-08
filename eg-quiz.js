(() => {
  $('<style>').text(".correct{border: 5px dashed #7FFF00; background-color:  #e9ffdb}").appendTo(document.head);
  function stripHtml(html)
  {
     let tmp = document.createElement("DIV");
     tmp.innerHTML = html;
     return tmp.textContent || tmp.innerText || "";
  }
  window.onclick = () => {
    $(".correct").each((idx, el) => {
      $(el).removeClass("correct");
    });
    let quizes = ((((this.app || {})._data || {}).detail || []).Quizes || []);
    for(let quiz of quizes) {
      for(let question of quiz.Questions) {
        for(let reply of question.PosibleReplies) {
          if(reply.IsCorrect) {
            let el = $("div.vselect-pointer div:contains(" + stripHtml(reply.Title) + ")");
            if(el) {
              el.addClass('correct');
            }
          }
        }
      }  
    }  
  };
})();
