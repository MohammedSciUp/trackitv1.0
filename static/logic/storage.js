// target
const summaryShow = document.querySelector(".summaryBtn");
const cmsShow = document.querySelector(".cmsBtn");
const ivmsShow = document.querySelector(".ivmsBtn");
const settingShow = document.querySelector(".settingBtn");

//Dashboard
const DashboardActive = document.querySelector(".Dashboard");
const Dashboardbg = document.querySelector(".Dashboard");
const DashboardborderLeft = document.querySelector(".Dashboard");

//CMS
const CMSActive = document.querySelector(".CMS");
const CMSbg = document.querySelector(".CMS");
const CMSborderLeft = document.querySelector(".CMS");

//IVMS
const IVMSActive = document.querySelector(".IVMS");
const IVMSbg = document.querySelector(".IVMS");
const IVMSborderLeft = document.querySelector(".IVMS");

//Setting
const SettingActive = document.querySelector(".Setting");
const Settingbg = document.querySelector(".Setting");
const SettingborderLeft = document.querySelector(".Setting");

// Btns
const summaryBtnjs =document.querySelector("#summaryBtnhtml")
const cmsBtnjs =document.querySelector("#cmsBtnhtml")
const ivmsBtnjs =document.querySelector("#ivmsBtnhtml")
const settingBtnjs =document.querySelector("#settingBtnhtml")


//Dashboard page

summaryBtnjs.addEventListener('click', () => {
    summaryShow.style.display = 'inline';
    cmsShow.style.display = 'none';
    ivmsShow.style.display = 'none';
    settingShow.style.display = 'none'; 
     // Dashboard
    DashboardActive.style.color = 'var(--color-primary)';
    Dashboardbg.style.background = 'var(--color-light)';
    DashboardborderLeft.style.borderLeft = '5px solid var(--color-primary)';
    // CMS
    CMSActive.style.color = '';
    CMSbg.style.background = '';
    CMSborderLeft.style.borderLeft = '';
     // IVMS
    IVMSActive.style.color = '';
    IVMSbg.style.background = '';
    IVMSborderLeft.style.borderLeft = '';
    // setting
    SettingActive.style.color = '';
    Settingbg.style.background = '';
    SettingborderLeft.style.borderLeft = '';
})

//CMS page

cmsBtnjs.addEventListener('click', () => {

    summaryShow.style.display = 'none';
    cmsShow.style.display = 'inline';
    ivmsShow.style.display = 'none';
    settingShow.style.display = 'none';

    // Dashboard
    DashboardActive.style.color = '';
    Dashboardbg.style.background = '';
    DashboardborderLeft.style.borderLeft = '';
     // CMS
    CMSActive.style.color = 'var(--color-primary)';
    CMSbg.style.background = 'var(--color-light)';
    CMSborderLeft.style.borderLeft = '5px solid var(--color-primary)';
    // IVMS
    IVMSActive.style.color = '';
    IVMSbg.style.background = '';
    IVMSborderLeft.style.borderLeft = '';
    
    // setting
    SettingActive.style.color = '';
    Settingbg.style.background = '';
    SettingborderLeft.style.borderLeft = '';

    })

//IVMS page

ivmsBtnjs.addEventListener('click', () => {
    summaryShow.style.display = 'none';
    cmsShow.style.display = 'none';
    ivmsShow.style.display = 'inline';
    settingShow.style.display = 'none';

       // Dashboard
    DashboardActive.style.color = '';
    Dashboardbg.style.background = '';
    DashboardborderLeft.style.borderLeft = '';
     // CMS
    CMSActive.style.color = '';
    CMSbg.style.background = '';
    CMSborderLeft.style.borderLeft = '';
    // IVMS
    IVMSActive.style.color = 'var(--color-primary)';
    IVMSbg.style.background = 'var(--color-light)';
    IVMSborderLeft.style.borderLeft = '5px solid var(--color-primary)';
    
    // setting
    SettingActive.style.color = '';
    Settingbg.style.background = '';
    SettingborderLeft.style.borderLeft = '';

    })

//setting page

settingBtnjs.addEventListener('click', () => {
    summaryShow.style.display = 'none';
    cmsShow.style.display = 'none';
    ivmsShow.style.display = 'none';
    settingShow.style.display = 'inline';

    // Dashboard
    DashboardActive.style.color = '';
    Dashboardbg.style.background = '';
    DashboardborderLeft.style.borderLeft = '';
     // CMS
    CMSActive.style.color = '';
    CMSbg.style.background = '';
    CMSborderLeft.style.borderLeft = '';
    // IVMS
    IVMSActive.style.color = '';
    IVMSbg.style.background = '';
    IVMSborderLeft.style.borderLeft = '';
    
    // setting
    SettingActive.style.color = 'var(--color-primary)';
    Settingbg.style.background = 'var(--color-light)';
    SettingborderLeft.style.borderLeft = '5px solid var(--color-primary)';

    })

    const sideMenu = document.querySelector("aside");
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn");
    
    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block'
    })
    
    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none'
    }
    )