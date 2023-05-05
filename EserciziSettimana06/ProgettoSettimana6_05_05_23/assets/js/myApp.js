const courses = [
    {
        courseName: 'GraphoL: Introduction to graphQL for beginners',
        courseImage: 'assets/img/course-graphql.jpg',
        author: 'Brooklyn Simmons',
        authorImage: 'assets/img/avatar-5.jpg',
        hours: 2,
        minutes: 40,
        difficulty: 'Advance',
        rating: 2.5,
        review: 1.500,
        price: 600,
        sales: 500,
        tags: ['recommended']
    },
    {
        courseName: 'A Complete Beginner\'s Guide to JavaScript',
        courseImage: 'assets/img/course-javascript.jpg',
        author: 'Jenny Wilson',
        authorImage: 'assets/img/avatar-1.jpg',
        hours: 4,
        minutes: 10,
        difficulty: 'Advance',
        rating: 3.5,
        review: 7.500,
        price: 700,
        sales: 850,
        tags: ['recommended', 'popular']
    },
    {
        courseName: 'Beginning Node.js, Express & MongoDB Development',
        courseImage: 'assets/img/course-node.jpg',
        author: 'Sina Rey',
        authorImage: 'assets/img/avatar-3.jpg',
        hours: 2,
        minutes: 00,
        difficulty: 'Intermediate',
        rating: 4.0,
        review: 15.700,
        price: 800,
        sales: 950,
        tags: ['recommended', 'popular', 'trending']
    },
    {
        courseName: 'Laravel: The Ultimate Beginner\'s Guide to Lear',
        courseImage: 'assets/img/course-laravel.jpg',
        author: 'Sobo Rikhan',
        authorImage: 'assets/img/avatar-7.jpg',
        hours: 1,
        minutes: 00,
        difficulty: 'Beginner',
        rating: 4.5,
        review: 2.500,
        price: 170,
        sales: 220,
        tags: ['recommended', 'trending']
    },
    {
        courseName: 'HTML FUll Course - Build a Website Tutorial',
        courseImage: 'assets/img/course-html.jpg',
        author: 'Wiston Wilson',
        authorImage: 'assets/img/avatar-4.jpg',
        hours: 3,
        minutes: 16,
        difficulty: 'Beginner',
        rating: 3.0,
        review: 1.600,
        price: 550,
        sales: 700,
        tags: ['popular', 'trending']
    },
    {
        courseName: 'How to easiv create a WeOSITe wITa Reac',
        courseImage: 'assets/img/course-react.jpg',
        author: 'April Noms',
        authorImage: 'assets/img/avatar-2.jpg',
        hours: 3,
        minutes: 55,
        difficulty: 'Advance',
        rating: 4.5,
        review: 1.500,
        price: 600,
        sales: 750,
        tags: ['popular']
    },
    {
        courseName: 'ReVolutIonize how you build the wel',
        courseImage: 'assets/img/course-gatsby.jpg',
        author: 'Jenny Wilson',
        authorImage: 'assets/img/avatar-6.jpg',
        hours: 1,
        minutes: 46,
        difficulty: 'Intermediate',
        rating: 2.0,
        review: 16.500,
        price: 800,
        sales: 850,
        tags: ['trending']
    },
]

// -------------- STARS --------------
const fullStar = '<i class="bi bi-star-fill star"></i>';
const halfStar = '<i class="bi bi-star-half star"></i>';
const emptyStar = '<i class="bi bi-star star"></i>';

// -------------- STARS SET --------------
function starSet(rating){
    let result = '';
    let intNumber = Math.floor(rating);

    for(let i = 0; i < 5; i++){

        if(i < intNumber) result += fullStar;

        if(i === intNumber) (rating - intNumber !== 0) ? result += halfStar : result += emptyStar;

        if(i > intNumber) result += emptyStar;
    }

    return result;
}

// -------------- GENERATE CARD --------------

function cardGenerator(course){

    // card generation
    const generatedCard = document.createElement('div');

    // populationg card
    generatedCard.innerHTML = `<div class="col mb-2"><div class="card border-0 shadow-lg"><img src="${course.courseImage}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${course.courseName}</h5><p class="date"><span><i class="bi bi-clock"></i></span><span> ${course.hours}h</span><span> ${course.minutes}m</span> <span><i class="bi bi-bar-chart-fill"></i></span> <span>${course.difficulty}</span></p><p>${starSet(course.rating)} <span class="star">${course.rating.toFixed(1)}</span> <span class="grey">(${course.review.toFixed(3)})</span></p><p>${course.price}$ <del class="deleted">${course.sales}$</del></p></div><div class="card-body d-flex border-top align-items-center justify-content-between"><p class="m-0"><span><img class="tutor rounded-circle me-2" src="${course.authorImage}" alt=""></span>${course.author}</p><i class="bi bi-bookmark"></i></div></div></div>`;

    return generatedCard;
}

// -------------- POPULATOR --------------


// -------------- POPULATE BOXES --------------
const recommendedBox = document.getElementById('recommendedBox');
const popularBox = document.getElementById('popularBox');
const trendingBox = document.getElementById('trendingBox');

//card counter
let c = 0;
let y = 0;
let z = 0;

// populating boxes
courses.forEach((course) => {

    // populate recimmended
    if(course.tags.includes('recommended')){

        // counter increase
        c++;

        // generate & insert child
        recommendedBox.appendChild(cardGenerator(course));

        // last position hidden
        if(c > 2){
            recommendedBox.lastElementChild.classList.add('d-none', 'd-md-block');
            if(c === 4) c = 0;
        }
    }

    // populate popular
    if(course.tags.includes('popular')){

        // counter increase
        y++;

        // generate & insert child
        popularBox.appendChild(cardGenerator(course));

        // last position hidden
        if(y > 2){
            popularBox.lastElementChild.classList.add('d-none', 'd-md-block');
            if(y === 4) y = 0;
        }
    }

    //populate trending
    if(course.tags.includes('trending')){

        // counter increase
        z++;

        // generate & insert child
       trendingBox.appendChild(cardGenerator(course));

        // last position hidden
        if(z > 2){
            trendingBox.lastElementChild.classList.add('d-none', 'd-md-block');
            if(z === 4) z = 0;
        }
    }
    
})