interface Props {}
function toggleFunction (props:Props) {
    // let toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement
    let skills = document.getElementById('Skills') as HTMLElement
    
        if (skills?.style.display === 'none'){
            skills.style.display = 'block'
        } else {
            skills.style.display = 'none'
        }

}
