
function find(){
    let input = parseInt(document.getElementById('input').value);
    let result = document.getElementById('result');
    let random = parseInt(Math.floor(Math.random() * 15) + 1);
    if(input === random){
        result.innerHTML = '<h1 style="color:green;">WINS</h1>'
    }
    else{
        result.innerHTML = '<h1 style="color:red;">LOSES</h1>'
    }
    console.log(input,random)
}