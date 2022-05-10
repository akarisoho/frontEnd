let myWindow;

    function openWin() {
      myWindow = window.open("", "팝업창", "width=300,height=300","");
      myWindow.document.write("<p>This is 'myWindow'</p>");  //URL을 작성하면 쓰지말 것
    }

    function closeWin() {
      myWindow.close();
    }