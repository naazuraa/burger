<template>
  <div>
    <div class="bg-[url('/menu-page.jpg')] px-20">
      <div id="menu" class="grid grid-cols-2 py-5">
        <div id="menu-left">
          <img src="/logo.png" class="w-[150px]" alt="" />
        </div>

        <div id="menu-right">
          <!-- ul is unordered list, to create menu item. li is list items</p> </!-->
          <ul class="grid grid-cols-4 font-oswald text-lg text-white uppercase pt-5">
            <li>About Us</li>
            <NuxtLink to="/menu">Our Menu</NuxtLink>
            <li>Locations</li>
            <li>Contacts</li>
            <NuxtLink to="/cart">Cart</NuxtLink>
          </ul>
        </div>
      </div>
      <h1 class="text-white font-oswald uppercase text-6xl text-center pt-24 pb-28">
        Orders
      </h1>
    </div>

    <table v-for="order in orders" :key="order.id" class="table-auto w-2/3 mt-20 mx-auto mb-20">
      <thead>
        <tr>
          <td colspan="4">
            <h1 class="font-oswald uppercase text-2xl pb-10">
              Order ID - {{ order.id }}
            </h1>
          </td>
          <th class="text-left">Name</th>
          <th class="text-right">Price</th>
          <th>Quantity</th>
          <th class="text-right">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in order.data.orders"
          :key="item.name"
          class="font-oswald uppercase text-2xl border-b"
        >
          <td class="py-10">{{ item.name }}</td>
          <td>RM {{ item.price.toFixed(2) }}</td>
          <td class="text-center">{{ item.quantity }}</td>
          <td>{{ (item.price * item.quantity).toFixed(2) }}</td>
          <td class="text-center"><button @click="removeItem(item.name)">✖️</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: []
    }
  },

  mounted() {
    this.$axios.get('/.netlify/functions/readorders').then(
      (response) => {
        this.orders = response.data;
      }
    )
  }
}
</script>
