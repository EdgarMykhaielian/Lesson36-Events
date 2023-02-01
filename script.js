// TEXTAREA 
{

    const body = document.body
    const textarea = document.querySelector('textarea')
    const div = document.querySelector('div')

    body.addEventListener('keydown', handleKeys)

    function handleKeys(event) {
        console.log(event)
        if (event.ctrlKey && event.key === 'e') {
            event.preventDefault()
            textarea.value = div.innerText
            textarea.hidden = false
            div.hidden = true
        } else if (event.ctrlKey && event.key === 's') {
            event.preventDefault()
            div.innerText = textarea.value
            textarea.hidden = true
            div.hidden = false
        }
    }
}
// TABLE
{

const table = document.querySelector('table')
const [firstNameTh, lastNameTh, ageTh] = document.getElementsByTagName('th')
const rows = Array.from(document.querySelectorAll('tbody tr'))

ageTh.addEventListener('click', sortByAge)
firstNameTh.addEventListener('click', sortByName)
lastNameTh.addEventListener('click', sortByName)

function sortByAge() {
    rows.sort((a, b) => a.cells[2].innerText - b.cells[2].innerText)
    table.append(...rows)
}
function sortByName(event) {
    const i = event.target.cellIndex
    rows.sort((a, b) => a.cells[i].innerText.localeCompare(b.cells[i].innerText))
    table.append(...rows)
}
}
// DRAG&RESIZE
const textBlock = document.getElementsByClassName('text-block')[0]
const corner = document.getElementsByClassName('corner')[0]
let offsetX = 0 
let offsetY = 0 

corner.addEventListener('mousedown', handleDragStart)

function handleDragStart(event){
    offsetX = textBlock.getBoundingClientRect().right - event.x
    offsetY = textBlock.getBoundingClientRect().bottom - event.y
    window.addEventListener('mousemove', handleDrag)
    window.addEventListener('mouseup', handleDragStop)
}
function handleDrag(event){
    const width = event.x - textBlock.getBoundingClientRect().left + offsetX
    const height = event.y - textBlock.getBoundingClientRect().top + offsetY
    textBlock.style.width = width+'px'
    textBlock.style.height = height+'px'
    console.log(event.x, event.y)
}
function handleDragStop(){
    window.removeEventListener('mousemove', handleDrag)
    window.removeEventListener('mouseup', handleDragStop)
}