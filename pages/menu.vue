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
        Our Menu
      </h1>
    </div>

    <div id="items" class="grid grid-cols-3 gap-x-5 gap-y-16 mt-10 mx-20">
      <MenuItem v-for="b in items" :key="b.name" :item="b" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.$axios.get('items.json').then((response) => {
      this.items = response.data.burgers;
    });
  },
};
</script>
