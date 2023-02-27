// Top menu

document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);

function dropDownFunc(dropDown) {

    if(dropDown.classList.contains('click-dropdown') === true){

        dropDown.addEventListener('click', function (e) {
            e.preventDefault();        
            
            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
              
              this.lastElementChild.classList.remove('arrow');
              this.nextElementSibling.classList.remove('dropdown-active');
              
            } else {
               
                closeDropdown();
                this.lastElementChild.classList.add('arrow');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }
    

};

addEventListener('click', function (e) {

    if (e.target.closest('.dropdown-toggle') === null) {
      
        closeDropdown();

    }
});

function closeDropdown() { 

      document.querySelectorAll('a').forEach(function (container) { 
      container.classList.remove('arrow')
  });

    document.querySelectorAll('.dropdown-menu').forEach(function (menu) { 
        menu.classList.remove('dropdown-active');
    });
}

// Modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".button-call");
const closeModalBtn = document.querySelector(".btn-close");

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  
  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  
    document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
  
    const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };
  
  openModalBtn.addEventListener("click", openModal);

  // Select

  var x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;

  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
  
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
    
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
   
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {

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


document.addEventListener("click", closeAllSelect);