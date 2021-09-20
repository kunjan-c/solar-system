var planetContainer = document.getElementById("planet-container");
var planet = document.getElementsByClassName("planet");
var planetNameboxContainer = document.getElementById("palnet-namebox-container");
var planetDetailsContainer = document.getElementById("planets-details-container");
var clickPlanetImg = document.getElementById("clickplanetimg")
var clickPlanetName = document.getElementById("clickplsnet-name")
var cleckPlanetLength = document.getElementById("length-of-year")
var clickPlanetDisc = document.getElementById("discription");

var planets = [{
        "id": 0,
        "name": "sun",
        "img": "./Plannet/Sun.png",
        "lengthOfYear": "230 Million earth Year",
        "discription": "Our Sun – the heart of our solar system – is a yellow dwarf star, a hot ball of glowing gases. Its gravity holds the solar system together, keeping everything from the biggest planets to the smallest particles of debris in its orbit. Electric currents in the Sun generate a magnetic field that is carried out through the solar system by the solar wind – a stream of electrically charged gas blowing outward from the Sun in all directions.The Sun is the largest object in our solar system, comprising 99.8% of the system’s mass. Though it seems huge to us, the Sun isn't as large as other types of stars.Earth orbits the Sun from a distance of about 93 million miles. The connection and interactions between the Sun and Earth drive our planet's seasons, ocean currents, weather, climate, radiation belts, and aurorae. Though it is special to us, there are billions of stars like our Sun scattered across the Milky Way galaxy."
    },
    {
        "id": 1,
        "name": "mercury",
        "img": "./images/mercury.png",
        "lengthOfYear": "88 Earth Days",
        "discription": "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon.The Latest Comet Atlas May Have Been a Blast From the Past.From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.Because of Mercury's elliptical – egg-shaped – orbit, and sluggish rotation, the Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. The same thing happens in reverse at sunset."
    },
    {
        "id": 2,
        "name": "venus",
        "img": "./images/venus.png ",
        "lengthOfYear": "225 Earth Days",
        "discription": "Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s one of the four inner, terrestrial (or rocky) planets, and it’s often called Earth’s twin because it’s similar in size and density. These are not identical twins, however – there are radical differences between the two worlds.Venus has a thick, toxic atmosphere filled with carbon dioxide and it’s perpetually shrouded in thick, yellowish clouds of sulfuric acid that trap heat, causing a runaway greenhouse effect. It’s the hottest planet in our solar system, even though Mercury is closer to the Sun. Surface temperatures on Venus are about 900 degrees Fahrenheit (475 degrees Celsius) – hot enough to melt lead. The surface is a rusty color and it’s peppered with intensely crunched mountains and thousands of large volcanoes. Scientists think it’s possible some volcanoes are still active."
    }, {
        "id": 3,
        "name": "earth",
        "img": " ./images/earth.png",
        "lengthOfYear": "365 Earth Days",
        "discription": "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”"
    }, {
        "id": 4,
        "name": "mars",
        "img": "./images/mars.png",
        "lengthOfYear": "1.88 Earth Years",
        "discription": "Mars is the fourth planet from the Sun – a dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past.Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape."
    }, {
        "id": 5,
        "name": "jupiter",
        "img": "./images/jupiter.png",
        "lengthOfYear": "11.86 Earth Years",
        "discription": "Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years."
    }, {
        "id": 6,
        "name": "saturn",
        "img": "./Plannet/Final_Saturn.png",
        "lengthOfYear": "29.45 Earth Years",
        "discription": "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system.Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's.Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium."
    }, {
        "id": 7,
        "name": "uranus",
        "img": "./images/uranus.png",
        "lengthOfYear": "84 Earth Years",
        "discription": "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode. Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead, the scientific community accepted Bode's suggestion to name it Uranus, the Greek god of the sky, as suggested by Bode.​"
    }, {
        "id": 8,
        "name": "neptune",
        "img": "./images/neptune.png",
        "lengthOfYear": "164.81 Earth Years",
        "discription": "Dark, cold, and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846."
    },
]

function hidePlanet() {
    document.getElementById("planet-container").style.display = "none";
}

function showPlanet() {
    document.getElementById("planet-container").style.display = "block";
}

function onplanetClick() {
    for (var o = 0; o < planets.length; o++) {
        if (planets[o].name === this.classList[0]) {
            planetNameboxContainer.innerHTML = "";
            console.log(this.classList[0]);
            var planetNameContainer = document.createElement("div");
            planetNameContainer.classList.add("palnetNameBox");

            var planetNameText = document.createElement("div");
            planetNameText.classList.add("planetNameText");
            planetNameText.innerText = "";
            planetNameText.innerText = this.classList[0];

            planetNameContainer.appendChild(planetNameText);
            //  planetContainer.appendChild(planetNameContainer);
            planetNameboxContainer.appendChild(planetNameContainer)
            //  planetNameboxContainer.appendChild(planetNameContainer)
            // planetContainer.appendChild(planetNameText);

        }
    }
}

function showplanetDeatils() {
    console.log(this);
    hidePlanet();
    document.getElementById("planets-details-container").style.display = "block";
    document.getElementById("planets-details-container").style.display = "flex";

    for (var j = 0; j < planets.length; j++) {
        if (planets[j].name === this.classList[0]) {
            clickPlanetImg.src = planets[j].img;
            clickPlanetName.innerText = planets[j].name;
            cleckPlanetLength.innerText = planets[j].lengthOfYear;
            clickPlanetDisc.innerText = planets[j].discription;
        }
    }
}

function hidePlanetDetail() {
    document.getElementById("planets-details-container").style.display = "none";
}

function renderSun(planet) {
    var sunContainer = document.createElement("div");
    sunContainer.classList.add("sun-conatiner");

    var whiteBorder2 = document.createElement("div");
    whiteBorder2.classList.add("whiteborder2half1");

    var whiteBorder1 = document.createElement("div");
    whiteBorder1.classList.add("whiteborder1half");

    var sunPlanet = document.createElement("img")
    sunPlanet.classList.add("sun")
    sunPlanet.src = planet.img;
    sunPlanet.onmouseover = onplanetClick;
    sunPlanet.onclick = showplanetDeatils;



    var whiteBorder3 = document.createElement("div");
    whiteBorder3.classList.add("whiteborder2half");

    var whiteBorder4 = document.createElement("div");
    whiteBorder4.classList.add("whiteborder2half2");

    var sunNametext = document.createElement("div");
    sunNametext.classList.add("SunNameText")

    sunContainer.appendChild(whiteBorder2);
    sunContainer.appendChild(whiteBorder1);
    sunContainer.appendChild(sunPlanet);
    sunContainer.appendChild(whiteBorder3);
    sunContainer.appendChild(whiteBorder4);
    planetContainer.appendChild(sunContainer);
}

function renderPlanets() {
    for (var u = 0; u < planets.length; u++) {
        // switch(planets[u].name) {
        //     case "sun":
        //         renderSun(planets[u])
        //     break;
        //     default:
        //         var innerPlanetContainer = document.createElement("div");
        //         innerPlanetContainer.classList.add(planets[u].name + "-container");
        //         var planetImgContainer = document.createElement("div");
        //         planetImgContainer.classList.add(planets[u].name + "-img-container");
        //         var planetImg = document.createElement("img");
        //         planetImg.classList.add(planets[u].name);
        //         planetImg.src = planets[u].img
        //         planetImgContainer.appendChild(planetImg);
        //         innerPlanetContainer.appendChild(planetImgContainer);
        //         planetContainer.appendChild(innerPlanetContainer);
        //         planetImg.onmouseover = onplanetClick;    
        //     break;            
        // }

        if (planets[u].name === "sun") {
            renderSun(planets[u])
        } else {
            var innerPlanetContainer = document.createElement("div");
            innerPlanetContainer.classList.add(planets[u].name + "-container");
            var planetImgContainer = document.createElement("div");
            planetImgContainer.classList.add(planets[u].name + "-img-container");
            var planetImg = document.createElement("img");
            planetImg.classList.add(planets[u].name);
            planetImg.src = planets[u].img
            planetImgContainer.appendChild(planetImg);
            innerPlanetContainer.appendChild(planetImgContainer);
            planetContainer.appendChild(innerPlanetContainer);
            planetImg.onmouseover = onplanetClick;
            planetImg.onclick = showplanetDeatils;
        }
    }
}

function oneyeIconClick() {
    hidePlanetDetail();
    showPlanet();
}

function onScreenLoad() {
    // showplanetDeatils();
    renderPlanets();
    hidePlanetDetail();
}