export default ({ onSubmit }) => {
  const tmp = document.getElementById('tmpForm').content.cloneNode(true);
  const form = tmp.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = form.querySelector('#message').value;
    onSubmit(message);
  });
  return tmp;
};
