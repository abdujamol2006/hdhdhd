let arr1 = [
  {
    imgSrc:
      "https://i.pinimg.com/originals/33/63/9e/33639e9dcc51fb188e0674b5f9559582.png",
    name: "iPhone 15",
    price: 1800,
    color: "gold",
  },
  {
    imgSrc:
      "https://vrn-store.ru/wp-content/uploads/2022/10/2913cc3f80c6f98aee27e94c361c836a.jpeg",
    name: "iPhone 14",
    price: 1200,
    color: "black",
  },
  {
    imgSrc: "https://woap.ru/files/products/2021/12/13_13mini_white.jpg",
    name: "iPhone 13",
    price: 800,
    color: "white",
  },
  {
    imgSrc:
      "https://images.frandroid.com/wp-content/uploads/2020/08/iphone-11-pro-max.jpg",
    name: "iPhone 11",
    price: 300,
    color: "gray",
  },
];
let arr2 = [
  {
    imgSrc:
      "https://sportishka.com/uploads/posts/2022-11/1667526732_53-sportishka-com-p-mersedes-gelik-chernii-krasivo-55.jpg",
    name: "Gelik",
    price: 70000,
    color: "black",
  },
  {
    imgSrc: "https://quto.ru/service-imgs/63/5b/82/54/635b8254ee4f8.jpeg",
    name: "Malibu",
    price: 25000,
    color: "white",
  },
  {
    imgSrc:
      "https://larte-design.ru/storage/app/media/kits/tesla/render/tesla-elizabeta-gray-front-carbon-29may.webp",
    name: "Tesla",
    price: 770000,
    color: "gray",
  },
  {
    imgSrc:
      "https://sun9-76.userapi.com/impf/c626117/v626117187/2a05d/wbbKEaAFsBw.jpg?size=320x213&quality=96&crop=26,0,428,285&sign=c1f125f7d40b08cea10a71c294e0788b&c_uniq_tag=08vfrikH1F5RNtWZf2n2xar-p2hufOR2HufJOXsXJ_s&type=album",
    name: "Ferary",
    price: 5555555,
    color: "blue",
  },
];
let productsList = document.querySelector("#productsList");

arr1.forEach(({ imgSrc, name, price, color }) => {
  productsList.innerHTML += ` <li class="list-item"><a href="#"style='text-decoration:none;target:'_blank}
          <img src="${imgSrc} " width='200' height='200'/>
          <h2>${name}</h2>
          <p>${price}</p>
          <span style='backround:${color};' class="color"></span>
        </a></li>`;
});
arr2.forEach(({ imgSrc, name, price, color }) => {
  let li = document.createElement("li");
  li.classList.add("list-item");
  li.innerHTML = ` <li class="list-item"><a href="#"style='text-decoration:none;target:'_blank}
          <img src="${imgSrc} " width='200' height='200'/>
          <h2>${name}</h2>
          <p>${price}</p>
          <span style='backround:${color};' class="color"></span>
        </a></li>`;
  productsList.append(li);
});
