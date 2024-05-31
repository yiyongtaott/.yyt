function change1() {
    document.getElementById("iframe").style.height = "750px";

    document.getElementById("unique").className = "unique2 head"
}
function change2() {
    document.getElementById("iframe").style.height = "350px";

    document.getElementById("unique").className = "unique1 head"
}
function orig() {
    document.getElementById("iframe").style.height = "350px";
    document.getElementById("unique").className = "head"
}
var original = '<div id="ins"><h2>Wed May 29 2024 13:18:30 GMT+0800 (中国标准时间)</h2><h3>站主易涌涛</h3><p class="content">一条测试内容</p></div><div id="ins"><h2>Wed May 29 2024 14:08:30 GMT+0800 (中国标准时间)</h2><h3>站主易涌涛</h3><p class="content">⣹⣿⣿⣿⡗⣾⡟⡜⣵⠃⣴⣿⣿⢸⣿⣿⢸⠘⢰⣿⣿⣿⣿⡀⢱⠄⠨⢸    ⣿⣿⣿⣿⡇⣿⢁⣾⣿⣾⣿⣿⣿⣿⣸⣿⡎⠐⠒⠚⠛⠛⠿⢧⠄⠄⢠⣼    ⣿⣿⣿⣿⠃⠿⢸⡿⠭⠭⢽⣿⣿⣿⢂⣿⠃⣤⠄⠄⠄⠄⠄⠄⠄⠄⣿⡾    ⣼⠏⣿⡏⠄⠄⢠⣤⣶⣶⣾⣿⣿⣟⣾⣾⣼⣿⠒⠄⠄⠄⡠⣴⡄⢠⣿⣵    ⣳⠄⣿⠄⠄⢣⠸⣹⣿⡟⣻⣿⣿⣿⣿⣿⣿⡿⡻⡖⠦⢤⣔⣯⡅⣼⡿⣹    ⡿⣼⢸⠄⠄⣷⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣕⡜⡌⡝⡸⠙⣼⠟⢱⠏    ⡇⣿⣧⡰⡄⣿⣿⣿⣿⡿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣋⣪⣥⢠⠏⠄    ⣧⢻⣿⣷⣧⢻⣿⣿⣿⡇⠄⢀⣀⣀⡙⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠂⠄⠄    ⢹⣼⣿⣿⣿⣧⡻⣿⣿⣇⣴⣿⣿⣿⣷⢸⣿⣿⣿⣿⣿⣿⣿⣿⣰⠄⠄⠄    ⣼⡟⡟⣿⢸⣿⣿⣝⢿⣿⣾⣿⣿⣿⢟⣾⣿⣿⣿⣿⣿⣿⣿⣿⠟⠄⡀⡀    ⣿⢰⣿⢹⢸⣿⣿⣿⣷⣝⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⠉⠄⠄⣸⢰⡇</p></div>'
function wri() {
    var user = document.getElementById("user").value;
    var texa = document.getElementById("texa").value;
    var a = new Date()
    if (user == '') {
        user = "匿名"
    }
    if (texa == '') {
        alert("请输入留言")
        return false
    }
    var newwrite = '<div id="ins"><h2>' + a + '</h2><h3>' + user + '</h3><p class="content">' + texa + '</p></div>'
    var allwrite = newwrite + original
    original = allwrite
    board.innerHTML = allwrite
}
function sub() {

    alert("登录/注册暂未开放")
    return false

}
function intro() {
    document.getElementById("unique").className = "unique3 head"
    document.getElementById("iframe").style.height = "652px";
}
function a() {
    document.getElementById("changebg").className = "one"
    document.getElementById("unique").style.background="rgba(49, 99, 118, 0.856)"
    document.getElementById("right2").style.background="rgba(255, 81, 81, 0.6)"
}
function b() {
    document.getElementById("changebg").className = "two"
    document.getElementById("unique").style.background="rgba(160, 212, 232, 0.856)"
    document.getElementById("right2").style.background="rgba(168, 255, 239, 0.6)"
}
var change = 1;
function changebg() {
    if (change == 1) {
        change = 2;
        b();
    }
    else if (change == 2) {
        change = 1;
        a();
    }
}
function fta() {
    document.getElementById("bdqn").style.color = "#ff0"
    document.getElementById("bdqn").style.fontWeight = "bold"
    document.getElementById("bd").style.color = "#f00"
    document.getElementById("bd").style.fontWeight = "normal"
    document.getElementById("bg").style.background = "rgba(0, 179, 255, 0.849)"
}
function ftb() {
    document.getElementById("bdqn").style.color = "#f00"
    document.getElementById("bdqn").style.fontWeight = "normal"
    document.getElementById("bd").style.color = "#ff0"
    document.getElementById("bd").style.fontWeight = "bold"
    document.getElementById("bg").style.background = "rgba(0, 255, 136, 0.849)"
}

function changeft() {
    setTimeout("fta()", 250);
    setTimeout("ftb()", 500);
}
setInterval("changeft()", 500)
