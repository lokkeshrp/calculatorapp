function display(val)
{
    document.getElementById("display1").value+=val;

}
function solve() {

    let x = document.getElementById("display1").value;
  
    let y = eval(x);
  
    document.getElementById("display1").value = y;
  
  }
  
  function cleardisplay() {
  
    document.getElementById("display1").value = "";
  
  }
  function delete1() {
  
    document.getElementById("display1").value = "";
  
  }
 