const  parraf= document.querySelectorAll('.parraf')

const sections = document.querySelectorAll('.section');

const trash = document.querySelector('#trash');

trash.addEventListener("dragover", event=> {
    event.preventDefault();
});

trash.addEventListener('drop',event=>{
    const puzzlePiece = document.querySelector('.parraf.dragging');
    puzzlePiece.remove();
})

parraf.forEach(parraf =>{
    parraf.addEventListener('dragstart',event=>{
        console.log('im draggin this parraf: ' + parraf.innerText);
        parraf.classList.add('dragging');
        event.dataTransfer.setData("id", parraf.id);
        const img_ghost = document.querySelector('.img-ghost');
        event.dataTransfer.setDragImage(img_ghost, 0, 0);
    });
    parraf.addEventListener('dragend',()=>{
        //console.log('End to drag');
        parraf.classList.remove('dragging');
    });

})

sections.forEach(section =>{
    section.addEventListener('dragover',event =>{
        event.preventDefault();
        //console.log('Draag over');
        event.dataTransfer.dropEffect='copy';//copy for defect
    });
    section.addEventListener('drop',event=>{
        console.log('Drop');
        const id_parraf=event.dataTransfer.getData("id");
        //console.log(id_parraf);
        const parraf= document.getElementById(id_parraf);
        section.appendChild(parraf);
    });
});

