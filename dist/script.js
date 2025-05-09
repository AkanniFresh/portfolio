 // Mobile navigation start here...

 let navElem = document.querySelector(".wrapper-js");
 let grabImage = document.querySelector(".fixed-img-js");

 const dropDown = () => {
   if (navElem.style.height === "50px") {
     navElem.style.height = "325px";
     grabImage.style.top = "285px";
   } else {
     navElem.style.height = "50px";
     grabImage.style.top = "15px";
   }
 };

 dropDown();


 setInterval(() => {
  if (window.innerWidth > '992') {
    navElem.style.height = "50px";
    grabImage.style.top = "15px";
   }
 }, 500);

 // Mobile navigation end here...

 


//  let borderLineOne = document.querySelector('.border-line-one');
//  let borderLineTwo = document.querySelector('.border-line-two');
//  let borderLineThree = document.querySelector('.border-line-three');
//  let borderLineFour = document.querySelector('.border-line-four');
//  let borderLineFive = document.querySelector('.border-line-five');
//  let borderLineSix = document.querySelector('.border-line-six');
//  let borderLineSeven = document.querySelector('.border-line-seven');

//  let introSection = document.getElementById('intro');
//  let servicesSection = document.getElementById('services');
//  let aboutSection = document.getElementById('about-me');
//  let skillSection = document.getElementById('my-skills');
//  let portfolioSection = document.getElementById('my-portfolio');
//  let clientSection = document.getElementById('my-clients');
//  let contactSection = document.getElementById('contact');



//  window.addEventListener('scroll', () => {
//   const getClientHeight = document.documentElement.clientHeight;
//   const introSectionY = introSection.getBoundingClientRect().y;
//   const servicesSectionY = servicesSection.getBoundingClientRect().y;
//   const aboutSectionY = aboutSection.getBoundingClientRect().y;
//   const skillSectionY = skillSection.getBoundingClientRect().y;
//   const portfolioSectionY = portfolioSection.getBoundingClientRect().y;
//   const clientSectionY = clientSection.getBoundingClientRect().y;
//   const contactSectionY = contactSection.getBoundingClientRect().y;

//   const introSectionHeight = introSection.getBoundingClientRect().height;
//   let servicesSectionHeight = servicesSection.getBoundingClientRect().height;
//   const aboutSectionHeight = aboutSection.getBoundingClientRect().height;
//   const skillSectionHeight = skillSection.getBoundingClientRect().height;
//   const portfolioSectionHeight = portfolioSection.getBoundingClientRect().height;
//   const clientSectionHeight = clientSection.getBoundingClientRect().height;
//   const contactSectionHeight = contactSection.getBoundingClientRect().height;

//   if (getClientHeight > servicesSectionY) {

//      borderLineOne.style.backgroundColor = "#e1e1e1";
//      borderLineTwo.style.backgroundColor = "green";
//      console.log("active");
  
//   } else {borderLineTwo.style.backgroundColor = "#e1e1e";}
  
// })




 const messages = [
  "Web Developer",
  "UI/UX Designer",
  "Web Designer"
 ];

 let index = 0;

  const sliderText = document.getElementById('slider-text');

  function updateText () {
    sliderText.textContent = messages[index];
    index = (index + 1) % messages.length;
  }

  setInterval(updateText, 3000);
   updateText();

   
   

   const scrollToService = () => {
    // let arrowDown = document.getElementById("arrow-down");
    // arrowDown.style.backgroundColor = 'transparent';
    window.scrollTo(0, 700);
  
   }


  //  Odometer Js start here


   const createOdometer = (el, value) => {

    const odometer = new Odometer({
      el: el,
      value: 0,
    });

    odometer.update(value);

   };


   const clientOdometer = document.querySelector(".client-odometer");
  //  createOdometer(clientOdometer, 43);
   
   const projectOdometer = document.querySelector(".project-odometer");
  //  createOdometer(projectOdometer, 55);

   const certificationOdometer = document.querySelector(".certification-odometer");
  //  createOdometer(certificationOdometer, 5);

   const experienceOdometer = document.querySelector(".experience-odometer");
  //  createOdometer(experienceOdometer, 3);

   counterSection = document.querySelector(".counter-js");

   document.addEventListener('scroll', function() {
     const clientHeight = document.documentElement.clientHeight;
     const counterSectionY = counterSection.getBoundingClientRect().y;
 
     if (clientHeight > counterSectionY) {
      createOdometer(clientOdometer, 35);
      createOdometer(projectOdometer, 66);
      createOdometer(certificationOdometer, 5);
      createOdometer(experienceOdometer, 5);
       
     }
   })
 

     //  Odometer Js end here


     //  Owl Carousel Js start here

   $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout:10000,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  });

  //  Owl Carousel Js end here



  // $(window).on("load", function(){
  //   $(".dot-preloader").fadeOut("slow");
  // });


  // Start of skill percentage js

  
  let expansionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
         entry.target.style.animation = "expansion 1s ease both";

      } else {
          entry.target.style.animation = "none";
      }
    })
  });

  const elementsToExpand = document.querySelectorAll(".expand");

  elementsToExpand.forEach(element => {
    expansionObserver.observe(element)
  });


  let uiObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
         entry.target.style.animation = "expansion-two 1s ease both";
         entry.target.style.animationDelay = "0.2s";

      } else {
          entry.target.style.animation = "none";
      }
    })
  });

  const uiToExpand = document.querySelectorAll(".expand-two");

  uiToExpand.forEach(element => {
    uiObserver.observe(element)
  });


 
  let travelObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
         entry.target.style.animation = "expansion-three 1s ease both";
         entry.target.style.animationDelay = "0.3s";

      } else {
          entry.target.style.animation = "none";
      }
    })
  });

  const travelToExpand = document.querySelectorAll(".expand-three");

  travelToExpand.forEach(element => {
    travelObserver.observe(element)
  });



  let shopifyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
         entry.target.style.animation = "expansion-four 1s ease both";
         entry.target.style.animationDelay = "0.4s";

      } else {
          entry.target.style.animation = "none";
      }
    })
  });

  const shopifyToExpand = document.querySelectorAll(".expand-four");

  shopifyToExpand.forEach(element => {
    shopifyObserver.observe(element)
  });

  // End of skill percentage js


  // let borderObserver = new IntersectionObserver(entries => {
  //   entries.forEach(entry => {
  //     if (entry.intersectionRatio > 0) {
  //       entry.target.style.animation = "border-bottom-left 2s forwards";
  //       entry.target.style.animation = "border-top-right 2s forwards";

  //     } else {
  //        entry.target.style.animation = "none";
  //     }
  //   })
  // });


  // const getBorderElement = document.querySelectorAll(".skill-border");

  // getBorderElement.forEach(element => {
  //   borderObserver.observe(element)
  // });



  //  let introSection = document.getElementById('intro');
//  let servicesSection = document.getElementById('services');
//  let aboutSection = document.getElementById('about-me');
//  let skillSection = document.getElementById('my-skills');
//  let portfolioSection = document.getElementById('my-portfolio');
//  let clientSection = document.getElementById('my-clients');
//  let contactSection = document.getElementById('contact');
// let aboutSection = document.getElementById('about-me');

// aboutSkillBorder = document.querySelector('.border-js');

//  document.addEventListener('scroll', () => {
//   const getClientHeight = document.documentElement.clientHeight;
//   const introSectionY = introSection.getBoundingClientRect().y;
//   const servicesSectionY = servicesSection.getBoundingClientRect().y;
//   const aboutSectionY = aboutSection.getBoundingClientRect().y;
//   const skillSectionY = skillSection.getBoundingClientRect().y;
//   const portfolioSectionY = portfolioSection.getBoundingClientRect().y;
//   const clientSectionY = clientSection.getBoundingClientRect().y;
//   const contactSectionY = contactSection.getBoundingClientRect().y;

//   const introSectionHeight = introSection.getBoundingClientRect().height;
//   const servicesSectionHeight = servicesSection.getBoundingClientRect().height;
//   const aboutSectionHeight = aboutSection.getBoundingClientRect().height;
//   const skillSectionHeight = skillSection.getBoundingClientRect().height;
//   const portfolioSectionHeight = portfolioSection.getBoundingClientRect().height;
//   const clientSectionHeight = clientSection.getBoundingClientRect().height;
//   const contactSectionHeight = contactSection.getBoundingClientRect().height;

//   if (getClientHeight > contactSectionY) {
//     aboutSkillBorder.style.animation = 'border-top-right 2s forwards';
    
//     console.log("how far");
//   } 
  
// })


$(document).ready(function() {
  let scrollLink = $('.scroll');

  // Smooth Scrolling

  scrollLink.click(function(e) {
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });


  //Active link switching

  $(window).scroll(function() {
    let scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function() {
      
      let sectionOffset = $(this.hash).offset().top - 20;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
  })

})


// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// let smoother = ScrollSmoother.create({
//   wrapper: "#smooth-wrapper",
//   content: "#smooth-content",
//   smooth: 2,
// })




 


  