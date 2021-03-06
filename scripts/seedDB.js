const mongoose = require("mongoose");
const db = require("../models/index")

// need to change the data so it fits our hobbies (see the first one in hobbyseed)

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hobbies"
);

const hobbySeed = [
  {
    name: "Poetry",
    image: "https://www.stylist.co.uk/images/app/uploads/2019/04/21103217/poetry-quotes-1680x1120.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress",
    cost: "Free",
    description: "This is an art where only a pen and paper are needed.",
    category: "art",
    date: new Date(Date.now()),
  },
  {
    name: "Watercolor",
    image: "https://media1.popsugar-assets.com/files/thumbor/mXvrq8VHGNS__aMBamgIU266STg/0x0:3024x3024/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/07/15/928/n/1922441/a2e7081e5f0f7247895e56.22642708_/i/watercolor-painting-tips-beginners.jpg",
    cost: "$20",
    description: "Watercolor happens to be one of the less expensive art forms",
    category: "art",
    date: new Date(Date.now())
  },
  {
    name: "Pottery",
    image: "https://northernvirginiamag.com/wp-content/uploads/2020/01/woman-spinning-on-a-pottery-wheel.jpg",
    cost: "$50",
    description: "This is a hands on activity and requires a lot of supplies and at least a few hours.",
    category: "art",
    date: new Date(Date.now())
  },
  {
    name: "Air Frying",
    image: "https://reviewed-com-res.cloudinary.com/image/fetch/s--gZeaHsmg--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_972/https://reviewed-production.s3.amazonaws.com/1549685886204/air-fryer-lead.jpg",
    cost: "$50",
    description: "Restaurant quality french fries, fried pickles, chicken strips, fried fish, ect in the comfort of your own home! No need for oil, simple clean-up, and a low price tag.",
    category: "cooking",
    date: new Date(Date.now())
  },
  {
    name: "Baking",
    image: "https://www.washingtonpost.com/resizer/1X39saFrVIMaGDnBlnH6XQGSByM=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/ATA3W6U2ZQ6JDGMNDNVONTKF3I.jpg",
    cost: "$60",
    description: "You'll need a mixing bowl and a baking pan/sheet, utensils, as well as an oven (obviously). Nothing tastes better than fresh baked cookies... or fresh baked anything, really.",
    category: "cooking",
    date: new Date(Date.now())
  },
  {
    name: "Sous Vide",
    image: "https://www.sana-store.com/admin/upload/images-cache/21258/540x540.webp",
    cost: "$90",
    description: "Once limited to professional kitchens, sous vide (pronounced sue-veed) is a cooking technique that utilizes precise temperature control to deliver consistent, restaurant-quality results. You'll need a precision cooker, which well set you back, as well as some ziplock bags.",
    category: "cooking",
    date: new Date(Date.now())
  },
  {
    name: "Computer Gaming",
    image: "https://cdn.cnn.com/cnnnext/dam/assets/200630134005-build-two-1-super-169.jpeg",
    cost: "Free-$60",
    description: "If you're viewing this page, you already have the main item you'll need, so this cost does not include the cost of a computer. There are many free games available. New AAA titles usually sell for $60. Steam has new free games offered weekly.",
    category: "entertainment",
    date: new Date(Date.now())
  },
  {
    name: "Current Gen Console Gaming",
    image: "https://cdn.cnn.com/cnnnext/dam/assets/201101103446-03-xbox-v-ps5-exlarge-169.jpg",
    cost: "$459",
    description: "A more expensive way to game, but if you are a die hard console gamer, you'll need the latest hardware to play the latest games. Some of the most anticipated exclusive titles will not make their way to Mac/PC for years. Helps develop hand-eye coordination.",
    category: "entertainment",
    date: new Date(Date.now())
  },
  {
    name: "Netflix",
    image: "https://variety.com/wp-content/uploads/2020/08/netflix.jpg",
    cost: "$9",
    description: "A more passive form of screen time. Netflix offers a wide variety of shows to watch at a low cost of $9 per month. The best part: NO COMMERCIALS!!! You'll still have to go somewhere else to watch Chappelle's Show, though.",
    category: "entertainment",
    date: new Date(Date.now())
  },
  {
    name: "Running",
    image: "https://i.pinimg.com/originals/50/af/5c/50af5cb829ae11333c2608b84a3a8a2c.jpg",
    cost: "Free",
    description: "First you move one leg forward, then the other. Nothing to it. No equipment required, although a good pair of running shoes will set you back at least $60.",
    category: "exercise",
    date: new Date(Date.now())
  },
  {
    name: "Biking",
    image: "https://www.vermontvacation.com/~/media/images/things%20to%20do/recreation/boarderlands-mountain-biking.ashx?h=400&la=en&w=600",
    cost: "$500",
    description: "It's like riding a bike, because it is riding a bike! You could get a cheapo bike from Walmart, but if you want a nice one, it will cost at least $500. Builds endurance and leg muscles. Watch out for cars, they certainly won't watch out for you.",
    category: "exercise",
    date: new Date(Date.now())
  },
  {
    name: "Weight Lifting",
    image: "https://i.imgur.com/H8Ua5bB.jpeg",
    cost: "$70",
    description: "Hulk SMASH! Not recommended for those with heart conditions or back problems. Start with lighter weights and work your way up.",
    category: "exercise",
    date: new Date(Date.now())
  },
  {
    name: "Tag",
    image: "https://www.rollingstone.com/wp-content/uploads/2018/06/tag-review-c27136b5-7847-4ec7-a8bd-80c90bbd7ccc.jpg?resize=1800,1200&w=1200",
    cost: "Free",
    description: "The rules are simple. It may be physically strenuous (depending on your competition) and involves making physical contact with your opponents.",
    category: "games",
    date: new Date(Date.now())
  },
  {
    name: "Chess",
    image: "https://images.thestar.com/1WwkEQyZQO8ZOveU-Y07Ilt_4vg=/1200x935/smart/filters:cb(1588879698489)/https://www.thestar.com/content/dam/thestar/life/2020/05/07/forget-sourdough-everyone-is-playing-chess-now/arnold_chess.jpg",
    cost: "$15",
    description: "A meeting of the minds in this one on one strategy classic. It has seen a recent rise in popularity.",
    category: "games",
    date: new Date(Date.now())
  },
  {
    name: "Terraforming Mars",
    image: "https://www.boardgamehalv.com/wp-content/uploads/2019/10/TerraformingMars_Cluster_CloseUp-1024x683.jpg",
    cost: "$70",
    description: "You play as a corporation or government agency whose objective is to contribute to the effort of making Mars a planet where humans can live. Be ready for an all nighter, terraforming does take quite some time.",
    category: "games",
    date: new Date(Date.now())
  },
  {
    name: "Replace Toilet",
    image: "https://i.guim.co.uk/img/media/6babd768431f1b18e3daaabc3ff8c2e258dd67f5/1053_1195_4826_2896/master/4826.jpg?width=620&quality=85&auto=format&fit=max&s=be68c46d0d65f1fa22c7784592188ddc",
    cost: "$130",
    description: "Easier than it looks; shut off the water, close the line to the toilet, remove the old toilet, and put the new one in, and use the wax O-ring so that it sets against the floor. Use a shunt if it won't stay flat. It's a 2 person job; toilets are heavy!",
    category: "homeimprovement",
    date: new Date(Date.now())
  },
  {
    name: "Painting a Room",
    image: "https://www.thespruce.com/thmb/E3OMSD3E9eJPhcYlG1-c_TSDQbY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Stocksy_txpdc39b9790by000_Medium_867684-5a958e10119fa80036fb82b6.jpg",
    cost: "$45",
    description: "Perhaps the cheapest way to give a room a whole new vibe. Paint is cheap, and so are brushes, trays, rollers, and drop cloths. The cost is your time; it is usually a long weekend project, and be sure to cover any furniture in the room!",
    category: "homeimprovement",
    date: new Date(Date.now())
  },
  {
    name: "Install Water Filter",
    image: "https://homelivingstyle.com/wp-content/uploads/2019/11/Screenshot_1-6.png",
    cost: "$250",
    description: "Shut off the water, open faucet to release remaining water, connect adapter, push tubing through attaching it from the filter to the adapter, attach adapter to shut off valve, run sink.",
    category: "homeimprovement",
    date: new Date(Date.now())
  },
  {
    name: "Singing",
    image: "https://happymag.tv/wp-content/uploads/2019/11/Webp.net-resizeimage-1-3.jpg",
    cost: "Free",
    description: "YOU are the instrument! While it is a difficult skill to master, there is always high demand for a charismatic vocalist.",
    category: "music",
    date: new Date(Date.now())
  },
  {
    name: "Electric Guitar",
    image: "https://media.npr.org/assets/img/2020/10/09/gettyimages-1278849926_wide-39d26e44c7eff0602334e77a56d5a9d3b88b6ad3-s1600-c85.jpg",
    cost: "$150",
    description: "An hour a day, every day... or more, if you can spare the time. Be prepared for some discomfort in your fingertips, and if you stick with it, calluses.",
    category: "music",
    date: new Date(Date.now())
  },
  {
    name: "Drum Kit",
    image: "https://i.pinimg.com/564x/5f/3b/ff/5f3bff9140439957d1f1783cd5835a9a.jpg",
    cost: "$350",
    description: "Probably not the best instrument for apartment dwellers. The basics are rather simple, but it is physically demanding at high tempos, and odd time signatures can take time to get used to.",
    category: "music",
    date: new Date(Date.now())
  },
  {
    name: "Golf",
    image: "https://www.ocregister.com/wp-content/uploads/2019/04/GettyImages-1142670334-1.jpg?w=1080",
    cost: "$40",
    description: "New clubs are costly, but you can just get a used set as a novice. There are public courses and driving ranges that don't require memberships, but you will need to pay $5-20 per outing most likely. You may develop calluses if you play enough.",
    category: "outdoors",
    date: new Date(Date.now())
  },
  {
    name: "Skiing",
    image: "https://img.vavel.com/sunny-1103-7438263571.jpg",
    cost: "$150",
    description: "Most slopes rent gear, so you don't need to buy your own (in that case, add $400+ to the cost). You'll still need a lift ticket either way. It's all about balance and endurance. Oh, and knowing how to stop; that's the most important part.",
    category: "outdoors",
    date: new Date(Date.now())
  },
  {
    name: "Thai Chi",
    image: "https://cloud2.spineuniverse.com/sites/default/files/imagecache/large-content/wysiwyg_imageupload/3998/2016/09/23/tai_chi62423590_M.jpg",
    cost: "Free",
    description: "You just need yourself for this one. Thai Chi is an internal Chinese martial art practiced as both a form of self defence and meditation. There are many videos on YouTube available to guide you.",
    category: "outdoors",
    date: new Date(Date.now())
  },
  {
    name: "Driving an ATV",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/7b/6d.jpg",
    cost: "$1200",
    description: "Cover your legs and watch your feet! Oh, and get comfortable using a clutch (most ATVs have one). And no, you're not 'too cool' to wear a helmet. This is an expensive one to start, but it is exhilarating.",
    category: "thrillseeking",
    date: new Date(Date.now())
  },
  {
    name: "Sky Diving",
    image: "https://wnyskydiving.com/wp-content/uploads/2019/01/skydiving-experience-kaila-proulx-tandem.jpeg",
    cost: "$99",
    description: "See you at the bottom! You'll need nerves of steel (you will be jumping out of a plane at about 10,000 feet). You will receive training wherever you go; first timers jump with a guide attached to them who will make sure the chute is packed right.",
    category: "thrillseeking",
    date: new Date(Date.now())
  },
  {
    name: "Scuba Diving",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/c1/2f/53.jpg",
    cost: "$1200",
    description: "One of the more dangerous hobbies for so many reasons. The gear and classes (which are mandatory, with good reason) is prohibitively expensive, but the things you'll see on your dives will blow your mind.",
    category: "thrillseeking",
    date: new Date(Date.now())
  },
];

db.Hobby
  .remove({})
  .then(() => db.Hobby.collection.insertMany(hobbySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

