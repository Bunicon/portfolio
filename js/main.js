const nav = document.getElementById("nav")


// topButton 함수
window.onscroll = function() {
  const topButton = document.getElementById("topButton");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};
  // scrollToTop 함수
  function scrollToTop() {  
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }


  // 스크롤 시 내비게이션 컨테이너가 생기는 이벤트
window.addEventListener("scroll", function(){
  nav.classList.toggle("nav_fixed",window.scrollY > 0);
})


const marker=document.querySelector(".marker");

//nav의 marker의 길이와 위치를 설정하는 함수
function setMarker(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

const sections = document.querySelectorAll("section");
const menus = document.querySelectorAll(".header__nav > ul > li");

//스크롤 위치에 따라 해당하는 menu의 색깔과 마커가 달라짐
window.addEventListener("scroll",()=>{
    //현재 영역의 id값
    let current=""

    sections.forEach(section=>{
        //각 section의 top 위치(절대적 위치)
        const sectionTop = window.scrollY + section.getBoundingClientRect().top;

        //누적된 스크롤이 section의 top위치에 도달했거나 section의 안에 위치할 경우
        if(window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

      
        menus.forEach(menu=>{
            menu.classList.remove("nav__menu--focused");
            const href = menu.querySelector('a').getAttribute("href").substring(1);
            if(href === current) {
                //현재 있는 영역의 id와 메뉴의 링크주소가 일치할때
                menu.classList.add("nav__menu--focused");
                setMarker(menu);
            }
        })
      })
})

// 햄버거 메뉴 이벤트
let clickBox = document.querySelector('.check-menu');
let menuBar= document.querySelectorAll('.menu-bar');
let animateClass = ['last-bar', 'middle-bar', 'top-bar'];
clickBox.addEventListener("click", function() {
  for(let i=0; i<menuBar.length; i++) {
      menuBar[i].classList.toggle(animateClass[i]);
    }
})


//햄버거 메뉴 클릭 시 navbar 펼치기
const toggleBtn = document.getElementById('check-menu');
const menubg = document.querySelector('.header__nav');

toggleBtn.addEventListener('change', () => {
  if (toggleBtn.checked) {
    menubg.classList.add('active');
  } else {
    menubg.classList.remove('active');
  }
});