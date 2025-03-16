import {refs} from "./refs";

refs.listBtnToggleShowDescr.forEach((elem, index) =>
  elem.setAttribute('data-id', index)
);
refs.listBtnToggleShowDescr.forEach((elem, index) =>
  elem.addEventListener('click', () => toggleClassOnItemVacancy(index))
);

function toggleClassOnItemVacancy(index_elem) {

    const btns =  Array.from(refs.listBtnToggleShowDescr);
    btns.forEach((elem, index)=>{
        if(index === index_elem){
            
            elem.innerHTML = ` <svg class="icon_minus_btn_view_job" width="14" height="14" viewBox="0 0 38 32">
                                        <path fill="#04a427" style="fill: var(--color1, #04a427)"
                                            d="M3.788 18.077c-0.647 0-1.196-0.126-1.649-0.378-0.388-0.294-0.582-0.652-0.582-1.072v-2.397c0-0.421 0.194-0.757 0.582-1.009 0.453-0.294 1.002-0.442 1.649-0.442h29.097c0.647 0 1.164 0.147 1.552 0.442 0.453 0.252 0.679 0.589 0.679 1.009v2.397c0 0.421-0.226 0.778-0.679 1.072-0.388 0.252-0.905 0.378-1.552 0.378h-29.097z">
                                        </path>
                                    </svg>`
        } else{
            elem.innerHTML = `<svg class="icon_plus_btn_view_job " width="14" height="14" viewBox="0 0 32 32">
                                        <path  fill="currentColor"
                                            d="M3.205 17.758c-0.547 0-1.012-0.107-1.395-0.32-0.328-0.249-0.492-0.552-0.492-0.907v-2.028c0-0.356 0.164-0.64 0.492-0.854 0.383-0.249 0.848-0.374 1.395-0.374h24.62c0.547 0 0.985 0.125 1.313 0.374 0.383 0.213 0.575 0.498 0.575 0.854v2.028c0 0.356-0.192 0.658-0.575 0.907-0.328 0.213-0.766 0.32-1.313 0.32h-24.62z">
                                        </path>
                                        <path fill="currentColor"
                                            d="M17.758 27.824c0 0.547-0.107 1.012-0.32 1.395-0.249 0.328-0.552 0.492-0.907 0.492h-2.028c-0.356 0-0.64-0.164-0.854-0.492-0.249-0.383-0.374-0.848-0.374-1.395v-24.62c0-0.547 0.125-0.985 0.374-1.313 0.213-0.383 0.498-0.574 0.854-0.574h2.028c0.356 0 0.658 0.192 0.907 0.574 0.213 0.328 0.32 0.766 0.32 1.313v24.62z">
                                        </path>
                                    </svg>`

        }
    })


  const iconPlusArray = Array.from(refs.iconPlusBlockVacancy);
  iconPlusArray.forEach((elem, index) => {
    if (index === index_elem) {
    //   elem.classList.toggle('is-scale');
    //   elem.innerHTML = 'asdfadsfadsfdsf'
    } else {
    //   elem.classList.remove('is-scale');
    }
  });

//   const iconMinusArray = Array.from(refs.iconMinusBlockVacancy);
//   iconMinusArray.forEach((elem, index) => {
//     if (index === index_elem) {
//       elem.classList.toggle('is-show');
//     } else {
//       elem.classList.remove('is-show');
//     }
//   });

  const itemslistJobVacancyArray = Array.from(refs.itemslistJobVacancy);
  itemslistJobVacancyArray.forEach((elem, index) => {
    if (index === index_elem) {
      elem.classList.toggle('active_item_list_job_vacancy');
    } else {
      elem.classList.remove('active_item_list_job_vacancy');
    }
  });

  const itemsVacancyDescrArray = Array.from(refs.itemsVacancyDescr);
  itemsVacancyDescrArray.forEach((elem, index) => {
    if (index === index_elem) {
      elem.classList.toggle('show_vacancy_descr_wrapper');
    } else {
      elem.classList.remove('show_vacancy_descr_wrapper');
    }
  });
}
