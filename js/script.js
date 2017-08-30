var countSave = 1

// Add new task
function addTask() {
    var newTask = document.createElement("form")
    var newCheck = document.createElement("input")
    var newText = document.createElement("input")
    var newButton = document.createElement("button")

    var count = countData()

    newTask.setAttribute("class", "task")
    newCheck.setAttribute("type", "checkbox")
    newCheck.setAttribute("class", "round")
    newText.setAttribute("type", "text")
    newText.setAttribute("class", "text-input")
    newText.setAttribute("id", `text${count}`)
    newText.setAttribute("onchange", "saveData()")
    newText.setAttribute("placeholder", "Start typing...")
    newButton.setAttribute("class", "remove-button")
    newButton.setAttribute("onclick", "removeTask()")
    newButton.innerHTML = "-"

    newTask.appendChild(newCheck)
    newTask.appendChild(newText)
    newTask.appendChild(newButton)

    document.getElementById("element").appendChild(newTask)
}

// Remove task
function removeTask() {
    var nodeF = document.getElementById("element")
    var nodeC = document.getElementById("task-element")
    nodeF.removeChild(nodeC)
}

// Add new localStorage
function saveData() {
    localStorage.setItem(`text${countSave}`, document.getElementById(`text${countSave}`).value)
}

// Count
function countData() {
    var count = document.getElementById("count").innerHTML
    count++
    countSave++
    document.getElementById("count").innerHTML = count
    return count
}
