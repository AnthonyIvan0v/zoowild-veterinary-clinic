!function(){"use strict";var e={953:function(e,o,t){t.d(o,{D:function(){return c}});const c={toTopBtn:document.querySelector(".btn-to-top"),backdrop:document.querySelector(".backdrop"),itemslistJobVacancy:document.querySelectorAll("[data-item-list-job-vacancy]"),listBtnToggleShowDescr:document.querySelectorAll("[data-show-descr]"),itemsVacancyDescr:document.querySelectorAll("[data-vacancy-descr]"),iconMinusBlockVacancy:document.querySelectorAll(".icon_minus_btn_view_job"),iconPlusBlockVacancy:document.querySelectorAll(".icon_plus_btn_view_job"),listBtnExpand:document.querySelectorAll("[data-btn-expand]"),itemList:document.querySelectorAll(".item_list_job_vacancy"),iconPlusBlockQuestion:document.querySelectorAll(".icon_plus_btn_expand"),iconMinusBlockQuestion:document.querySelectorAll(".icon_minus_btn_expand"),textAnswer:document.querySelectorAll(".text_answer_question"),toggleBtnShowDetailsMedicalCard:document.querySelectorAll("[data-btn-show-medical-card]"),medicalCard:document.querySelectorAll("[data-medical-card]"),detailsMedicalCard:document.querySelectorAll("[data-details-medical-card]"),textDescrDetailsMedicalCard:document.querySelectorAll("[data-text-descr-details]"),toggleBtnShowTextDescrDetailsMedicalCard:document.querySelectorAll("[data-show-text]"),openBlockInfoCeoBtn:document.querySelector("[data-open-block-info-ceo]"),blockInfoCEO:document.querySelector("[data-block-info-ceo]"),iconPlus:document.querySelector(".icon-plus"),iconMinus:document.querySelector(".icon-minus"),modalFormVacancy:document.querySelector("[data-modal-form-vacancy]"),inputFile:document.querySelector("[data-file]"),textFile:document.querySelector("[data-text-file]"),btnDeleteFile:document.querySelector("[data-delete-file]"),btnCloseModalFormVacancy:document.querySelector("[data-close-modal-form-vacancy]"),btnClosePostModalFormVacancy:document.querySelector("[data-close-modal-post-form-vacancy]"),blockFile:document.querySelector("[data-block-file]"),buttonsOpenFormVacancy:document.querySelectorAll("[data-open-form-vacancy]"),formVacancy:document.querySelector("[data-form-vacancy]"),postModalFormVacancy:document.querySelector("[data-modal-post-form-vacancy]"),openLocationBlockBtn:document.querySelector("[data-open-location-block]"),closeLocationBlockBtn:document.querySelector("[data-close-location-block]"),locationBlock:document.querySelector("[data-location-block]"),openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),modal:document.querySelector("[data-modal]"),links:document.querySelectorAll("[data-link-mobile-menu]"),openModalContactsBtn:document.querySelector("[data-open-modal-contacts]"),closeModalContactsBtn:document.querySelector("[data-close-modal-contacts]"),modalContacts:document.querySelector("[data-modal-contacts]"),formFooter:document.querySelector("[data-form-footer]"),postModalForm:document.querySelector("[data-modal-post-form]"),secondaryBackdrop:document.querySelector(".backdrop_secondary"),openModalFormBTN:document.querySelectorAll("[data-open-modal-form]"),closeModalFormBTN:document.querySelector("[data-close-modal-form]"),closePostModalFormBTN:document.querySelector("[data-close-post-modal-form]"),modalForm:document.querySelector("[data-modal-form]"),form:document.querySelector("[data-form]"),linkBack:document.querySelector(".link_back"),openFotoLicenses:document.querySelectorAll("[data-open-foto-licenses]"),closeFotoLicensesBTN:document.querySelector("[data-close-licenses]"),modalLicenses:document.querySelector("[data-modal-foto-licenses]"),thumbFotoLicenses:document.querySelector("[data-thumb-foto]"),imgModalLicenses:document.querySelector("[data-img-modal-lisenses]"),openMapBTN:document.querySelectorAll("[data-open-map]"),closeMapBTN:document.querySelector("[data-close-map]"),modalmap:document.querySelector("[data-modal-map]"),map:document.querySelector("[data-map]"),openVideoBTN:document.querySelectorAll("[data-open-video]"),closeVideoBTN:document.querySelector("[data-close-video]"),modalVideo:document.querySelector("[data-modal-video]"),video:document.querySelector("[data-video]"),openSocialListBtn:document.querySelector("[data-social-list-clinic-open]"),closeSocialListBtn:document.querySelector("[data-social-list-clinic-close]"),socialList:document.querySelector("[data-social-list-clinic]"),toggleLangBtn:document.querySelectorAll("[data-toggle-lang]"),swithcer:document.querySelectorAll(".switch_lang"),spanUA:document.querySelectorAll(".lang_ua"),spanRU:document.querySelectorAll(".lang_ru"),itemsScrolltoSectionAbout:document.querySelectorAll("[data-sroll-to-about]"),sectionAbout:document.querySelector("[data-section_about]"),itemsScrollToSectionContacts:document.querySelectorAll("[data-scroll-contacts]"),sectionContacts:document.querySelector("[data-section-contacts]"),itemScrollToSectionPriceCourse:document.querySelector("[data-scroll-price]"),cardsCostCourse:document.querySelector("[data-cards-cost]")}}},o={};function t(c){var l=o[c];if(void 0!==l)return l.exports;var a=o[c]={exports:{}};return e[c](a,a.exports,t),a.exports}t.d=function(e,o){for(var c in o)t.o(o,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:o[c]})},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)};var c=t(953);function l(e){if(e.currentTarget.getAttribute("src")){const o=e.currentTarget.getAttribute("src");c.D.imgModalLicenses.src=o}c.D.modalLicenses.classList.toggle("is-hidden"),c.D.backdrop.classList.toggle("is-hidden"),document.body.classList.toggle("not-scroll")}c.D.closeFotoLicensesBTN.addEventListener("click",l),c.D.openFotoLicenses.forEach((e=>{e.addEventListener("click",l)}))}();