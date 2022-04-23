<template>
	<div>
		<div id="header" class="bg-[url('/hero-bg.jpg')] px-20">
			<!-- <p>This is a hero section.</p> </!-->
			<div id="menu" class="grid grid-cols-2 py-5">
				<div id="menu-left">
					<img src="/logo.png" class="w-[150px]" alt="" />
				</div>

				<div id="menu-right">
					<!-- ul is unordered list, to create menu item. li is list items</p> </!-->
					<ul class="grid grid-cols-4 font-oswald text-lg text-white uppercase pt-5">
						<li>About Us</li>
						<li>Our Menu</li>
						<li>Locations</li>
						<li>Contacts</li>
					</ul>
				</div>
			</div>
			<div class="grid grid-cols-2 pt-10 pb-20">
				<img src="/hero-burger.png" class="pr-8 mt-10" alt="" />
				<div>
					<h1 class="text-8xl text-white text-center font-lilita uppercase">
						Classic Burger
					</h1>
					<h2 class="text-6xl text-white text-center font-lilita uppercase my-5">
						With Onion
					</h2>
					<p class="text-white font-roboto font-light text-center">
						Our signature burger now comes with onion and cheese. You can customize it to
						your likings. Freshly made to order, all in a Brioche style bun.
					</p>
				</div>
			</div>
		</div>
		<div id="section-1" class="text-center bg-[url('/three-burgers.jpg')] pb-60 bg-cover">
			<h1 class="text-6xl uppercase font-oswald text-center pt-20 px-24">
				The burger tastes better when you eat it with family
			</h1>
			<p class="font-roboto font-light text-gray-500 text-center text-lg py-6 px-28">
				Spend quality time with your family and eat an affordable, nutritious and
				delicious meal together. Not all burgers are fast food. All of our burgers are
				handmade to orders for you and your family members to enjoy.
			</p>
			<button class="font-oswald uppercase bg-red-500 text-white py-3 px-8">
				Explore Full Menu
			</button>
		</div>

		<div id="section-3" class="text-center">
			<h2 class="text-6xl font-oswals text-red-500 uppercase font-medium pt-20">
				Our Crazy Burgers
			</h2>
			<p class="text-gray-500 font-light text-xl my-10 px-20">
				Whether you are looking for the classics, our specialities, or just wraps, salads,
				and fries. We have it all. We always have something that rewards your tastebud.
			</p>
			<div class="grid grid-cols-2 px-40 gap-5">
				<div id="left-item-column">
					<Item
						image="/crispy-chicken.jpg"
						title="Crispy Chicken"
						description="Chicken breast, chilli sauce, tomatoes, pickles, coleslaw"
						price="11.99"
					/>
					<Item
						image="/baa-baa.jpg"
						title="Baa-Baa Black Sheep"
						description="American cheese, tomato relish, avocado, juicy lamb patty"
						price="15.75"
					/>
				</div>
				<div id="right-item-column">
					<Item
						image="/ultimate-bacon.jpg"
						title="Ultimate Bacon"
						description="House beef patty, cheddar cheese, smokey bacon, onion, mustard"
						price="14.99"
					/>
					<Item
						image="/double-burger.jpg"
						title="Double Burger"
						description="2 x beef patties, cheddar cheese, mustard, pickles, tomatoes"
						price="15.35"
					/>
				</div>
			</div>
			<div class="grid grid-cols-12 font-oswald uppercase text-4xl text-yellow-800 px-40 gap-5">
				<div class="col-span-5 bg-cover bg-center bg-[url('/fries-bg-1.jpg')] pl-20 pb-10 pt-10">
					<h4>Get your free</h4>
					<h4>Cheese Fries</h4>
					<button class="uppercase bg-red-500 text-white text-lg py-3 px-8 mt-5">Claim now</button>
				</div>
				<div class="col-span-7 bg-cover bg-center bg-[url('/burger-bg-1.jpg')] text-right pr-10 pt-10">
					<h4>Crispy <br />Chicken</h4>
					<h4>Burger <br />is back!</h4>
					<button class="uppercase bg-red-500 text-white text-lg py-3 px-8 mt-5">Claim now</button>
				</div>
			</div>
			<div class="grid grid-cols-3 px-40 mt-5 gap-5">
				<img src="/offer-1.jpg" alt=""><img src="/offer-2.jpg" alt=""><img src="/offer-3.jpg" alt="">
			</div>
		</div>
	</div>
</template>
