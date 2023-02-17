
// aside 

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
})

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

// sending email 

// var btn = document.getElementById('btnlast');
// btn.addEventListener('click', function(e){
// e.preventDefault()
// var name = document.getElementById('Name').value;
// var email = document.getElementById('Email').value;
// var subject = document.getElementById('Subject').value;
// var message = document.getElementById('Message').value;
// var body = 'Name: ' +name + '<br/> Email: ' +email + '<br/> Subject: ' +subject + '<br/> Message: ' +message  


function sendmail() {
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "asimshakoor920830@gmail.com",
            Password : "110B1A590D9E27E712E6725469D33DF903F6",
            To : "asimshakoor920830@gmail.com",
            From : document.getElementById("email").value,
            Subject : document.getElementById("subject").value,
            Body : document.getElementById("message").value
        }).then(
          message => alert("Thanks! Mail Sent Successfully")
        );
}

// })
