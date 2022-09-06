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

// ----------------------------------------------------------------------------------------------------------------
   
// DatePicker

$('input[name="date"]').daterangepicker();

// ----------------------------------------------------------------------------------------------------------------

// selection dropdown


var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);