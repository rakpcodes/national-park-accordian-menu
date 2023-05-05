/* 

Store variables for all DOM Manipulation elements
- All park header for click event
- All Park arrow button for click event if user is using keyboard only
- Park text to toggle accordian animation
- Arrow for rotating animation
- Expand and collapse button


Add click event on headers to toggle collapse class and rotate arrow

Add click event on expand and collapse button while checking to see which menus are already expanded, change text in button when all menus are expanded

*/


const parkHeadingAll = document.querySelectorAll(".park-heading"),
    parkHeading = document.querySelector(".park-heading"),
    parkTextAll = document.querySelectorAll(".park-text"),
    parkBtn = document.querySelector(".park-heading-btn"),
    arrowIcon = document.querySelector(".park-heading-btn-icon"),
    arrowIconAll = document.querySelectorAll(".park-heading-btn-icon"),
    expandBtn = document.querySelector(".btn-expand")


parkHeadingAll.forEach(heading => {
    heading.addEventListener('click', toggleText)
})

function toggleText() {

    // Targets text section within each park
    const parkText = this.nextElementSibling
    const parkTextHeight = parkText.scrollHeight

    // Targets arrow within each header 
    const arrow = this.firstChild.nextSibling.nextSibling.nextSibling.firstChild

    parkText.classList.toggle('active')

    // Logic to rotate arrow whenever text is expanded and collapsed
    if (parkText.classList.contains('active')) {
        arrow.classList.add('rotate-up')
        arrow.classList.remove('rotate-down')
        parkText.style.maxHeight = `${parkTextHeight}px`
        console.dir(parkText)

    } else {
        arrow.classList.remove('rotate-up')
        arrow.classList.add('rotate-down')
        parkText.style.maxHeight = 0
        console.dir(parkText)
    }

}

expandBtn.addEventListener('click', expandAll)

function expandAll() {

    parkTextAll.forEach(text => {
        const textHeight = text.scrollHeight
        if (!text.classList.contains('active')) {
            text.classList.add('active')
            text.style.maxHeight = `${textHeight}px`
            expandBtn.innerText = 'Collapse All'
            arrowIconAll.forEach(arrow => {
                arrow.classList.add('rotate-up')
                arrow.classList.remove('rotate-down')
            })

        } else if (text.classList.contains('active')) {
            text.classList.remove('active')
            text.style.maxHeight = 0
            expandBtn.innerText = 'Expand All'
            arrowIconAll.forEach(arrow => {
                arrow.classList.add('rotate-down')
                arrow.classList.remove('rotate-up')
            })
        }
    })
}