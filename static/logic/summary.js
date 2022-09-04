// target
const summaryShow = document.querySelector(".summaryBtn");
const cmsShow = document.querySelector(".cmsBtn");
const ivmsShow = document.querySelector(".ivms");
const settingShow = document.querySelector(".setting");
// Btns
const summaryBtnjs =document.querySelector("#summaryBtnhtml")
const cmsBtnjs =document.querySelector("#cmsBtnhtml")
const ivmsBtnjs =document.querySelector("#ivmsBtnhtml")
const settingBtnjs =document.querySelector("#settingBtnhtml")

summaryBtnjs.addEventListener('click', () => {
    summaryShow.style.display = 'inline';
    cmsShow.style.display = 'none';
    ivmsShow.style.display = 'none';
    settingShow.style.display = 'none'
    })

cmsBtnjs.addEventListener('click', () => {
    summaryShow.style.display = 'none';
    cmsShow.style.display = 'inline';
    ivmsShow.style.display = 'none';
    settingShow.style.display = 'none'
    })

ivmsBtnjs.addEventListener('click', () => {
    summaryShow.style.display = 'none';
    cmsShow.style.display = 'none';
    ivmsShow.style.display = 'inline';
    settingShow.style.display = 'none'
    })

settingBtnjs.addEventListener('click', () => {
    summaryShow.style.display = 'none';
    cmsShow.style.display = 'none';
    ivmsShow.style.display = 'none';
    settingShow.style.display = 'inline'
    })

