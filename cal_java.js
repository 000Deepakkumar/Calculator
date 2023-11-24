function Solve(val) {
    var v = document.getElementById('a1');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('a1').value;
    var num2 = eval(num1);
    document.getElementById('a1').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('a1');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('a1');
    ev.value = ev.value.slice(0,-1);
 }