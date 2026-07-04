/* Shared behaviour: theme, mobile nav, scroll reveal, door intro */
(function () {
  'use strict';

  /* ---------- theme ---------- */
  const root = document.documentElement;
  const stored = localStorage.getItem('aff-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(mode) {
    root.setAttribute('data-theme', mode);
  }
  applyTheme(stored || (prefersDark.matches ? 'dark' : 'light'));

  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('aff-theme')) applyTheme(e.matches ? 'dark' : 'light');
  });

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.theme-toggle');
    if (!btn) return;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('aff-theme', next);
  });

  /* ---------- mobile nav ---------- */
  const burger = document.querySelector('.nav-burger');
  const nav = document.querySelector('.site-nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      if (!nav.classList.contains('is-open')) return;
      if (e.target.closest('.site-nav') || e.target.closest('.nav-burger')) return;
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -6% 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-in'));
  }

  /* ---------- door intro (index only) ---------- */
  const door = document.getElementById('door');
  if (door) {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = sessionStorage.getItem('aff-door-opened');

    function removeDoor() {
      door.hidden = true;
      document.body.style.removeProperty('overflow');
    }

    function openDoor() {
      if (door.classList.contains('is-open')) return;
      door.classList.add('is-open', 'is-gone');
      sessionStorage.setItem('aff-door-opened', '1');
      document.body.style.removeProperty('overflow');
      window.setTimeout(removeDoor, reduceMotion ? 350 : 1650);
    }

    if (seen) {
      removeDoor();
    } else {
      document.body.style.overflow = 'hidden';
      door.addEventListener('click', openDoor);
      document.addEventListener('keydown', function onKey(e) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
          openDoor();
          document.removeEventListener('keydown', onKey);
        }
      });
    }
  }

  /* ---------- footer year ---------- */
  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
