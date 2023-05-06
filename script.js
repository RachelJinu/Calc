function clicked(value){
    document.getElementById('display').value+=value;
}
function clr(){
    document.getElementById('display').value="";
}
function equualclicked(){
    let content=document.getElementById('display').value;
     console.log(Function(content));
    document.getElementById('display').value=eval(content);
}