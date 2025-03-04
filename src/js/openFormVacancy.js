import { refs } from './refs';

refs.buttonsOpenFormVacancy.forEach((elem) =>
  elem.addEventListener('click', toggleModalFormVacancy)
);

refs.btnCloseModalFormVacancy.addEventListener('click', toggleModalFormVacancy);

refs.inputFile.addEventListener('change', addFileName);

refs.btnDeleteFile.addEventListener('click', deleteFile);

refs.formVacancy.addEventListener('submit', checkFormVacancy);

refs.btnClosePostModalFormVacancy.addEventListener(
  'click',
  togglePostModalFormVacancy
);

function deleteFile() {
  refs.textFile.textContent = '';
  refs.blockFile.classList.add('visually-hidden');
}

function addFileName(event) {
  const arrayPathFile = event.target.value.split('\\');
  const indexItemNameFile = arrayPathFile.length - 1;
  const fileName = arrayPathFile[indexItemNameFile];
  refs.textFile.textContent = fileName;
  refs.blockFile.classList.remove('visually-hidden');
}

function checkFormVacancy(event) {
  event.preventDefault();
  const form = event.target;
  const formElements = event.target.elements;
  const name = formElements.name.value;
  const email = formElements.email.value;
  const phone = formElements.phoneNumber.value;
  const agreePrivacyPolicy = formElements.confirm_policy_form_vacancy.value;
  const vacancy = formElements.vacancy.value;
  if (
    name === '' ||
    email === '' ||
    phone === '' ||
    agreePrivacyPolicy === '' ||
    vacancy === ''
  ) {
    return alert('Будь ласка, заповніть всі поля форми');
  }
  refs.modalFormVacancy.classList.toggle('is-hidden');
  refs.postModalFormVacancy.classList.toggle('is-hidden');
  form.reset();
}

function toggleModalFormVacancy() {
  refs.backdrop.classList.toggle('is-hidden');
  refs.modalFormVacancy.classList.toggle('is-hidden');
  document.body.classList.toggle('not-scroll');
}

function togglePostModalFormVacancy() {
  refs.backdrop.classList.toggle('is-hidden');
  refs.postModalFormVacancy.classList.toggle('is-hidden');
  document.body.classList.toggle('not-scroll');
}
