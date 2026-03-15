// ========== header.js ==========
// Mobile menu toggle and header animations

// ========== stats.js ==========
// Animated counters that trigger when section is visible

(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStats);
  } else {
    initStats();
  }

  function initStats() {
    const statCards = document.querySelectorAll('.stat-card');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // Set initial hidden state
    statCards.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
    });
    
    // Force reflow
    void document.body.offsetHeight;
    
    // Staggered entrance animation
    statCards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 200 + (index * 120));
    });
    
    // Counter animation with Intersection Observer
    const observerOptions = {
      threshold: 0.4,
      rootMargin: '0px'
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const numberEl = entry.target;
          const target = parseInt(numberEl.getAttribute('data-target'), 10);
          
          // Format number with commas
          const formatNumber = (num) => {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          };
          
          // Animate counter
          let current = 0;
          const increment = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              numberEl.textContent = formatNumber(current);
              clearInterval(timer);
            } else {
              numberEl.textContent = formatNumber(current);
            }
          }, 16);
          
          // Stop observing after animation starts
          counterObserver.unobserve(numberEl);
        }
      });
    }, observerOptions);
    
    // Observe each stat number
    statNumbers.forEach(number => {
      counterObserver.observe(number);
    });
    
    // Small hover enhancement
    statCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const number = card.querySelector('.stat-number');
        if (number) {
          number.style.transform = 'scale(1.02)';
        }
      });
      
      card.addEventListener('mouseleave', () => {
        const number = card.querySelector('.stat-number');
        if (number) {
          number.style.transform = 'scale(1)';
        }
      });
    });
  }
})();
// ========== About Section Animations ==========
// Add this inside the initStats function or as a separate function call

(function initAbout() {
  const aboutContainer = document.querySelector('.about-container');
  const aboutImage = document.querySelector('.about-image-wrapper');
  const aboutContent = document.querySelector('.about-content');
  const aboutBadge = document.querySelector('.about-badge');
  const aboutTitle = document.querySelector('.about-title');
  const aboutDesc = document.querySelectorAll('.about-description');
  const aboutCredentials = document.querySelector('.about-credentials');
  const aboutCta = document.querySelector('.about-cta');
  
  if (!aboutContainer) return; // Exit if about section doesn't exist
  
  // Set initial hidden state
  const elements = [
    aboutImage, aboutBadge, aboutTitle, 
    ...aboutDesc, aboutCredentials, aboutCta
  ];
  
  elements.forEach(el => {
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
    }
  });
  
  // Force reflow
  void document.body.offsetHeight;
  
  // Staggered entrance
  setTimeout(() => {
    if (aboutImage) {
      aboutImage.style.opacity = '1';
      aboutImage.style.transform = 'translateY(0)';
    }
  }, 100);
  
  setTimeout(() => {
    if (aboutBadge) {
      aboutBadge.style.opacity = '1';
      aboutBadge.style.transform = 'translateY(0)';
    }
  }, 200);
  
  setTimeout(() => {
    if (aboutTitle) {
      aboutTitle.style.opacity = '1';
      aboutTitle.style.transform = 'translateY(0)';
    }
  }, 300);
  
  setTimeout(() => {
    aboutDesc.forEach((desc, index) => {
      if (desc) {
        desc.style.opacity = '1';
        desc.style.transform = 'translateY(0)';
      }
    });
  }, 400);
  
  setTimeout(() => {
    if (aboutCredentials) {
      aboutCredentials.style.opacity = '1';
      aboutCredentials.style.transform = 'translateY(0)';
    }
  }, 500);
  
  setTimeout(() => {
    if (aboutCta) {
      aboutCta.style.opacity = '1';
      aboutCta.style.transform = 'translateY(0)';
    }
  }, 600);
})();
// ========== Treatments Section Animations ==========
(function initTreatments() {
  const treatmentsSection = document.querySelector('.treatments-section');
  if (!treatmentsSection) return;
  
  const header = document.querySelector('.treatments-header');
  const badges = document.querySelector('.treatments-badge');
  const title = document.querySelector('.treatments-title');
  const subtitle = document.querySelector('.treatments-subtitle');
  const cards = document.querySelectorAll('.treatment-card');
  const footer = document.querySelector('.treatments-footer');
  
  // Set initial hidden state
  const elements = [badges, title, subtitle, ...cards, footer];
  
  elements.forEach(el => {
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
    }
  });
  
  // Force reflow
  void document.body.offsetHeight;
  
  // Staggered entrance
  setTimeout(() => {
    if (badges) {
      badges.style.opacity = '1';
      badges.style.transform = 'translateY(0)';
    }
  }, 100);
  
  setTimeout(() => {
    if (title) {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }
  }, 200);
  
  setTimeout(() => {
    if (subtitle) {
      subtitle.style.opacity = '1';
      subtitle.style.transform = 'translateY(0)';
    }
  }, 300);
  
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 400 + (index * 100));
  });
  
  setTimeout(() => {
    if (footer) {
      footer.style.opacity = '1';
      footer.style.transform = 'translateY(0)';
    }
  }, 1000);
})();
// ========== Features Section Animations ==========
(function initFeatures() {
  const featuresSection = document.querySelector('.features-section');
  if (!featuresSection) return;
  
  const badge = document.querySelector('.features-badge');
  const title = document.querySelector('.features-title');
  const subtitle = document.querySelector('.features-subtitle');
  const cards = document.querySelectorAll('.feature-card');
  const stats = document.querySelector('.features-stats');
  
  // Set initial hidden state
  const elements = [badge, title, subtitle, ...cards, stats];
  
  elements.forEach(el => {
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
    }
  });
  
  // Force reflow
  void document.body.offsetHeight;
  
  // Staggered entrance
  setTimeout(() => {
    if (badge) {
      badge.style.opacity = '1';
      badge.style.transform = 'translateY(0)';
    }
  }, 100);
  
  setTimeout(() => {
    if (title) {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }
  }, 200);
  
  setTimeout(() => {
    if (subtitle) {
      subtitle.style.opacity = '1';
      subtitle.style.transform = 'translateY(0)';
    }
  }, 300);
  
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 400 + (index * 150));
  });
  
  setTimeout(() => {
    if (stats) {
      stats.style.opacity = '1';
      stats.style.transform = 'translateY(0)';
    }
  }, 900);
})();
// ========== Gallery Section Animations ==========
(function initGallery() {
  const gallerySection = document.querySelector('.gallery-section');
  if (!gallerySection) return;
  
  const badge = document.querySelector('.gallery-badge');
  const title = document.querySelector('.gallery-title');
  const subtitle = document.querySelector('.gallery-subtitle');
  const baTitle = document.querySelector('.ba-title');
  const baCards = document.querySelectorAll('.ba-card');
  const clinicTitle = document.querySelector('.clinic-gallery-title');
  const clinicItems = document.querySelectorAll('.clinic-item');
  const galleryBtn = document.querySelector('.gallery-btn');
  
  // Set initial hidden state
  const elements = [badge, title, subtitle, baTitle, clinicTitle, galleryBtn];
  
  elements.forEach(el => {
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
    }
  });
  
  baCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
  });
  
  clinicItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px) scale(0.95)';
    item.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
  });
  
  // Force reflow
  void document.body.offsetHeight;
  
  // Staggered entrance
  setTimeout(() => {
    if (badge) {
      badge.style.opacity = '1';
      badge.style.transform = 'translateY(0)';
    }
  }, 100);
  
  setTimeout(() => {
    if (title) {
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
    }
  }, 200);
  
  setTimeout(() => {
    if (subtitle) {
      subtitle.style.opacity = '1';
      subtitle.style.transform = 'translateY(0)';
    }
  }, 300);
  
  setTimeout(() => {
    if (baTitle) {
      baTitle.style.opacity = '1';
      baTitle.style.transform = 'translateY(0)';
    }
  }, 400);
  
  baCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 500 + (index * 150));
  });
  
  setTimeout(() => {
    if (clinicTitle) {
      clinicTitle.style.opacity = '1';
      clinicTitle.style.transform = 'translateY(0)';
    }
  }, 800);
  
  clinicItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0) scale(1)';
    }, 900 + (index * 100));
  });
  
  setTimeout(() => {
    if (galleryBtn) {
      galleryBtn.style.opacity = '1';
      galleryBtn.style.transform = 'translateY(0)';
    }
  }, 1600);
})();
// ========== Quote, Testimonials & Contact Sections Animations ==========
(function initQuoteTestimonialsContact() {
  // Quote Section
  const quoteSection = document.querySelector('.quote-section');
  if (quoteSection) {
    const quoteContainer = document.querySelector('.quote-container');
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    
    [quoteContainer, quoteText, quoteAuthor].forEach(el => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
      }
    });
    
    void document.body.offsetHeight;
    
    setTimeout(() => {
      if (quoteContainer) {
        quoteContainer.style.opacity = '1';
        quoteContainer.style.transform = 'translateY(0)';
      }
    }, 100);
    
    setTimeout(() => {
      if (quoteText) {
        quoteText.style.opacity = '1';
        quoteText.style.transform = 'translateY(0)';
      }
    }, 200);
    
    setTimeout(() => {
      if (quoteAuthor) {
        quoteAuthor.style.opacity = '1';
        quoteAuthor.style.transform = 'translateY(0)';
      }
    }, 300);
  }
  
  // Testimonials Section
  const testimonialsSection = document.querySelector('.testimonials-section');
  if (testimonialsSection) {
    const badge = document.querySelector('.testimonials-badge');
    const title = document.querySelector('.testimonials-title');
    const subtitle = document.querySelector('.testimonials-subtitle');
    const cards = document.querySelectorAll('.testimonial-card');
    const stats = document.querySelector('.testimonials-stats');
    
    [badge, title, subtitle, stats].forEach(el => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
      }
    });
    
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px) scale(0.95)';
      card.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
    });
    
    void document.body.offsetHeight;
    
    setTimeout(() => {
      if (badge) {
        badge.style.opacity = '1';
        badge.style.transform = 'translateY(0)';
      }
    }, 400);
    
    setTimeout(() => {
      if (title) {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }
    }, 500);
    
    setTimeout(() => {
      if (subtitle) {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }
    }, 600);
    
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, 700 + (index * 150));
    });
    
    setTimeout(() => {
      if (stats) {
        stats.style.opacity = '1';
        stats.style.transform = 'translateY(0)';
      }
    }, 1200);
  }
  
  // Contact Section
  const contactSection = document.querySelector('.contact-section');
  if (contactSection) {
    const badge = document.querySelector('.contact-badge');
    const title = document.querySelector('.contact-title');
    const subtitle = document.querySelector('.contact-subtitle');
    const form = document.querySelector('.contact-form-wrapper');
    const details = document.querySelector('.contact-details-wrapper');
    const map = document.querySelector('.contact-map');
    
    [badge, title, subtitle, form, details, map].forEach(el => {
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
      }
    });
    
    void document.body.offsetHeight;
    
    setTimeout(() => {
      if (badge) {
        badge.style.opacity = '1';
        badge.style.transform = 'translateY(0)';
      }
    }, 1300);
    
    setTimeout(() => {
      if (title) {
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
      }
    }, 1400);
    
    setTimeout(() => {
      if (subtitle) {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
      }
    }, 1500);
    
    setTimeout(() => {
      if (form) {
        form.style.opacity = '1';
        form.style.transform = 'translateY(0)';
      }
    }, 1600);
    
    setTimeout(() => {
      if (details) {
        details.style.opacity = '1';
        details.style.transform = 'translateY(0)';
      }
    }, 1700);
    
    setTimeout(() => {
      if (map) {
        map.style.opacity = '1';
        map.style.transform = 'translateY(0)';
      }
    }, 1800);
  }
})();