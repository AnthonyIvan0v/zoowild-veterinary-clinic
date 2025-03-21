export const refs = {
  toTopBtn: document.querySelector('.btn-to-top'),
  backdrop: document.querySelector('.backdrop'),
  // блок вакансій
  itemslistJobVacancy: document.querySelectorAll(
    '[data-item-list-job-vacancy]'
  ),
  listBtnToggleShowDescr: document.querySelectorAll('[data-show-descr]'),
  itemsVacancyDescr: document.querySelectorAll('[data-vacancy-descr]'),
  iconMinusBlockVacancy: document.querySelectorAll('.icon_minus_btn_view_job'),
  iconPlusBlockVacancy: document.querySelectorAll('.icon_plus_btn_view_job'),
  // блок запитаннь
  listBtnExpand: document.querySelectorAll('[data-btn-expand]'),
  itemList: document.querySelectorAll('.item_list_job_vacancy'),
  iconPlusBlockQuestion: document.querySelectorAll('.icon_plus_btn_expand'),
  iconMinusBlockQuestion: document.querySelectorAll('.icon_minus_btn_expand'),
  textAnswer: document.querySelectorAll('.text_answer_question'),
  // картки медичних послуг
  toggleBtnShowDetailsMedicalCard: document.querySelectorAll(
    '[data-btn-show-medical-card]'
  ),
  medicalCard: document.querySelectorAll('[data-medical-card]'),
  detailsMedicalCard: document.querySelectorAll('[data-details-medical-card]'),
  textDescrDetailsMedicalCard: document.querySelectorAll(
    '[data-text-descr-details]'
  ),
  toggleBtnShowTextDescrDetailsMedicalCard:
    document.querySelectorAll('[data-show-text]'),
  // блок інфо сео 1-й слайд
  openBlockInfoCeoBtn: document.querySelector('[data-open-block-info-ceo]'),
  blockInfoCEO: document.querySelector('[data-block-info-ceo]'),
  iconPlus: document.querySelector('.icon-plus'),
  iconMinus: document.querySelector('.icon-minus'),
  // форма відгуку на вакансію
  modalFormVacancy: document.querySelector('[data-modal-form-vacancy]'),
  inputFile: document.querySelector('[data-file]'),
  textFile: document.querySelector('[data-text-file]'),
  btnDeleteFile: document.querySelector('[data-delete-file]'),
  btnCloseModalFormVacancy: document.querySelector(
    '[data-close-modal-form-vacancy]'
  ),
  btnClosePostModalFormVacancy: document.querySelector(
    '[data-close-modal-post-form-vacancy]'
  ),
  blockFile: document.querySelector('[data-block-file]'),
  buttonsOpenFormVacancy: document.querySelectorAll('[data-open-form-vacancy]'),
  formVacancy: document.querySelector('[data-form-vacancy]'),
  postModalFormVacancy: document.querySelector(
    '[data-modal-post-form-vacancy]'
  ),
  // модалка з локаціями
  openLocationBlockBtn: document.querySelector('[data-open-location-block]'),
  closeLocationBlockBtn: document.querySelector('[data-close-location-block]'),
  locationBlock: document.querySelector('[data-location-block]'),
  // мобілне меню
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  menu: document.querySelector('[data-menu]'),
  modal: document.querySelector('[data-modal]'),
  links: document.querySelectorAll('[data-link-mobile-menu]'),
  // модалка з конатактами
  openModalContactsBtn: document.querySelector('[data-open-modal-contacts]'),
  closeModalContactsBtn: document.querySelector('[data-close-modal-contacts]'),
  modalContacts: document.querySelector('[data-modal-contacts]'),
  // модалка післі заповнення форми в футері
  formFooter: document.querySelector('[data-form-footer]'),
  postModalForm: document.querySelector('[data-modal-post-form]'),
  secondaryBackdrop: document.querySelector('.backdrop_secondary'),
  // основна модалка з формою
  openModalFormBTN: document.querySelectorAll('[data-open-modal-form]'),
  closeModalFormBTN: document.querySelector('[data-close-modal-form]'),
  closePostModalFormBTN: document.querySelector('[data-close-post-modal-form]'),
  modalForm: document.querySelector('[data-modal-form]'),
  form: document.querySelector('[data-form]'),
  linkBack: document.querySelector('.link_back'),
  // модалка сертифікатів
  openFotoLicenses: document.querySelectorAll('[data-open-foto-licenses]'),
  closeFotoLicensesBTN: document.querySelector('[data-close-licenses]'),
  modalLicenses: document.querySelector('[data-modal-foto-licenses]'),
  thumbFotoLicenses: document.querySelector('[data-thumb-foto]'),
  imgModalLicenses: document.querySelector('[data-img-modal-lisenses]'),
  // модалка локацій
  openMapBTN: document.querySelectorAll('[data-open-map]'),
  closeMapBTN: document.querySelector('[data-close-map]'),
  modalmap: document.querySelector('[data-modal-map]'),
  map: document.querySelector('[data-map]'),
  // модалка з відео
  openVideoBTN: document.querySelectorAll('[data-open-video]'),
  closeVideoBTN: document.querySelector('[data-close-video]'),
  modalVideo: document.querySelector('[data-modal-video]'),
  video: document.querySelector('[data-video]'),
  // соціалки
  openSocialListBtn: document.querySelector('[data-social-list-clinic-open]'),
  closeSocialListBtn: document.querySelector('[data-social-list-clinic-close]'),
  socialList: document.querySelector('[data-social-list-clinic]'),
  //toggleLang
  toggleLangBtn: document.querySelectorAll('[data-toggle-lang]'),
  swithcer: document.querySelectorAll('.switch_lang'),
  spanUA: document.querySelectorAll('.lang_ua'),
  spanRU: document.querySelectorAll('.lang_ru'),
  // scroll
  itemsScrolltoSectionAbout: document.querySelectorAll('[data-sroll-to-about]'),
  sectionAbout: document.querySelector('[data-section_about]'),
  itemsScrollToSectionContacts: document.querySelectorAll(
    '[data-scroll-contacts]'
  ),
  sectionContacts: document.querySelector('[data-section-contacts]'),
  itemScrollToSectionPriceCourse : document.querySelector('[data-scroll-price]'),
  cardsCostCourse: document.querySelector('[data-cards-cost]')
};
