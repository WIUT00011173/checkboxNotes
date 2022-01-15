const body = document.body
const input = document.querySelector("input")
const addBtn = document.querySelector("#addBtn")
const noteArea = document.querySelector(".notesArea")
const donetasks = document.querySelector(".doneLists")
let doneLists = []
let index = 0

function addNote() {
    if(document.querySelector(".errMsg")) return
    if(input.value.trim() == "") {
        const errMsg = document.createElement("p")
        errMsg.classList.add("errMsg")
        errMsg.innerText = "No data Entered" 
        errMsg.style.color = "red"
        noteArea.appendChild(errMsg)
        return

    }
    const notes = document.createElement("div")
    notes.id = `note-${index}`
    noteArea.appendChild(notes)
    const task = document.createElement("li")
    task.id = `task-${index}`
    task.innerText = input.value
    notes.appendChild(task)
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    notes.appendChild(checkbox)
    checkbox.id = `checkbox-${index}`
    
    checkbox.addEventListener("click", function() {
        let checked = document.getElementById(checkbox.id)
        const del = document.getElementById(task.id)
        if(checked.checked) {
            const dones = document.createElement("p")
            dones.innerText = del.innerText
            donetasks.appendChild(dones)
            del.style = "text-decoration: line-through; color: red"
        }
        else {
            donetasks.removeChild(document.querySelector("p"))
            del.style = "text-decoration: initial"
        }
    })
    input.value = ""
    index++
}

addBtn.addEventListener("click", function() {
    addNote()
})

input.addEventListener("keypress", function(event) {
    const errorMsg = document.querySelector(".errMsg")
    if(errorMsg) {
        noteArea.removeChild(errorMsg)
    }
    if(event.key === "Enter") addNote()
})
