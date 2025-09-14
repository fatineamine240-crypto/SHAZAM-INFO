// ==========================
// SHAZAM BOT Website Animations
// ==========================

document.addEventListener('DOMContentLoaded', () => {

  // 1️⃣ Fade-in animation عند تحميل الصفحة
  const container = document.querySelector('.container');
  container.style.opacity = 0;
  container.style.transition = 'opacity 1.5s ease-in-out';
  setTimeout(() => {
    container.style.opacity = 1;
  }, 100);

  // 2️⃣ Scroll animations
  const sections = document.querySelectorAll('section, header, footer');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
  });

  // 3️⃣ تأثير زر واتساب عند hover (scale + glow)
  const whatsappBtn = document.querySelector('.whatsapp-btn');
  whatsappBtn.addEventListener('mouseover', () => {
    whatsappBtn.style.boxShadow = '0 0 25px #25D366, 0 0 50px #25D366';
  });
  whatsappBtn.addEventListener('mouseout', () => {
    whatsappBtn.style.boxShadow = '0 0 15px #25D366';
  });

  // 4️⃣ تأثير بارق ⚡ عند hover على أي عنوان
  const titles = document.querySelectorAll('h1, h2');
  titles.forEach(title => {
    title.addEventListener('mouseenter', () => {
      title.style.textShadow = '0 0 10px #facc15, 0 0 20px #facc15';
    });
    title.addEventListener('mouseleave', () => {
      title.style.textShadow = 'none';
    });
  });

  // 5️⃣ Random lightning spark animation في الخلفية (اختياري)
  const body = document.body;
  setInterval(() => {
    const spark = document.createElement('div');
    spark.style.position = 'fixed';
    spark.style.width = `${Math.random()*3 + 2}px`;
    spark.style.height = `${Math.random()*15 + 5}px`;
    spark.style.background = '#facc15';
    spark.style.top = `${Math.random()*100}%`;
    spark.style.left = `${Math.random()*100}%`;
    spark.style.opacity = '0.8';
    spark.style.zIndex = '0';
    spark.style.pointerEvents = 'none';
    spark.style.borderRadius = '50%';
    body.appendChild(spark);
    setTimeout(() => spark.remove(), 500);
  }, 400); // كل 0.4 ثانية بارق عشوائي
});
