const model = document.getElementById('model');
document.getElementById('info').onclick = () => model.classList.add('active');
document.getElementById('closeButton').onclick = () => model.classList.remove('active');