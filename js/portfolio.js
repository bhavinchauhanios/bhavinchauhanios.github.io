const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('siteNav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');

    const selected = button.dataset.filter;
    projectCards.forEach((card) => {
      const types = card.dataset.type || '';
      const visible = selected === 'all' || types.includes(selected);
      card.classList.toggle('is-hidden', !visible);
    });
  });
});

const projectModal = document.getElementById('projectModal');
const projectModalClose = document.getElementById('projectModalClose');
const projectModalMain = document.getElementById('projectModalMain');
const projectGalleryTitle = document.getElementById('projectModalTitle');
const projectGalleryTrack = document.getElementById('projectGalleryTrack');
const projectGalleryPrev = document.getElementById('projectGalleryPrev');
const projectGalleryNext = document.getElementById('projectGalleryNext');

const projectGalleries = {
  Lystloc: [
    'images/lystloc/1.PNG', 'images/lystloc/2.PNG', 'images/lystloc/3.PNG',
    'images/lystloc/4.PNG', 'images/lystloc/5.PNG', 'images/lystloc/6.PNG',
  ],
  'Doggie The App': [
    'images/doggie/1.PNG', 'images/doggie/2.PNG', 'images/doggie/3.PNG', 'images/doggie/4.PNG',
    'images/doggie/5.PNG', 'images/doggie/6.PNG', 'images/doggie/7.PNG', 'images/doggie/8.PNG',
    'images/doggie/9.PNG', 'images/doggie/10.PNG',
  ],
  'Doggie Walker': [
    'images/doggiewalker/1.PNG', 'images/doggiewalker/2.PNG', 'images/doggiewalker/3.PNG', 'images/doggiewalker/4.PNG',
  ],
  CallCozy: [
    'images/callcozy/1.png', 'images/callcozy/2.png', 'images/callcozy/3.png',
    'images/callcozy/4.png', 'images/callcozy/5.png', 'images/callcozy/6.png',
  ],
  'Morari Bapu': [
    'images/moraribapu/1.png', 'images/moraribapu/2.png', 'images/moraribapu/3.png', 'images/moraribapu/4.png',
  ],
  Vetolution: [
    'images/vetolution/1.PNG', 'images/vetolution/2.PNG', 'images/vetolution/3.PNG',
    'images/vetolution/4.PNG', 'images/vetolution/5.PNG', 'images/vetolution/6.PNG',
    'images/vetolution/7.PNG', 'images/vetolution/8.PNG', 'images/vetolution/9.PNG',
  ],
  'GIF Collage': [
    'images/gifcollage/1.png', 'images/gifcollage/2.png', 'images/gifcollage/3.png',
    'images/gifcollage/4.png', 'images/gifcollage/5.png',
  ],
  'Photo Collage': [
    'images/photocollage/1.png', 'images/photocollage/2.png', 'images/photocollage/3.png',
    'images/photocollage/4.png', 'images/photocollage/5.png',
  ],
  'Hawala Today': [
    'images/hawalatoday/1.png', 'images/hawalatoday/2.png', 'images/hawalatoday/3.png',
    'images/hawalatoday/4.png', 'images/hawalatoday/5.png', 'images/hawalatoday/6.png',
  ],
  JustYap: [
    'images/justyap/1.png', 'images/justyap/2.png', 'images/justyap/3.png',
    'images/justyap/4.png', 'images/justyap/5.png',
  ],
  Movir: ['images/movir/1.png', 'images/movir/2.png', 'images/movir/3.png', 'images/movir/4.png'],
  OpenRoost: [
    'images/openroost/1.png', 'images/openroost/2.png', 'images/openroost/3.png', 'images/openroost/4.png',
    'images/openroost/5.png', 'images/openroost/6.png', 'images/openroost/7.png',
  ],
  'Panic SOS Button': [
    'images/panicsos/1.png', 'images/panicsos/2.png', 'images/panicsos/3.png', 'images/panicsos/4.png',
  ],
  'La Hielera': [
    'images/lahielera/1.png', 'images/lahielera/2.png', 'images/lahielera/3.png', 'images/lahielera/4.png',
  ],
  Thoughty: [
    'images/thoughty/1.png', 'images/thoughty/2.png', 'images/thoughty/3.png',
    'images/thoughty/4.png', 'images/thoughty/5.png',
  ],
  DressPlus: [
    'images/dressplus/1.png', 'images/dressplus/2.png', 'images/dressplus/3.png',
    'images/dressplus/4.png', 'images/dressplus/5.png',
  ],
  'Hawala Wallet (iMac)': [
    'images/hawalatoday/imac_1.png', 'images/hawalatoday/imac_2.png', 'images/hawalatoday/imac_3.png',
  ],
  'Focus MRS': [
    'images/focus_mrs/1.png', 'images/focus_mrs/2.png', 'images/focus_mrs/3.png',
    'images/focus_mrs/4.png', 'images/focus_mrs/5.png', 'images/focus_mrs/6.png',
  ],
};

if (projectModal && projectModalMain && projectGalleryTrack && projectGalleryTitle) {
  let currentImages = [];
  let currentTitle = '';
  let currentIndex = 0;

  const setActiveImage = (index) => {
    if (!currentImages.length) {
      return;
    }

    currentIndex = (index + currentImages.length) % currentImages.length;
    const src = currentImages[currentIndex];
    projectModalMain.src = src;
    projectModalMain.alt = `${currentTitle} screenshot ${currentIndex + 1}`;
    projectModalMain.classList.toggle('wide', currentTitle.includes('iMac') || src.includes('imac_'));

    const thumbs = projectGalleryTrack.querySelectorAll('.project-gallery-shot');
    thumbs.forEach((thumb, thumbIndex) => {
      thumb.classList.toggle('is-active', thumbIndex === currentIndex);
    });
  };

  const openProjectModal = (title, images) => {
    currentTitle = title;
    currentImages = images;
    currentIndex = 0;

    projectGalleryTitle.textContent = `${title} Screens`;
    projectGalleryTrack.innerHTML = '';

    images.forEach((src, index) => {
      const shot = document.createElement('img');
      shot.className = 'project-gallery-shot';
      if (title.includes('iMac') || src.includes('imac_')) {
        shot.classList.add('wide');
      }
      shot.src = src;
      shot.alt = `${title} screenshot ${index + 1}`;
      shot.addEventListener('click', () => setActiveImage(index));
      projectGalleryTrack.appendChild(shot);
    });

    setActiveImage(0);
    projectModal.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    projectModal.hidden = true;
    document.body.style.overflow = '';
  };

  projectCards.forEach((card) => {
    card.addEventListener('click', () => {
      const titleEl = card.querySelector('h3');
      const preview = card.querySelector('.preview');
      if (!titleEl) {
        return;
      }
      const title = titleEl.textContent.trim();
      const galleryImages = projectGalleries[title] || (preview ? [preview.getAttribute('src')] : []);
      openProjectModal(title, galleryImages);
    });
  });

  if (projectGalleryPrev && projectGalleryNext) {
    projectGalleryPrev.addEventListener('click', () => {
      setActiveImage(currentIndex - 1);
    });
    projectGalleryNext.addEventListener('click', () => {
      setActiveImage(currentIndex + 1);
    });
  }

  if (projectModalClose) {
    projectModalClose.addEventListener('click', closeProjectModal);
  }

  projectModal.addEventListener('click', (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.dataset.closeModal === 'true') {
      closeProjectModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (projectModal.hidden) {
      return;
    }
    if (event.key === 'Escape') {
      closeProjectModal();
    }
    if (event.key === 'ArrowLeft') {
      setActiveImage(currentIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      setActiveImage(currentIndex + 1);
    }
  });
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));

const year = document.getElementById('currentYear');
if (year) {
  year.textContent = new Date().getFullYear();
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
  const messageBox = contactForm.querySelector('.form-message');

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (messageBox) {
      messageBox.textContent = 'Sending...';
      messageBox.classList.remove('is-success', 'is-error');
    }

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
      });

      const raw = await response.text();
      let data = null;

      try {
        data = JSON.parse(raw);
      } catch (parseError) {
        data = {
          type: 'danger',
          message: `Server returned an invalid response (status ${response.status}).`,
        };
      }

      const success = response.ok && data && data.type === 'success';

      if (messageBox) {
        messageBox.textContent = (data && data.message) || (success ? 'Message sent.' : 'Unable to send message.');
        messageBox.classList.add(success ? 'is-success' : 'is-error');
      }

      if (success) {
        contactForm.reset();
      }
    } catch (error) {
      if (messageBox) {
        messageBox.textContent = 'Network error. Please try again.';
        messageBox.classList.add('is-error');
      }
    }
  });
}
