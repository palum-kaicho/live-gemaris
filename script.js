document.addEventListener('DOMContentLoaded', () => {
  // 1. ハンバーガーメニュー開閉
  const hamburger = document.getElementById('js-hamburger');
  const navMenu = document.getElementById('js-nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active');
      navMenu.classList.toggle('is-active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('is-active');
      });
    });
  }

  // 2. スクロールふわっとフェードインアニメーション (Intersection Observer)
  const fadeInElements = document.querySelectorAll('.js-fade-in');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target); // 一度表示されたら監視解除
      }
    });
  }, observerOptions);

  fadeInElements.forEach(el => observer.observe(el));

  // 3. 背景のキラキラ生成アニメーション
  const sparkleContainer = document.getElementById('js-sparkles');
  if (sparkleContainer) {
    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      
      const size = Math.random() * 8 + 4; // 4px 〜 12px
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `${Math.random() * 100}vw`;
      sparkle.style.top = `${Math.random() * 100}vh`;
      sparkle.style.animationDuration = `${Math.random() * 2 + 2}s`; // 2s 〜 4s

      sparkleContainer.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 4000);
    };

    // 一定間隔でキラキラを降らせる
    setInterval(createSparkle, 350);
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const targets = document.querySelectorAll('.js-slide-left');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // 一度表示されたら監視をやめる場合は下のコメントを外す
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15 // 画面に15%見えたら発火
  });

  targets.forEach(target => {
    observer.observe(target);
  });
});