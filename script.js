let shoppingList = {
    dry: {
      flour: 2,
      toilet_paper: 1,
      salt: 1,
      sugar: 2,
      cinnamon: 1,
    },
    dairy: {
      milk: 1,
      cheese: 1,
      cream: 1,
      butter: 1,
    },
    meat: {
      beef: "200g",
      steak: 2,
      sausages: 2,
      chicken: {
        chicken_breast: 13,
        chicken_head: 3,
        chicken_legs: 3,
      },
    },
    house_products: {
      paper: "thick",
      drinks: 4,
      curtain: "blue",
      Deodorant: "flowers smell",
    },
  };
  
  function addProductNumber() {
    shoppingList.meat.chicken.chicken_breast =
      shoppingList.meat.chicken.chicken_breast + 1;
  }
  
  function showProductNumber() {
    console.log(shoppingList.meat.chicken.chicken_breast);
  }
  