import { refs } from './refs';

refs.formFooter.addEventListener('submit', checkFormFooter);

function checkFormFooter(event) {
  event.preventDefault();
  const form = event.target;
  const formElements = event.target.elements;
  const name = formElements.name.value;
  const email = formElements.email.value;
  const phone = formElements.phoneNumber.value;
  const agreePrivacyPolicy = formElements.confirm_policy_footer.value;
  if (
    name === '' ||
    email === '' ||
    phone === '' ||
    agreePrivacyPolicy === ''
  ) {
    return alert('Будь ласка, заповніть всі поля форми');
  }
  form.reset();
  refs.secondaryBackdrop.classList.toggle('is-hidden');
  refs.postModalForm.classList.toggle('is-hidden');
  document.body.classList.toggle('not-scroll');
}
