const mainEl = document.querySelector('main');
console.log(mainEl);

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.className = 'flex-ctr';

const topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl);

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.className = 'flex-around';

let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  menuLinks.forEach((el) => {
    const a = document.createElement('a');
    a.href = el.href;
    a.textContent = el.text;
    topMenuEl.appendChild(a);
  });