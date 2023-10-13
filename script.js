const container = document.createElement('div');
container.style.width = "100%";
container.style.backgroundColor = 'slate grey'
document.body.append(container);
const boardHeading = document.createElement('h1')
boardHeading.textContent = "CHESS BOARD"
boardHeading.style.textAlign = "center"
container.appendChild(boardHeading)

for(var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){

        var div = document.createElement('div');
        if(i % 2 !== 0){
            if(j % 2 !== 0){
                div.style.width = '12.5%';
                div.style.float = 'left';
                div.style.paddingBottom = '12.5%'
                div.style.background = 'grey';
                container.append(div);
            } else {
                div.style.width = '12.5%';
                div.style.float = 'left';
                div.style.paddingBottom = '12.5%'
                div.style.background = 'brown';
                container.append(div);
            }
        } else {
            if(j === 0 || j % 2 === 0){
                div.style.width = '12.5%';
                div.style.float = 'left';
                div.style.paddingBottom = '12.5%'
                div.style.background = 'grey';              
                container.append(div);
            } else {
                div.style.width = '12.5%';
                div.style.float = 'left';
                div.style.paddingBottom = '12.5%'
                div.style.background = 'brown';            
                container.append(div);
            }
        }
    }
}

