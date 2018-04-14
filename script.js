function testSubmit(event) {
  event.preventDefault();

  const inputTypes = [
    'input',
    'text',
    'textarea',
    'select'
  ];
  const inputs = Array.from(
    event.target.querySelectorAll(inputTypes.join(', '))
  );
  const values = [];

  inputs.forEach((input) => {
    switch (input.type) {
      case 'checkbox':
      case 'radio':
        values.push(input.checked);
        break;
      default:
        values.push(input.value);
        break;
    }
  })

  console.log(values);
}

Array.from(document.querySelectorAll('form')).forEach((form) => {
  form.addEventListener('submit', testSubmit);
});
