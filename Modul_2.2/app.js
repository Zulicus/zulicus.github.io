//Array with all the HTML for the comic
const panels = [
    "<img src='./Media/starting_page.gif' alt='404: Image not found' /><br><div class='button-div'><button class='nextPageButton'>Start Adventure!</div></button>",
    "<div class='narration'><p>You awaken to find yourself in a dry stonebrick room.</p></div><img width='800' height='550' src='./Media/Room_1.gif' alt='404: Image not found' /><p>What do you do?</p><div class='button-div'><button class='nextPageButton'>Look around</div></button>",
    "<div class='narration'><p>You look about the room there's a Door a Chest a couple of Tables an eye seemingly sculpted onto the wall and a strange indecipherablemessage floating just above it. The floor is also made from bricks</p></div><img src='./Media/Room_1p2.gif' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Open the chest</div></button>",
    "<div class='narration'><p>After the messages vanish into the air from wence they came you open the chest</p></div><img src='./Media/Room_1p3.gif' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Look inside the chest</div></button>",
    "<div class='narration'><p>Within the Chest you don't find all that much in fact you find an absence of much specifically a rather long hole that has some grass at the bottom</p></div><img src='./Media/room1chesthole.png' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Talk to the Eye on the wall</div></button>",
    "<div class='narration'><p>You decide to talk to the Eye on the wall at length about the importance of lengthy and intricate dialogue.</p></div><img src='./Media/Room_1p4.gif' alt='404: Image not found' /><p>It doesn't seem impressed.</p><div class='button-div'><button class='nextPageButton'>Aww shucks</div></button>",
    "<div class='narration'><p>However you still manage to string a large amount of advanced words together.</p></div><img src='./Media/Room_1p5.gif' alt='404: Image not found' /><p>+1 Rhetorics</p><div class='button-div'><button class='nextPageButton'>Was the 'skill+' off-centered from the head?</div></button>",
    "<div class='narration'><p>Oh no! It IS off center! And it's giving you a headache!</p></div><img src='./Media/Room_1p6.gif' alt='404: Image not found' /><p>You take 1 psychic damage</p><div class='button-div'><button class='nextPageButton'>Open the character menu to look at your stats</div></button>",
    "<div class='narration'><p>After recovering from you minor migraine you try to open your character menu surprisingly this works</p></div><img src='./Media/Character_menu.png' alt='404: Image not found' /><p>After having a look around you realize that you have absolutely no clue what your name is. You also can’t recall for the life of you what your sign was</p><div class='button-div'><button class='nextPageButton'>Decide that your name is Pinkguy and your sign is the 'Gemiquaricorn'</div></button>",
    "<div class='narration'><p>While you are unsure if it's accurate you think 'Pinkguy' is a decent placeholder name and that the 'Gemiquaricorn' sounds like a fearsome sign.</p></div><img src='./Media/room1p7.gif' alt='404: Image not found' /><p>However as you attempt to write these onto your character menu you realize that you don't have anything to write with.</p><div class='button-div'><button class='nextPageButton'>Investigate the tables</div></button>",
    "<div class='narration'><p>You decide to investigate the tables</p></div><img src='./Media/room1p8.png' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Look closer</div></button>",
    "<div class='narration'><p>As you look closer you're surprised to see the two tables become one furthermore you see that on the table there is a comedically oversized key as well as a large tome called 'A Comparison of the Common Areas of Habitation of the Basilisk and the Hydra' and a pot full of some black liquid</p></div><img src='./Media/TABLE.png' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Take all the things!</div></button>",
    "<div class='narration'><p>You pick up the [Comedically oversized key] then you pick up the [pot of black liquid] then you pick up the ['A Comparison of the Common Areas of Habitation of the Basilisk and the Hydra'] and toss the [Comedically oversized key] away much to your own surprise.</p></div><img src='./Media/room1p9.gif' alt='404: Image not found' /><p>You have run out of hands to carry items</p><div class='button-div'><button class='nextPageButton'>Drop book pick up key</div></button>",
    "<div class='narration'><p>You gently drop the ['A Comparison of the Common Areas of Habitation of the Basilisk and the Hydra'] and go over to acquire the [Comedically oversized key].</p></div><img src='./Media/room1p10.gif' alt='404: Image not found' /><div class='button-div'><button class='nextPageButton'>Dip pointy bit of key into liquid</div></button>",
    "<div class='narration'><p>You smartly dip the very tip of the [Comedically oversized key] into the [pot of black liquid] creating an [Inked oversized key].</p></div><img src='./Media/room1p11.gif' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Write your sign and name in using key dipped in liquid.</div></button>",
    "<div class='narration'><p>Finally you attempt to write onto your character menu to fill in the sign and Name spaces. However you can't really see where the ink is going maybe you should've thought this through.</p></div><img src='./Media/room1p12.gif' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Poke the eye to see if you can extract blood from it</div></button>",
    "<div class='narration'><p>You strongly 'Poke' the sculpted eye with your [Inked oversized key]. However it doesn't appear that the stone eye bleeds it is rather disturbed by your 'poking'</p></div><img src='./Media/Room1p13.gif' alt='404: Image not found' /><p>+1 keysmanship</p><div class='button-div'><button class='nextPageButton'>Draw blood!</div></button>",
    "<div class='narration'><p>Who's blood could you be referring to? There's clearly nothing in here that bleeds</p></div><img src='./Media/room1p14.gif' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Draw blood from yourself using the key</div></button>",
    "<div class='narration'><p>There's clearly nothing in here that bleeds you included..</p></div><img src='./Media/room1p15.gif' alt='404: Image not found' /><audio hidden controls autoplay><source src='./Media/Saxonsmol.mp3' type='audio/mpeg' /></audio><p>what's that sound?</p><div class='button-div'><button class='nextPageButton'>Drop the key open the book rip out small bits of pages and use small blobs of black liquid to glue the pages onto your character sheet to form both your name and your sign.</div></button>",
    "<div class='narration'><p>You drop your [Inked oversized key]. Pick up the ['A Comparison of the Common Areas of Habitation of the Basilisk and the Hydra'] and rip it to pieces creating [book fragments] and using these fragments you write in your name piNkGuy and add the sign with a piece of blank paper and some excellent finger-calligraphy</p></div><img src='./Media/room1p17.gif' alt='404: Image not found' /><p>Power Gained: Summon Gemiquaricorn.</p><div class='button-div'><button class='nextPageButton'>Read power tooltip for 'Summon Gemiquaricorn'</div></button>",
    "<div class='narration'><p>You open your Power menu and see your [summon Gemiquaricorn  ] power you note that it will cost the permanent loss of 6 colors. You also notice that you currently have one other power active [Hunter Eye] which is occupying your only current color.</p></div><img src='./Media/pwrmenu.png' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Take the color from the 'Guy' slip of paper in our name.</div></button>",
    "<div class='narration'><p>You finagle with the oddly colored paper for a bit trying to figure it out. You think you almost got it and then nothing.</p></div><img src='./Media/room1p18.gif' alt='404: Image not found' /><p>Perhaps this whole color extraction isn't as easy as you thought</p><div class='button-div'><button class='nextPageButton'>Where did the key go?</div></button>",
    "<div class='narration'><p>You also manage to eat a part of the slip in your efforts tasted pretty good however you must now live with merely being piNkGu</p></div><img src='./Media/chrcrtmenu.png' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Read the book</div></button>",
    "<div class='narration'><p>You try to read the [book fragments] however it is difficult to make out more than a couple of words related to Basilisks and Hydras. Also the key? The key is totally fine.</p></div><img src='./Media/room1p19.gif' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Look at where skill points can be placed</div></button>",
    "<div class='narration'><p>Unslotted skill points can be assigned to preexisting skills from the character menu. New skills are attained by taking action with an unslotted skill point</p></div><img src='./Media/chrcht1111.gif' alt='404: Image not found' /><p>Class options detected:</p><p>{Lexicainite} Requires Rhetorics 1 Calligraphy 2 and 2 seperate advanced Comprehension perks.</p><p>{Locksmith} Requires: Keymanship 3 locksmithing 2 and 1 enchanted key.</p><div class='button-div'><button class='nextPageButton'>Try to take action with an unslotted skill point: extract colour</div></button>",
    "<div class='narration'><p>You don't have any unslotted skill points. It was slotted when you assaulted the eyeball.</p></div><img src='./Media/room1p20.gif' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Darn</div></button>",
    "<div class='narration'><p>It's that music again</p></div><img src='./Media/room1p21.gif' alt='404: Image not found' /><audio hidden controls autoplay><source src='./Media/Saxonsmol.mp3' type='audio/mpeg' /></audio><br /><div class='button-div'><button class='nextPageButton'>Open perk menu</div></button>",
    "<div class='narration'><p>You open your perks menu and note that you have one perk: Zoom</p></div><img src='./Media/perks.png' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Drop the book pick up the key and use the key on the door</div></button>",
    "<div class='narration'><p>You zoom to retrieve the key. After dropping your [book fragments] you pick up the [cleaned oversized key] then carefully apply your keymanship to open the door.</p></div><img src='./Media/room1p22.gif' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Leave the room key blazing</div></button>",
    "<div class='narration'><p>You zoom through the door [cleaned oversized key] at the ready. Within the corridor there is a single surprised looking tubaan</p></div><img src='./Media/room2p1.gif' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Kill the tubaan!</div></button>",
    "<div class='narration'><p>You charge down and assault the Tubaan with a |Hyperzoomic key bash| Inflicting 5 damage. The tubaan strikes back with its |mighty bwooom| inflicting 2 hearing damage.</p></div><img src='./Media/Room2p2.gif' alt='404: Image not found' /><p>Technique learnt |Hyperzoomic Key bash|</p><div class='button-div'><button class='nextPageButton'>Hit it with gusto!</div></button>",
    "<div class='narration'><p>The Tubaan attacks with a fearsome |Brassy staccato| dealing 4 hearing damage split over 2 attacks. You counterstrike with a |basic attack| dealing 2 damage and killing the Tubaan</p></div><img src='./Media/room2p3.gif' alt='404: Image not found' /><p>Tubaan has turned into [pile of scrapped brass  ]</p><div class='button-div'><button class='nextPageButton'>Gently place down the black liquid wear some of the brass as a hat and grab a torch/candle.</div></button>",
    "<div class='narration'><p>You gather the [Pile of Scrapped brass] together to assemble a [scrappy brass helmet] which you then wear. you then pick up a torch from the wall which will be helpful for tricking people into thinking you don't have nightvision.</p></div><img src='./Media/room2p4.gif' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Go down.</div></button>",
    "<div class='narration'><p>You move down the corridor. Inside there is a strange contraption with two raised up circles connected to a button and a larger circle. as well as a small transparent barrier between the circles and the button. There are also 6 sculpted eyes</p></div><img width='1100' height='550' src='./Media/room3p1.png' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Check your menu to see if the hat made another color available</div></button>",
    "<div class='narration'><p>Would you look at that. A tiny brassy Chromaling has formed on your power menu.</p></div><img width='900' height='550' src='./Media/pwrmenu1.gif' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>POKE AN EYE!</div></button>",
    "<div class='narration'><p>You give the nearest eye a solid 'poke.' The eyes seem distressed</p></div><img  width='1100' height='550' src='./Media/room3p2.gif' alt='404: Image not found' /><br /><div class='button-div'><button class='nextPageButton'>Restart</div></button>",
  ],
  //Array with the quests of the comic
  quests = [
    "<div class='narration'><p>No Quests active</p><p>Reward: Nothing really</p><p>Completed quests:</p><p>No quests Completed</p></div>",
    "<div class='narration'><p>[Quest Acquired]</p><p>Acquire a writing implement</p><p>Reward: +1 unslotted skill point +1 calligraphy</p><p>Completed quests:</p><p>No quests Completed</p></div>",
    "<div class='narration'><p>Acquire a writing implement</p><p>Reward: +1 unslotted skill point +1 calligraphy</p><p>Completed quests:</p><p>No quests Completed</p></div>",
    "<div class='narration'>No Quests active</p><p>Reward: Nothing really</p><p>Completed quests:</p><p>Acquire a writing implement</p></div>",
    "<div class='narration'><p>[Quest acquired]</p><p>Acquire red ink.</p><p>Rewards: +1 calligraphy +1 unslotted skill point</p><p>Completed quests:</p><p>Acquire a writing implement</p></div>",
    "<div class='narration'><p>Acquire red ink.</p><p>Rewards: +1 calligraphy +1 unslotted skill point</p><p>Completed quests:</p><p>Acquire a writing implement</p></div>",
    "<div class='narration'><p>[Quest acquired]</p><p>Learn more about Basilisks and Hydras. (1 out of 3)</p><p>Rewards: Advanced Comprehension of Reptiloid creatures. +1 unslotted skill point<p>Acquire red ink.</p><p>Rewards: +1 calligraphy +1 unslotted skill point</p><p>Completed quests:</p><p>Acquire a writing implement</p></div>",
    "<div class='narration'><p>Learn more about Basilisks and Hydras. (1 out of 3)</p><p>Rewards: Advanced Comprehension of Reptiloid creatures. +1 unslotted skill point<p>Acquire red ink.</p><p>Rewards: +1 calligraphy +1 unslotted skill point</p><p>Completed quests:</p><p>Acquire a writing implement</p></div>",
    "<div class='narration'><p>{Quest Acquired}</p><p>Learn how to- and extract some brassy color.</p><p>Rewards: Brassy Color.</p><p>Learn more about Basilisks and Hydras. (1 out of 3)</p><p>Rewards: Advanced Comprehension of Reptiloid creatures. +1 unslotted skill point<p>Acquire red ink.</p><p>Rewards: +1 calligraphy +1 unslotted skill point</p><p>Completed quests:</p><p>Acquire a writing implement</p></div>",
    "<div class='narration'><p>Learn how to- and extract some brassy color.</p><p>Rewards: Brassy Color.</p><p>Learn more about Basilisks and Hydras. (1 out of 3)</p><p>Rewards: Advanced Comprehension of Reptiloid creatures. +1 unslotted skill point<p>Acquire red ink.</p><p>Rewards: +1 calligraphy +1 unslotted skill point</p><p>Completed quests:</p><p>Acquire a writing implement</p></div>",
  ];

//Start of aplication
(function () {
  //Constants
  const comicEl = document.querySelector(".comic");
  const questLogEl = document.querySelector(".quests");
  const startGameButtonEl = document.querySelector(".startGameButton");
  const navField = document.querySelector(".go-to");
  const displayOnScreen = (e) => {
    const displayComic = document.createElement("div");
    const displayQuests = document.createElement("div");
    displayComic.classList.add("panel");
    displayQuests.classList.add("quest");
    displayComic.innerHTML = panels[e.detail];
    displayQuests.innerHTML = quests[questLogCounter];
    comicEl.appendChild(displayComic);
    questLogEl.appendChild(displayQuests);
  };
  //Page and quest counters
  let currentPage = 0,
    questLogCounter = 0;
  //Waits for the reader to press the "Start Adventure" button
  startGameButtonEl.addEventListener("click", () => {
    currentPage++;
    //Creates an event for when the page is "turned"
    const event = new CustomEvent("page-change", {
      detail: currentPage,
    });
    document.dispatchEvent(event);
  });
  //Eventlistner for when the page is "turned"
  document.addEventListener("page-change", (event) => {
    //Blocker, so that the code doesn't crash when the comic is over, and it lets the reader reread the comic
    if (currentPage >= 36) {
      location.reload();
    }
    //Resets the HTML
    comicEl.innerHTML = "";
    questLogEl.innerHTML = "";
    //Changes the placeholder to reflect what page you are on
    navField.innerHTML = `<input value='' class="page-select" type="text" placeholder="Page ${event.detail}"/>`;
    const inputEl = document.querySelector(".page-select");
    //Keeps track of what quests are supposed to be active and when
    if (event.detail <= 8) {
      questLogCounter = 0;
    } else if (event.detail == 9) {
      questLogCounter = 1;
    } else if (event.detail <= 13) {
      questLogCounter = 2;
    } else if (event.detail == 14) {
      questLogCounter = 3;
    } else if (event.detail == 15) {
      questLogCounter = 4;
    } else if (event.detail <= 22) {
      questLogCounter = 5;
    } else if (event.detail == 23) {
      questLogCounter = 6;
    } else if (event.detail <= 33) {
      questLogCounter = 7;
    } else if (event.detail == 34) {
      questLogCounter = 8;
    } else {
      questLogCounter = 9;
    }
    //Displays the correct page and quests
    displayOnScreen(event);
    //Eventlistner for when the page is "turned"
    const nextPageButtonEl = document.querySelector(".nextPageButton");
    nextPageButtonEl.addEventListener("click", () => {
      currentPage++;
      const event = new CustomEvent("page-change", {
        detail: currentPage,
      });
      document.dispatchEvent(event);
    });
    //Gives the reader the ability to jump to any valid page of the comic
    inputEl.addEventListener("keyup", (e) => {
      //Checks for enter key
      if (e.keyCode === 13) {
        //Makes sure that the reader inputs a number
        if (isNaN(inputEl.value)) return;
        currentPage = inputEl.value;
        const event = new CustomEvent("page-change", {
          detail: currentPage,
        });
        document.dispatchEvent(event);
      }
    });
  });
})();
