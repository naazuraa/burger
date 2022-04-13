const state = () => ({
  orders: [
    { name: 'Ultimate Bacon', price: 14.99, quantity: 4 },
    { name: 'Baa-Baa Black Sheep', price: 15.75, quantity: 5 },
  ]
});

const mutations = {
  addItem(state, selectedItem) {
    const index = state.orders.findIndex(
      (item) => {
        return item.name === selectedItem.name;
      });

    if (index === -1) {
      state.orders.push({
        name: selectedItem.name,
        price: selectedItem.price,
        quantity: 1,
      });
    } else {
      state.orders[index].quantity++;
    }
  },
};

export default {
  state,
  mutations,
};
