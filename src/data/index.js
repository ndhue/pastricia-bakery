const sliders = [
    {id:1, src: "https://cdn.shopify.com/s/files/1/0565/9757/7916/files/MB_AON-Content_Spring-0313-SITE_v1-2042x1378_fill_2048x.jpg?v=1678467337"},
    {id:2, src: "https://cdn.shopify.com/s/files/1/0565/9757/7916/files/BP_Flight_1_2048x.jpg?v=1651861083"},
  ]

const listTypes = [
    {name:"Cookies", src: "assets/types/cookie.jpg"},
    {name:"Cupcakes", src: "assets/types/cupcake.jpg"},
    {name:"Cheesecakes", src: "assets/types/cheesecake.jpg"},
    {name:"Cakes", src: "assets/types/cake.jpg"},
    {name:"Choux Creams", src: "assets/types/chouxcream.jpg"},
    {name:"Donuts", src: "assets/types/donut.jpg"},
  ]

export const listItem = [
  {id: 1, name: "Festive Desserts", src: "assets/products/festive-desserts.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "7.00", type: "cookies", note:"best seller"},
  {id: 2, name: "Red Velvet Peanut Butter Cookies", src: "assets/products/red-velve-peanut.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "25.00", type: "cookies", note:"new products"},
  {id: 3, name: "Turtle Cookies", src: 'assets/products/turtle-cookies.png', desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "24.00", type: "cookies", note:"best seller"},
  {id: 4, name: "Sheep Cookies", src: "assets/products/sheep-cookies.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "23.00", type: "cookies", note:""},
  {id: 5, name: "Spiced Mushroom Cookies", src: "assets/products/spiced-mushroom.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "27.00", type: "cookies", note:""},
  {id: 6, name: "Festive Desserts", src: "assets/products/festive-desserts.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "7.00", type: "cookies", note:""},
  {id: 7, name: "Gingerbread Cupcake", src: "assets/products/gingerbread-cupcake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "9.00", type: "cupcakes", note:""},
  {id: 8, name: "Vanilla Almond Cupcake", src: "assets/products/vanilla-almond-cupcake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "9.00", type: "cupcakes", note:"new products"},
  {id: 9, name: "Easter Cupcake", src: "assets/products/easter-cupcake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "9.00", type: "cupcakes", note:""},
  {id: 10, name: "Lemon Raspberry Cupcake", src: "assets/products/lemon-blueberry-cupcake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "7.00", type: "cupcakes", note:""},
  {id: 11, name: "Lemon Blueberry Cupcake", src: "assets/products/lemon-raspberry-cupcake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "7.00", type: "cupcakes", note:""},
  {id:12, name: "Holiday Candy Mini Cupcake Assortment", src: "assets/products/holiday-candy.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "45.00", type: "cupcakes", note:"new products"},
  {id: 13, name: "Orange Creamsicle Cheesecake Bars", src: "assets/products/orange-cheesecake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "9.00", type: "cheesecakes", note:""},
  {id: 14, name: "Peach Cobbler Topped Cheesecake", src: "assets/products/peach-cheesecake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "15.00", type: "cheesecakes", note:"best seller"},
  {id: 15, name: "Rich Chocolate Cheesecake", src: "assets/products/rich-chocolate-cheesecake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "12.00", type: "cheesecakes", note:"new products"},
  {id: 16, name: "Key Lime Cheesecake", src: "assets/products/key-lame-cheese.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "15.00", type: "cheesecakes", note:"new products"},
  {id: 17, name: "Chocolate Cheesecake", src: "assets/products/chocolate-cheesecake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "23.00", type: "cheesecakes", note:""},
  {id: 18, name: "Red Velvet Mini Cheesecake", src: "assets/products/chocolate-cheesecake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "8.25", type: "cheesecakes", note:""},
  {id:19, name: "Pine Tree Cake", src: "assets/products/pine-tree-cake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "45.00", type: "cakes", note:""},
  {id:20, name: "Birthday Cake", src: "assets/products/birthday-cake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "45.00", type: "cakes", note:""},
  {id:21, name: "Strawberry Cake", src: "assets/products/strawberry-cake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "42.00", type: "cakes", note:""},
  {id:22, name: "Floral Cake", src: "assets/products/floral-cake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "45.00", type: "cakes", note:"new products"},
  {id:23, name: "Lemon Blueberry Cake", src: "assets/products/lemon-blueberry-cake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "37.00", type: "cakes", note:""},
  {id:24, name: "Pine Tree Cake", src: "assets/products/pine-tree-cake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "45.00", type: "cakes", note:""},
  {id: 25, name: "Matcha Cream Puffs", src: "assets/products/matcha-cream-puff.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "15.00", type: "choux", note:"best seller"},
  {id: 26, name: "Choux Citron", src: "assets/products/choux-citron.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "15.00", type: "choux", note:""},
  {id: 27, name: "Cinnamon apple cream puffs", src: "assets/products/cinnamon-cream-puff.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "22.00", type: "choux", note:""},
  {id: 28, name: "Apple Pie Choux", src: "assets/products/apple-pie-choux.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "7.00", type: "choux", note:""},
  {id: 29, name: "Mini Berry Tiramisu", src: "assets/products/mini-berries-tiramisu.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "7.00", type: "choux", note:"best seller"},
  {id: 30, name: "Red Velvet Craquelin Cream Puffs", src: "assets/products/red-velve.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "9.00", type: "choux", note:""},
  {id: 31, name: "Red Velvet Donuts", src: "assets/products/red-velvet-donuts.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "45.00", type: "donuts", note:""},
  {id: 32, name: "Pineapple Upside Down Donut", src: "assets/products/pineapple-donut.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "25.00", type: "donuts", note:"best seller"},
  {id: 33, name: "Banana Bread Donut", src: "assets/products/banana-donut.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "12.00", type: "donuts", note:""},
  {id: 34, name: "Gingerbeard Bake Donut", src: "assets/products/gingerbread-cupcake.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "15.00", type: "donuts", note:""},
  {id: 35, name: "Classic Glazed Donut", src: "assets/products/classic-glaze-donut.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "16.00", type: "donuts", note:""},
  {id: 36, name: "Vegan Triple Chococalte Donut", src: "assets/products/Vegan-triple.png", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit diam luctus enim finibus congue.", price: "18.00", type: "donuts", note:""},
]

const locationHCM = [
  {id: 1, src:"assets/location/cn1.png", name:"Department 1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id: 2, src:"assets/location/cn2.png", name:"Department 2", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id: 3, src:"assets/location/cn3.png", name:"Department 3", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
]
const locationCT = [
  {id: 1, src:"assets/location/cn4.png", name:"Department 4", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id: 2, src:"assets/location/cn5.png", name:"Department 5", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id: 3, src:"assets/location/cn6.png", name:"Department 6", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
]
export {sliders, listTypes, locationHCM, locationCT}