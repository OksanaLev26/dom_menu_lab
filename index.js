let showingSubMenu = false;
const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

mainEl.className = 'flex-ctr';

const topMenuEl = document.getElementById('top-menu');

topMenuEl.style.height = "100%";

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.className = 'flex-around';

let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

  menuLinks.forEach((el) => {
    const a = document.createElement('a');
    a.href = el.href;
    a.textContent = el.text;
    topMenuEl.appendChild(a);
  });

  let subMenuEl = document.getElementById('sub-menu');
  subMenuEl.style.height = '100%';
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
  subMenuEl.className = 'flex-around';
  subMenuEl.style.position = 'absolute';
  subMenuEl.style.top = 0;

  const topMenuLinks = document.querySelectorAll('a');

  const buildSubMenu = (arr) => {
    subMenuEl.innerHTML = "";
    arr.forEach((el) => {
      const a = document.createElement('a');
      a.href = el.href;
      a.textContent = el.text;
      subMenuEl.appendChild(a);
    });
  }

  const handleTopMemuElClick = (e) => {
    e.preventDefault();
   if (!e.target.href) {
    return;
   };
    console.log(e.target);

    topMenuLinks.forEach((el) => {
      if (el.textContent !== e.target.textContent) {
        el.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = 0;
      }
    }) 
   
    const currentLink = menuLinks.find((el) => el.text === e.target.textContent);

    if (!currentLink.subLinks) {
      mainEl.textContent = e.target.textContent;
      showingSubMenu = false;
    } else {
      showingSubMenu = true;
    }
    
    e.target.className = 'active';
      
    if (showingSubMenu) {
      buildSubMenu(currentLink.subLinks, subMenuEl);
      subMenuEl.style.top = '100%';
    } else {
      subMenuEl.style.top = 0;
    }
  }

  topMenuEl.addEventListener('click', handleTopMemuElClick);

  const handlesubMenuElClick = (e) => {
    e.preventDefault();
    if (!e.target.href) {
      return;
     };
    showingSubMenu = false;
    subMenuEl.style.top = 0;

    topMenuLinks.forEach((el) => el.classList.remove('active'));
    mainEl.textContent = e.target.textContent;
  }

  subMenuEl.addEventListener('click', handlesubMenuElClick);

  
