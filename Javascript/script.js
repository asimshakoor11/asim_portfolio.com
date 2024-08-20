

// typing animation 
var typed = new Typed(".typing", {
    strings: ["", "MERN Stack Developer", "Fron-End Developer", "React Js Developer", "Web Designer"],
    typeSpeed: 90,
    backSpeed: 40,
    loop: true
})

// theme switcher


const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    if (document.getElementById("themesvg").classList.contains("fa-moon")) {
        localStorage.theme = 'light'
    } else {
        localStorage.theme = 'dark'
    }
})

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add("dark");
    dayNight.querySelector("i").classList.add("fa-sun");
    dayNight.querySelector("i").classList.remove("fa-moon");
} else {
    document.body.classList.remove("dark");
    dayNight.querySelector("i").classList.remove("fa-sun");
    dayNight.querySelector("i").classList.add("fa-moon");
}
// window.addEventListener("load", ()=>{
//     if(document.body.classList.contains("dark")){
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else{
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// })

// theme switcher



// aside

// $(window).on("load", function(){
//     $(".preloader").addClass("loaded"); 
// })


// toast 

const notifications = document.querySelector(".notifications"),
    buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer: 5000,
    invalidemail: {
        icon: 'fa-circle-info',
        text: 'Alert! Invalid email address!',
    },
    details: {
        icon: 'fa-circle-info',
        text: 'Kindly! Fill the required details',
    },
    sended: {
        icon: 'fa-circle-info',
        text: 'Your Email Sent Successfully!',
    },
    cvdownlaod: {
        icon: 'fa-circle-info',
        text: 'CV is downloading..!',
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

const createToast = (id) => {
    // Getting the icon and text for the toast based on the id passed
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}


function codeAddress() {
    createToast("welcome");
    setTimeout(() => createToast("info"), 1500);
}


// toast end 
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;


for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
        removebacksection();
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                addbacksection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}



function removebacksection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addbacksection(num) {
    allSection[num].classList.add("back-section");

}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const traget = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + traget).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const traget = element.getAttribute("href").split("#")[1];
        if (traget === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    showSection(this);
    updateNav(this);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}


//scrolling 

// / Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {

    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ) {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
        }
    });
}

function togglearea() {
    let arrdown = document.getElementById("arrdown");
    let arrup = document.getElementById("arrup");
    let displayrow = document.getElementById("display_row");

    arrdown.classList.toggle('hidden');
    arrup.classList.toggle('hidden');
    displayrow.classList.toggle('hidden');
}

function togglearea2() {
    let arrdown = document.getElementById("arrdown2");
    let arrup = document.getElementById("arrup2");
    let displayrow2 = document.getElementById("display_row2");

    arrdown.classList.toggle('hidden');
    arrup.classList.toggle('hidden');
    displayrow2.classList.toggle('hidden');
}

function togglearea3() {
    let arrdown = document.getElementById("arrdown3");
    let arrup = document.getElementById("arrup3");
    let displayrow3 = document.getElementById("display_row3");

    arrdown.classList.toggle('hidden');
    arrup.classList.toggle('hidden');
    displayrow3.classList.toggle('hidden');
}


/* Back to top button
   */
// let backtotop = select('.back-to-top')
// if (backtotop) {

$(".back-to-top").click(function () {

    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
    }
    window.addEventListener('load', toggleBacktotop)
    // onscroll(document, toggleBacktotop)
})

// ******sending email 

function sendMail() {
    let validRegex = /^([a-zA-Z])([\w-.]*)@([\w]+)([\w-.])*\.(aero|asia|be|biz|com.ar|ca|co|co.in|co.jp|co.kr|co.sg|com|com.ar|com.mx|com.sg|com.ph|co.uk|coop|de|edu|es|fr|gov|in|info|it|jobs|ltd|mil|mobi|museum|name|net|net.mx|org|ru|us)+$/;

    if ((document.getElementById('name').value == "") || (document.getElementById('email').value == "") || (document.getElementById('message').value == "")) {
        // alert("Kindly! Fill the required details")
        createToast("details");

    }

    else if (!document.getElementById('email').value.match(validRegex)) {
        createToast("invalidemail");
        // alert("Alert! Invalid email address!");
        document.getElementById('email').focus();
    }

    else {
        var params = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        const servieID = "service_3myjm7y";
        const templateID = "template_b0wznsl";

        emailjs
            .send(servieID, templateID, params)
            .then((res) => {
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('subject').value = "";
                document.getElementById('message').value = "";
                console.log(res);
                // alert("Your Messsage Sent Successfully!")
                createToast("sended");


            })
            .catch((err) => console.log(err));
    }
}

// let downloadcv = document.getElementById("downloadcv");
// downloadcv.addEventListener("click", ()=>{
//     console.log("clicked")
// })

function downlaodcv() {
    createToast("cvdownlaod");
}

let index = 0;
const totalWorkItems = $(".work-item").length;
let widthhh;
let newHeight;
let adjustedHeight;

$(document).ready(function () {

    // set lightbox img max height 
    const wHeight = $(window).height();
    newHeight = wHeight * 0.25; // 50% of wHeight
    adjustedHeight = wHeight - newHeight; // 50% less than wHeight
    $(".lightbox-img").css("max-height", adjustedHeight + "px");
    //lightbox
    $(".btn-detailss").click(function () {
        // index = ($(this).parent(".work-item").index());
        index = ($(this).parent().parent().parent().parent().parent().index());
        $(".lightbox").addClass("open")
        // Disable scroll on body
        $("body").css("overflow", "hidden");
        lightboxSlideShow();
    })

    $(".lightbox .prev").click(function () {
        if (index == 0) {
            index = totalWorkItems - 1;
        }
        else {
            index--;
        }
        lightboxSlideShow();
    })

    $(".lightbox .next").click(function () {
        if (index == totalWorkItems - 1) {
            index = 0;
        }
        else {
            index++;
        }
        lightboxSlideShow();
    })

    $(".lightbox-close").click(function () {
        $("body").css("overflow", "auto");
        $(".lightbox").removeClass("open");
    })

    $(".lightbox").click(function (event) {
        if ($(event.target).hasClass("lightbox")) {
            $("body").css("overflow", "auto");

            $(this).removeClass("open");
        }
    })
})

function lightboxSlideShow() {
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();
    const des = $(".work-item").eq(index).find("p").html();
    const link = $(".work-item").eq(index).find("a").attr("href");

    $(".lightbox-img").attr("src", imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-des").html(des);
    $(".lightbox-link").attr("href", link);
    $(".lightbox-counter").html((index + 1) + "/" + totalWorkItems);
    widthhh = $(".lightbox-img").width()
    $(".lightbox-des").css("max-width", widthhh + "px");
    console.log(widthhh)
}





