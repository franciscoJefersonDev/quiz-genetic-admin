const api_connection = 'https://quiz-generic.herokuapp.com'

const confirm = document.querySelector('.confirm')

confirm.addEventListener('click', event => {
  const question = document.querySelector('.question')
  const a = document.querySelector('.item-a')
  const b = document.querySelector('.item-b')
  const c = document.querySelector('.item-c')
  const d = document.querySelector('.item-d')
  const correct_item = document.querySelector('.correct-item')
  if(question.value.trim() === '' || a.value.trim() === '' || b.value.trim() === '' || c.value.trim() === '' || d.value.trim() === '' || correct_item.value.trim() === '') {
    return
  }
  confirm.classList.add('loading')
  confirm.setAttribute('disabled', 'true')
  axios.post(`${api_connection}/new-question`, {
    question: question.value.trim(),
    a: a.value.trim(),
    b: b.value.trim(),
    c: c.value.trim(),
    d: d.value.trim(),
    correct: correct_item.value.trim()
  })
  .then((response) => {
    alert('Questão cadastrada!')
    confirm.classList.remove('loading')
    confirm.disabled = false
  })
  .catch((error) => {
    alert('Questão não cadastrada!')
    confirm.classList.remove('loading')
    confirm.disabled = false
  })
})