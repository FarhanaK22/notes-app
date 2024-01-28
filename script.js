
const addBtn= document.querySelector('#add-note')
const main= document.querySelector("#main")
const saveNote= ()=>{
    const notes = document.querySelectorAll(".note textarea")
    console.log(notes)
    const data=[]
    notes.forEach(
        (note) => {
            data.push(note.value)}
    )
    console.log(data)
    if(data.length===0){
        localStorage.removeItem("notes")
    }else{
        localStorage.setItem("notes",JSON.stringify(data)) 
    }
   
}

addBtn.addEventListener("click",function(){
      Addnote()
})



const Addnote =(text="")=>
{
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML=` <div class="tool">
    <i class=" save fa-regular fa-floppy-disk"></i>
    <i class=" trash fa-solid fa-trash"></i>
</div>
<textarea>${text}</textarea>
    `
    note.querySelector(".trash").addEventListener("click",
    function(){
        note.remove()
        saveNote()
    })
    note.querySelector(".save").addEventListener("click",
    function(){
        saveNote()
    })
    note.querySelector("textarea").addEventListener(
        "focusout",function(){
            saveNote()
        }
    )
    main.appendChild(note)
    saveNote()
}
(
    function(){
        const lsnotes=JSON.parse(localStorage.getItem("notes"))
        if(lsnotes===null){
            Addnote()
        }else{
            lsnotes.forEach(
                (lsnote)=>{
                    Addnote(lsnote)
                }
            )
        }
    }
)()