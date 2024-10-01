function toggleFunction(props) {
    var toggleButton = document.getElementById('toggle-skills');
    var skills = document.getElementById('Skills');
    if ((skills === null || skills === void 0 ? void 0 : skills.style.display) === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
}
