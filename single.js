// script.js

// Retrieve the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Sample product data (replace this with your actual product data)
const products = [
  {
    id: '1',
    name: 'Smart Microwave',
    price: 298.00,
    description: `
      The integrated pocket handle, Wide View window and SmoothTouch glass controls
      deliver a seamless and refined look to your kitchen while offering easy access
      and intuitive operation. Simplify meal prep with sensor cook and auto cook options,
      or scan-to-cook technology that sends cooking instructions to your microwave.
      Plus, sync the microwave with your LG Smart range to automatically turn on the
      light and vent when the cooktop is in use, for extra convenience.
      Sleek Wide View window and intuitive SmoothTouch glass controls deliver modern
      style to your kitchen. Humidity-sensing technology determines when food is cooked
      and automatically turns off the microwave to help prevent over or undercooking
      your food. Auto settings make cooking easier and decisions faster. Scan-to-Cook
      feature works with the ThinQ app to remotely send customized cooking instructions
      straight to your microwave. Pairs with your LG Smart range to automatically
      turn on the microwave vent and light when the cooktop is in use, for a seamless
      cooking experience.
    `,
    image: 'images/micro.jpeg'
  },
  {
    id: '2',
    name: 'Smart Fridge',
    price: 550.00,
    description: `
    25.6 cu. ft. capacity - Easily store large or bulk food items with three full-width shelves and large capacity
    Space-saving ice maker - Located on the door with integrated bins to create more usable storage space
    LED lighting - Find exactly what you've been looking for under crisp, clear lighting
    External controls with actual temperature display, child lock and door alarm - Eliminates the guesswork in setting refrigerator temperatures; conveniently displayed on the dispenser
    Spill-proof shelves - A variety of shelf configurations provide additional options for food storage
    Two humidity-controlled drawers and full-width drawer - Create the right environment for keeping fruits and vegetables fresh, while easily storing wider items like a party platter or a sheet cake
      `,
    image: 'images/fridge.jpeg'
  },
  {
    id: '3',
    name: 'Freezer',
    price: 600.00,
    description: `
    5.0 cu. ft. capacity provides ample storage for your frozen food needs
Adjustable, external temperature control lets you modify the interior climate as needed
2 bulk storage basket slides easily, so you can quickly see items underneath
Interior LED light illuminates the freezer cavity, making it easier to locate items
Defrost water drain ensures a clear path for water to travel during defrosting
Removable interior divider for easy organization
Manual defrosting is easy to do
Recessed handle design provides a sleek, premium look
Warranty is 1-year parts and labor, 5 years compressor (part only)
Item does not qualify for the major appliance delivery and haul away or installatio

      `,
    image: 'images/freezer.jpeg'
  },
  {
    id: '4',
    name: 'Mini Fridge',
    price: 375.00,
    description: `
    All refrigerator design without a freezer/chiller provides more usable capacity
Upfront interior analog controls for making quick adjustments to internal temperature
3 fresh-food glass shelves help keep foods organized and are easy to clean
In door can holder keeps beverage cans neat and makes it easy for you to just grab one and go
Door shelves help your keep frequently used items up front for easy access
4.4 cu. ft. capacity compact refrigerator is manual defrost
ENERGY STAR qualified to meet or exceed federal guidelines for energy efficiency for year-round energy and money savings
Reversible door offers multiple options for placement in a room
Flush back for ease of installation
Warranty is 1-year parts and labor; 5 years compressor (part only)
Item does not qualify for the major appliance delivery and haul away or installation services

    
      `,
    image: 'images/miniFridge.jpeg'
  },
  {
    id: '5',
    name: 'Washing Machine',
    price: 574.00,
    description: `
    Water Level Control - This top load washer with water level control and Extra Rinse option allows you to use as much or as little water as necessary to get the perfect clean.
My Cycle Setting - Make laundry simpler by saving your favorite wash settings as a preset for future use with the My Cycle setting.
Eco Cold - Save energy and money on your utilities with the Eco Cold laundry setting that adjusts wash action to achieve a great clean with cold water.
Soak Rinse - Reduces bacteria and viruses with a final cold soaking rinse when using color-safe liquid sanitizers to boost your detergent's cleaning power and remove tough odors on even you most delicate laundry.
Quick Wash - This washer with quick wash allows you to enjoy great wash performance in under 24 minutes. *Using default settings.
Deep Fill - This Deep Fill washer give you total control of water level. Press once for an additional 3 gallons or press and hold to fill up a full 26 gallons.
Dual Action Agitator - This durable, built-in Dual Action Agitator applies a gentle reversing agitation motion to achieve a deep clean while being gentle on your clothes.
Custom Wash Settings - Optimize your laundry settings with the total flexibility to adjust rinse, temperature, spin or soil level to get the best clean for each load.
Auto Soak - This washing machine with Auto Soak option adds a pre- wash soak of up to 2 hours before automatically moving to the wash cycle for optimal stain removal.

      `,
    image: 'images/washer.jpeg'
  },
  {
    id: '6',
    name: 'Drying Machine',
    price: 554.97,
    description: `
    16" High Laundry Pedestal Sold Seperately (Model # GFP1528PNRS)
7" High Laundry Riser Sold Seperately (Model # GFR0728PNRS)
Matching Stacking Kit Sold Seperately (Model # GFA28KITN)
Stainless steel drum - enjoy premium durability with a drum that resists rust and helps protect clothes
Washer Link - Wirelessly links your washer to your dryer so you only choose a setting once
Powersteam - Refresh small loads and dewrinkle larger loads with the power of steam
 `,
    image: 'images/dryer.jpeg'
  },
  {
    id: '7',
    name: 'Oven',
    price: 898.00,
    description: `
    Our latest InstaView window is 23% larger with a tinted, frameless edge-to-edge design-so now you can see even more with just two quick knocks on the glass panel, see your favorites in an instant without ever opening the door, from drinks to frequently used condiments to snacks for the kids
Take another glimpse every time you walk by this fresh design from LG and take in the contemporary vibe, flat panels are enhanced with discreet pocket handles that offer easy access
Dual ice makers, dispensed from the door and located in the freezer compartment, automatically produce ice so you never run out; creates standard ice cubes, crushed ice and LG's exclusive round craft ice - crafted to melt slower, chill more efficiently and help beverages taste their best for longer; from craft cocktails & whiskey to soft drinks, lemonade, even iced coffee, give your beverages the perfect ice
   `,
    image: 'images/oven.jpeg'
  },
  {
    id: '8',
    name: 'Set',
    price: 1298.00,
    description: `
      Save Big on our best deal!! This set saves 50%!!!
      `,
    image: 'images/set.jpeg'
  },
  {
    id: '9',
    name: 'Vacuum Cleaner',
    price: 119.00,
    description: `
    WHAT'S INCLUDED? - High-Performance Swivel Pet Vacuum Cleaner Machine, Telescopic Extension Wand, Crevice Tool, 2-in-1 Pet Upholstery Tool, Pet Turbo Tool.
    FILTER MADE WITH HEPA MEDIA: Filter made with HEPA Media, which captures 99.97% of dust and particles
    DUAL CYCLONE TECHNOLOGY: Clean up crumbs, dust particles, and even embedded dirt with our powerful dual cyclone technology
    DEEP CLEAN POWERPASS BRUSHROLL - Go deep into carpets, effectively sweep hard floors, and pick up more dirt with every pass with our PowerPass brush roll.
    EDGE-TO-EDGE SUCTION: Maximize pickup of pet hair and debris in tight corners and hard-to-reach spots with our edge-to-edge suction
    WINDTUNNEL SUCTION TECHNOLOGY AND MAXLIFE FILTRATION SYSTEM: Enjoy powerful, long-lasting suction and extend the life of your vacuum by 3x with our WindTunnel Suction Technology and MAXLife Filtration System
    `,
    image: 'images/vacuum.jpeg'
  },
  {
    id: '10',
    name: 'Hand Vacuum',
    price: 89.00,
    description: `
    Powerful suction cleans a variety of dry materials and surfaces
    Portable convenience and lightweight design perfect for cleaning on the go
    Easy to empty dust cup for quick debris disposal
    Dual filter system allows users to easily clean and maintain their vacuum for optimal performance
    Universal nozzle accepts 1-1/4 in. accessories
    4 PC. Hand Vacuum Accessory Kit sold separately (A32K05)
    Hand Vacuum Standard Filters (A32F05) and Hand Vacuum HEPA Filters (A32HF00) sold separately
    Part of the RYOBI 18V ONE+ System of Over 280 Cordless Products
    3-year manufacturer's warranty
    `,
    image: 'images/handVac.jpeg'
  },
  {
    id: '11',
    name: 'Toaster Oven',
    price: 449.00,
    description: `
    14-cooking modes - flawlessly prepare any recipe, from kids snacks to dinner party hors d'oeuvres, with 14-essential cooking modes, including air fry, crisp finish, bake, broil, roast, toast, bagel, pizza, cookies, proof, dehydrate, slow cook, reheat and keep warm
    Crisp finish - use crisp finish at the end of any standard cooking mode to melt, caramelize, brown or crisp, and put the perfect finishing touch on any of your signature dishes
    Large capacity - accommodate 12 in. pizzas, 9 in. x 13 in. cake pans, 2 qt. casserole dishes and more in a spacious cooking cavity that's sized for party-style fare
    6 quartz heating elements - savor the convenience and performance of 6 total heating elements that enable rapid preheating, cook evenly and let you set temperatures for all your needs, from proofing at 80˚F to air frying at 450˚F
    `,
    image: 'images/toaster.jpeg'
  },
  {
    id: '12',
    name: 'Air Conditioner',
    price: 198.00,
    description: `
    Innovative U-shaped design and inverter technology from the world's #1 Air Treatment Brand warrants best-in-class performance, efficiency and extremely quiet operation
    OVER 35% ENERGY SAVINGS* - Midea U achieves more than 35% energy savings compared to traditional units. It's the first window AC to obtain the ENERGY STAR MOST EFFICIENT 2020 certification
    BLOCKS NOISE OUTSIDE - The U-shaped design keeps the noise coming from the compressor outside. This allows for an extremely quiet operation as low as 32 dBA*- up to 9X QUIETER than traditional units
    FLEXIBLE WINDOW OPENING FOR FRESH AIR - With an innovative U-shaped groove design and unique install method with the included bracket, you may open your window to enjoy fresh air even with your AC installed
    SMART CONTROL - The Midea U works with Alexa and Google Assistant and can be controlled from anywhere with the MSmartHome App
     `,
    image: 'images/ac.jpeg'
  },
  {
    id: '13',
    name: 'Garbage Disposal',
    price: 98.00,
    description: `
    Badger 100, 1/3 hp garbage disposal, with 11.5 in. Height and 6.31 in. Width; includes all flanges, gaskets, bolts, etc, necessary for proper installation, plus jam-buster wrenchette and kitchen drain stopper
    InSinkErator garbage disposal for hardwire or cord-compatible installation sold exclusively at the home depot; power cord sold separately
    Durable, long-lasting, sink disposal featuring 1/3 hp dura-drive induction motor for maximum grinding power and durability; single stage of grind to handle everyday food scraps; rugged, galvanized steel grind components
    Equipped with lift and latch technology for easier installation of sink garbage disposal; food waste disposer kitchen appliance assembled in USA for either hardwire or corded installation (cord sold separately)
    Simple diy installation with ″twist-on, twist-off″ quick lock mount to help ensure fast and easy replacement of existing insinkerator garbage disposer mounts
  `,
    image: 'images/disposal.jpeg'
  },
  {
    id: '14',
    name: 'Espresso Machine',
    price: 379.00,
    description: `
    Steam frother - get a variety of microfoam textures and thicknesses for lattes, flat whites, cappuccinos and more with a built-in steam wand that rotates in a 180° motion for control and convenience
    Italian made, 15 bar pump - get a balanced cup of espresso with each use thanks to an italian made, 15 bar pump that slowly increases its pump rated pressure to draw out flavors
    Built in conical burr grinder and adjustable grind size - the stainless steel conical burr grinder delivers an exact amount of fresh grounds directly into the portafilter, and with 15 grind levels, it provides the ability to dial up a perfect shot
    `,
    image: 'images/espresso.jpeg'
  },
  {
    id: '15',
    name: '3 Speed Fan',
    price: 49.00,
    description: `
    Easy-to-use manual controls
    3 refreshing speeds
    Widespread oscillation for full room coverage
    Fully adjustable height and tilt-back fan head for customized airflow
    Features an 18-inch, 5-paddle fan blade
    Easily portable
    Ideal for larger room in the home
    Simple no-tool assembly
    Features Lasko's Blue Plug trusted safety fuse technology, the plug is designed to cut off electric current to the fan if it detects a potentially hazardous electrical fault in the fan’s motor or power supply.
    1-Year Limited Warranty
    `,
    image: 'images/fan.jpeg'
  },
  {
    id: '16',
    name: 'Cooktop',
    price: 379.00,
    description: `
    5 electric surface burners
    Ceramic glass cooktop panels offer a sleek design with enormous heat resistance and stability
    Touch controls provide easy control of burner temperature settings and functions
    Hot surface indicator light will glow to alert any surface area that is too hot to touch
    Triple zone element offers flexibility for a variety of cookware sizes
    Synchronizing burners accommodate for larger cookware such as griddles
    Safety lock prevents any unintended operation of the cooktop, offering added security
    Compatible with aluminum, enamel on cast iron, copper and stainless steel cookware
   `,
    image: 'images/cooktop.jpeg'
  },
 
];

// Find the selected product based on the product ID
const selectedProduct = products.find(product => product.id === productId);

// Update the single product details on the page
document.getElementById('MainImg').src = selectedProduct.image;
document.querySelector('.singleProDetails h4').textContent = selectedProduct.name;
document.querySelector('.singleProDetails h2').textContent = `$${selectedProduct.price.toFixed(2)}`;
document.querySelector('.singleProDetails span').textContent = selectedProduct.description;

// Add to Cart functionality NEED TO IMPLEMENT
const addToCartButton = document.querySelector('.singleProDetails button');
addToCartButton.addEventListener('click', addToCart);

function addToCart() {
 
  alert(`Added ${selectedProduct.name} to the cart!`);
}
