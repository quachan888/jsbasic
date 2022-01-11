const restaurants = [
    {
        name: "ConFusion",
        takeout: false,
        rating: 5,
    },
    {
        name: "Cafe Geneva",
        takeout: true,
        rating: 6,
    },
    {
        name: "NuCafe",
        takeout: true,
        rating: 8,
    },
    {
        name: "Bob's Seafood",
        takeout: false,
        rating: 2,
    },
];

// document.getElementById("filterTakeoutBtn").addEventListener("click", filterTakeout);
// document.getElementById("filterRatingBtn").addEventListener("click", filterRatings);

function filterTakeout() {
    let rList = "\nThese restaurants offer takeout:\n";
    // The below line creates a new array with only the restaurants that offer takeout
    const hasTakeout = restaurants.filter((restaurant) => restaurant.takeout);

    // The below line takes the restaurant names from the array and makes a string
    hasTakeout.forEach((restaurant) => {
        rList += `\n${restaurant.name}`;
    });

    // The below line updates the DOM with the newly created string
    // document.getElementById("list").innerText = rList;
}

function filterRatings() {
    const rating5 = restaurants.filter((e) => e.rating >= 5);
    // console.error(rating5);
    let rList = "\nThese items with rating over 5 :\n";
    rating5.forEach((e) => {
        rList += `\n${e.name}`;
    });

    // document.getElementById("list").innerText = rList;
}

filterRatings();
