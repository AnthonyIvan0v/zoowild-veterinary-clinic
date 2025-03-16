!function(){"use strict";var e={953:function(e,o,t){t.d(o,{D:function(){return c}});const c={toTopBtn:document.querySelector(".btn-to-top"),backdrop:document.querySelector(".backdrop"),itemslistJobVacancy:document.querySelectorAll("[data-item-list-job-vacancy]"),listBtnToggleShowDescr:document.querySelectorAll("[data-show-descr]"),itemsVacancyDescr:document.querySelectorAll("[data-vacancy-descr]"),iconMinusBlockVacancy:document.querySelectorAll(".icon_minus_btn_view_job"),iconPlusBlockVacancy:document.querySelectorAll(".icon_plus_btn_view_job"),listBtnExpand:document.querySelectorAll("[data-btn-expand]"),itemList:document.querySelectorAll(".item_list_job_vacancy"),iconPlusBlockQuestion:document.querySelectorAll(".icon_plus_btn_expand"),iconMinusBlockQuestion:document.querySelectorAll(".icon_minus_btn_expand"),textAnswer:document.querySelectorAll(".text_answer_question"),toggleBtnShowDetailsMedicalCard:document.querySelectorAll("[data-btn-show-medical-card]"),medicalCard:document.querySelectorAll("[data-medical-card]"),detailsMedicalCard:document.querySelectorAll("[data-details-medical-card]"),textDescrDetailsMedicalCard:document.querySelectorAll("[data-text-descr-details]"),toggleBtnShowTextDescrDetailsMedicalCard:document.querySelectorAll("[data-show-text]"),openBlockInfoCeoBtn:document.querySelector("[data-open-block-info-ceo]"),blockInfoCEO:document.querySelector("[data-block-info-ceo]"),iconPlus:document.querySelector(".icon-plus"),iconMinus:document.querySelector(".icon-minus"),modalFormVacancy:document.querySelector("[data-modal-form-vacancy]"),inputFile:document.querySelector("[data-file]"),textFile:document.querySelector("[data-text-file]"),btnDeleteFile:document.querySelector("[data-delete-file]"),btnCloseModalFormVacancy:document.querySelector("[data-close-modal-form-vacancy]"),btnClosePostModalFormVacancy:document.querySelector("[data-close-modal-post-form-vacancy]"),blockFile:document.querySelector("[data-block-file]"),buttonsOpenFormVacancy:document.querySelectorAll("[data-open-form-vacancy]"),formVacancy:document.querySelector("[data-form-vacancy]"),postModalFormVacancy:document.querySelector("[data-modal-post-form-vacancy]"),openLocationBlockBtn:document.querySelector("[data-open-location-block]"),closeLocationBlockBtn:document.querySelector("[data-close-location-block]"),locationBlock:document.querySelector("[data-location-block]"),openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),modal:document.querySelector("[data-modal]"),links:document.querySelectorAll("[data-link-mobile-menu]"),openModalContactsBtn:document.querySelector("[data-open-modal-contacts]"),closeModalContactsBtn:document.querySelector("[data-close-modal-contacts]"),modalContacts:document.querySelector("[data-modal-contacts]"),formFooter:document.querySelector("[data-form-footer]"),postModalForm:document.querySelector("[data-modal-post-form]"),secondaryBackdrop:document.querySelector(".backdrop_secondary"),openModalFormBTN:document.querySelectorAll("[data-open-modal-form]"),closeModalFormBTN:document.querySelector("[data-close-modal-form]"),closePostModalFormBTN:document.querySelector("[data-close-post-modal-form]"),modalForm:document.querySelector("[data-modal-form]"),form:document.querySelector("[data-form]"),linkBack:document.querySelector(".link_back"),openFotoLicenses:document.querySelectorAll("[data-open-foto-licenses]"),closeFotoLicensesBTN:document.querySelector("[data-close-licenses]"),modalLicenses:document.querySelector("[data-modal-foto-licenses]"),thumbFotoLicenses:document.querySelector("[data-thumb-foto]"),imgModalLicenses:document.querySelector("[data-img-modal-lisenses]"),openMapBTN:document.querySelectorAll("[data-open-map]"),closeMapBTN:document.querySelector("[data-close-map]"),modalmap:document.querySelector("[data-modal-map]"),map:document.querySelector("[data-map]"),openVideoBTN:document.querySelectorAll("[data-open-video]"),closeVideoBTN:document.querySelector("[data-close-video]"),modalVideo:document.querySelector("[data-modal-video]"),video:document.querySelector("[data-video]"),openSocialListBtn:document.querySelector("[data-social-list-clinic-open]"),closeSocialListBtn:document.querySelector("[data-social-list-clinic-close]"),socialList:document.querySelector("[data-social-list-clinic]"),toggleLangBtn:document.querySelectorAll("[data-toggle-lang]"),swithcer:document.querySelectorAll(".switch_lang"),spanUA:document.querySelectorAll(".lang_ua"),spanRU:document.querySelectorAll(".lang_ru"),itemsScrolltoSectionAbout:document.querySelectorAll("[data-sroll-to-about]"),sectionAbout:document.querySelector("[data-section_about]"),itemsScrollToSectionContacts:document.querySelectorAll("[data-scroll-contacts]"),sectionContacts:document.querySelector("[data-section-contacts]"),itemScrollToSectionPriceCourse:document.querySelector("[data-scroll-price]"),cardsCostCourse:document.querySelector("[data-cards-cost]")}}},o={};function t(c){var a=o[c];if(void 0!==a)return a.exports;var l=o[c]={exports:{}};return e[c](l,l.exports,t),l.exports}t.d=function(e,o){for(var c in o)t.o(o,c)&&!t.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:o[c]})},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)};var c=t(953);c.D.listBtnToggleShowDescr.forEach(((e,o)=>e.setAttribute("data-id",o))),c.D.listBtnToggleShowDescr.forEach(((e,o)=>e.addEventListener("click",(()=>{return e=o,Array.from(c.D.listBtnToggleShowDescr).forEach(((o,t)=>{o.innerHTML=t===e?' <svg class="icon_minus_btn_view_job" width="14" height="14" viewBox="0 0 38 32">\n                                        <path fill="#04a427" style="fill: var(--color1, #04a427)"\n                                            d="M3.788 18.077c-0.647 0-1.196-0.126-1.649-0.378-0.388-0.294-0.582-0.652-0.582-1.072v-2.397c0-0.421 0.194-0.757 0.582-1.009 0.453-0.294 1.002-0.442 1.649-0.442h29.097c0.647 0 1.164 0.147 1.552 0.442 0.453 0.252 0.679 0.589 0.679 1.009v2.397c0 0.421-0.226 0.778-0.679 1.072-0.388 0.252-0.905 0.378-1.552 0.378h-29.097z">\n                                        </path>\n                                    </svg>':'<svg class="icon_plus_btn_view_job " width="14" height="14" viewBox="0 0 32 32">\n                                        <path  fill="currentColor"\n                                            d="M3.205 17.758c-0.547 0-1.012-0.107-1.395-0.32-0.328-0.249-0.492-0.552-0.492-0.907v-2.028c0-0.356 0.164-0.64 0.492-0.854 0.383-0.249 0.848-0.374 1.395-0.374h24.62c0.547 0 0.985 0.125 1.313 0.374 0.383 0.213 0.575 0.498 0.575 0.854v2.028c0 0.356-0.192 0.658-0.575 0.907-0.328 0.213-0.766 0.32-1.313 0.32h-24.62z">\n                                        </path>\n                                        <path fill="currentColor"\n                                            d="M17.758 27.824c0 0.547-0.107 1.012-0.32 1.395-0.249 0.328-0.552 0.492-0.907 0.492h-2.028c-0.356 0-0.64-0.164-0.854-0.492-0.249-0.383-0.374-0.848-0.374-1.395v-24.62c0-0.547 0.125-0.985 0.374-1.313 0.213-0.383 0.498-0.574 0.854-0.574h2.028c0.356 0 0.658 0.192 0.907 0.574 0.213 0.328 0.32 0.766 0.32 1.313v24.62z">\n                                        </path>\n                                    </svg>'})),Array.from(c.D.iconPlusBlockVacancy).forEach(((e,o)=>{})),Array.from(c.D.itemslistJobVacancy).forEach(((o,t)=>{t===e?o.classList.toggle("active_item_list_job_vacancy"):o.classList.remove("active_item_list_job_vacancy")})),void Array.from(c.D.itemsVacancyDescr).forEach(((o,t)=>{t===e?o.classList.toggle("show_vacancy_descr_wrapper"):o.classList.remove("show_vacancy_descr_wrapper")}));var e}))))}();