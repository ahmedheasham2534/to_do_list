let taskValue = document.getElementById('taskValue')
let items = document.getElementById('items')
function addTask(){
    // the new vars
    const hexColors = [
        "yellow", "lightyellow", "gold",
        "lightgreen", "lime", "palegreen",
        "lightblue"];
        let randomcolor =hexColors[Math.floor(Math.random() * hexColors.length)];
    let checkBox= document.createElement("INPUT");
    checkBox.setAttribute("type", "checkbox");
    checkBox.style.marginRight = '10px'
    let list = document.createElement('li')
    list.style.color = 'rgb(64, 50, 168)'
    list.style.padding = '15px 10px'
    list.style.listStyle = 'none'
    list.style.background = randomcolor
    list.style.borderRadius = '10px'
    list.style.width = '290px'
    list.style.marginLeft = '70px'
    list.style.marginTop = '7px'
    list.textContent  = taskValue.value
    // end
    items.appendChild(list)
    list.prepend(checkBox)
    taskValue.value  = ''
    checkBox.addEventListener("change", function() {
        if (this.checked) {
            list.innerHTML = `<input type="checkbox" checked style="margin-right: 10px;"> <del>${taskValue.value}</del>`;
            setTimeout(function(){
                items.removeChild(list)
            
           }, 1000);
        } 
        else {
            list.innerHTML = `<input type="checkbox" style="margin-right: 10px;"> ${taskValue.value}`;
        }})
    if(items.children.length >= 8 ){
        list.style.display = 'none'
        window.alert('Your maximum tasks number is 7 tasks')
    }
    
    if (window.matchMedia("(max-width: 600px)").matches){
        list.style.width = '290px'
    }
}
