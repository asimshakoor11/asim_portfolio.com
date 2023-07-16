

// aside

    $(window).on("load", function(){
        $(".preloader").addClass("loaded");
    })

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
if (window.screen.width>1000){
    window.addEventListener('scroll', function(){
        let navhome = this.document.getElementById("navhome");
        let navabout = this.document.getElementById("navabout");
        let navservice = this.document.getElementById("navservice");
        let navportfolio = this.document.getElementById("navportfolio");
        let navcontact = this.document.getElementById("navcontact");
    
    
        if(window.pageYOffset > 0 && window.pageYOffset < 600){
            navhome.classList.add("active");
            navabout.classList.remove("active");
            navportfolio.classList.remove("active");
            navcontact.classList.remove("active");
            navservice.classList.remove("active");
        }
        else if(window.pageYOffset > 600 && window.pageYOffset < 2600){
            navhome.classList.remove("active");
            navservice.classList.remove("active");
            navportfolio.classList.remove("active");
            navcontact.classList.remove("active");
            navabout.classList.add("active");
        } 
        else if(window.pageYOffset > 2600 && window.pageYOffset < 4400){
            navhome.classList.remove("active");
            navabout.classList.remove("active");
            navportfolio.classList.remove("active");
            navcontact.classList.remove("active");
            navservice.classList.add("active");
        } 
        else if(window.pageYOffset > 4400 && window.pageYOffset < 9300){
            navabout.classList.remove("active");
            navservice.classList.remove("active");
            navhome.classList.remove("active");
            navcontact.classList.remove("active");
            navportfolio.classList.add("active");
        }   
        else if(window.pageYOffset > 9300){
            navabout.classList.remove("active");
            navservice.classList.remove("active");
            navhome.classList.remove("active");
            navcontact.classList.add("active");
            navportfolio.classList.remove("active");
        } 
    });
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

    if ((document.getElementById('name').value == "") || (document.getElementById('email').value == "") || (document.getElementById('message').value == "")) {
        alert("Kindly! First fill the required details")
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
                alert("Your Messsage Sent Successfully!")

            })
            .catch((err) => console.log(err));
    }

}



