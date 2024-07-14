function closeMenu () {
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')  
};


const value = document.querySelector('.dropdown__value');

value.addEventListener('click',function openMenu (evnt) {
    //console.log(evnt)
    //evnt.isClick = true
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active')     
});


const programLang = Array.from(document.querySelectorAll('.dropdown__item'));

programLang.forEach((item, index) => {
    item.onclick = () => {
        closeMenu ()
        value.textContent = programLang[index].textContent
        return false
    }
});



