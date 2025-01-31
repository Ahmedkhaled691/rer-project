// Initialize AOS
AOS.init({
  duration: 800,
  once: true
});
var loader= document.getElementById('loader');
window.addEventListener("load" , function(){
  loader.style.display = "none" 
})

//language
$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= 20) {
      $(".navbar").addClass("compressed");
      $(".nav-logo").addClass("log-comp")
    } else {
      $(".navbar").removeClass("compressed"),1000;
      $(".nav-logo").removeClass("log-comp"),1000;
    }
  });
});





// Utility function to check if element exists
const elementExists = (selector) => document.querySelector(selector) !== null;

// Home page specific initializations
const initHomeCarousels = () => {
  if (elementExists('.hero-carousel')) {
    $('.hero-carousel').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      animateOut: 'fadeOut'
    });
  }

  if (elementExists('.project-carousel')) {
    $('.project-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  }
};

// Projects page specific initializations
const initProjectFilters = () => {
  if (elementExists('.filter-buttons')) {
    $('.filter-buttons button').on('click', function() {
      const filter = $(this).data('filter');
      
      $('.filter-buttons button').removeClass('active');
      $(this).addClass('active');
      
      if (filter === 'all') {
        $('[data-category]').parent().show();
      } else {
        $('[data-category]').parent().hide();
        $(`[data-category="${filter}"]`).parent().show();
      }
    });
  }
};

// Contact form handling
const initContactForm = () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        message: $('#message').val()
      };

      // Here you would typically send the data to your server
      console.log('Form submitted:', formData);
      
      // Show success message
      alert('Thank you for your message. We will get back to you soon!');
      
      // Reset form
      this.reset();
    });
  }
};

// Project details page specific initializations
const initProjectDetails = () => {
  if (window.location.pathname.includes('project-details.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (projectId) {
      const projectDetails = getProjectDetails(projectId);
      displayProjectDetails(projectDetails);
    }
  }
};

// Initialize features based on current page
$(document).ready(function() {
  // Common initializations for all pages
  
  // Page specific initializations
  initHomeCarousels();
  initProjectFilters();
  initContactForm();
  initProjectDetails();
});

// Project details helper functions
function getProjectDetails(id) {
  const projects = {
    '1': {
      title: 'Luxury Apartments',
      category: 'Residential',
      location: 'Downtown Area',
      completion: '2023',
      description: 'Modern residential complex featuring premium amenities and sustainable design.',
      features: [
        'Smart home technology',
        'Sustainable materials',
        'Energy-efficient systems',
        'Premium finishes'
      ],
      images: [
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600',
        'https://via.placeholder.com/800x600'
      ]
    }
    // Add more projects as needed
  };
  
  return projects[id];
}

function displayProjectDetails(project) {
  if (!project) {
    $('#project-content').html('<h2>Project not found</h2>');
    return;
  }

  const content = `
    <div class="project-details-content">
      <h2 class="mb-4">${project.title}</h2>
      
      <div class="project-gallery mb-4">
        <div class="owl-carousel">
          ${project.images.map(img => `
            <div class="item">
              <img src="${img}" alt="Project Image" class="img-fluid">
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="row">
        <div class="col-md-8">
          <h3>About the Project</h3>
          <p>${project.description}</p>
          
          <h4 class="mt-4">Key Features</h4>
          <ul>
            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
        </div>
        
        <div class="col-md-4">
          <div class="project-meta">
            <h4>Project Details</h4>
            <ul class="list-unstyled">
              <li><strong>Category:</strong> ${project.category}</li>
              <li><strong>Location:</strong> ${project.location}</li>
              <li><strong>Completion:</strong> ${project.completion}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  $('#project-content').html(content);

  // Initialize carousel for project gallery
  $('.project-gallery .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true
  });
}


let owl = jQuery('#owl-carousel-gallery-demo');
owl.on('initialized.owl.carousel', function (event) {
    const container = document.querySelector('.owl-stage');
    window.lightGallery(container, {
        thumbnail: false,
        pager: false,
        plugins: [
            lgZoom,
            lgAutoplay,
            lgFullscreen,
            lgRotate,
            lgShare,
            lgThumbnail,
        ],
        hash: false,
        preload: 1,
        selector: '.owl-carousel-item',
        
    });
});
owl.owlCarousel({
    center: true,
    items: 1,
    margin: 20,
});