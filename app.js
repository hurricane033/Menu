const menu = [
  {
    id: 1,
    title: "Pancakes",
    category: "breakfast",
    price: 10,
    img: "https://images.unsplash.com/photo-1497445702960-c21c96af4c68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Ice Cream",
    category: "dessert",
    price: 5,
    img: "https://images.unsplash.com/photo-1529688499411-262f191fe29e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "Donut",
    category: "lunch",
    price: 10,
    img: "https://images.unsplash.com/photo-1516919549054-e08258825f80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 4,
    title: "Froyo",
    category: "dessert",
    price: 5,
    img: "https://images.unsplash.com/photo-1641665273583-45bfc9f3d292?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
];

const sectionCenter = document.querySelector('.section-center');


window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  const categories = menu.reduce(function (values, item){
    if(values.includes(item.category)){
      values.push(item.category);
    }
    return values;
  },
  ["all"]
);


  const filterButtons = categories.map(function(category){
    return `<button class="btn" type="button" data-id=${category}>${category}</button>`
  }).join(filterButtons);
});

filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });

    if (category === "all") {
      displayMenuItems(menu);
    }

    else {
      displayMenuItems(menuCategory);
    };
  });
});




function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `<article class="menu-item">
    <img src=${item.img} alt=${item.title} class="photo">
    <div class="item-info">
        <header>
            <h4>${item.title}</h4>
            <h4 class=${item.price}>10$</h4>
        </header>
        <p class="item-text">${item.desc}</p>
    </div>
</article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};

