

// aside

$(window).on("load", function(){
    $(".preloader").addClass("loaded");
})


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
    sended:{
        icon: 'fa-circle-info',
        text: 'Your Email Sent Successfully!',
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
    let displayrow = document.getElementById("display_row2");

    arrdown.classList.toggle('hidden');
    arrup.classList.toggle('hidden');
    displayrow.classList.toggle('hidden');
}


/* Back to top button
   */
let backtotop = select('.back-to-top')
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}

// ******sending email 

// var btn = document.getElementById('btnlast');
// btn.addEventListener('click', function(e){
// e.preventDefault()
// var name = document.getElementById('Name').value;
// var email = document.getElementById('Email').value;
// var subject = document.getElementById('Subject').value;
// var message = document.getElementById('Message').value;
// var body = 'Name: ' +name + '<br/> Email: ' +email + '<br/> Subject: ' +subject + '<br/> Message: ' +message  


// function sendmail() {
//         Email.send({
//             Host : "smtp.elasticemail.com",
//             Username : "asimshakoor920830@gmail.com",
//             Password : "110B1A590D9E27E712E6725469D33DF903F6",
//             To : "asimshakoor920830@gmail.com",
//             From : document.getElementById("email").value,
//             Subject : document.getElementById("subject").value,
//             Body : document.getElementById("message").value
//         }).then(
//           message => alert("Thanks! Mail Sent Successfully")
//         );
// }

// // })

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
            .catch((err) =>  console.log(err));
    }
}




