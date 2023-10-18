const btnTrilho = document.getElementById("trilho")
const body = document.querySelector('body')

btnTrilho.addEventListener('click', () => {
    btnTrilho.classList.toggle('dark')
    body.classList.toggle('dark')
})