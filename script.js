AOS.init();

const toggles = document.getElementById("toggles");
let nav = document.getElementById("nav");

toggles.addEventListener("click", function () {
    nav.classList.toggle("-right-full")
    nav.classList.toggle("right-0")
})
// let verse = document.querySelector(".verse");
// let versegen = document.querySelector(".verse-location");
// $(document).ready(function () {
//     generate();

//     function generate() {
//         var quotes = ["Proverbs 9:10@The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding.",
//             "Psalm 34:8@O taste and see that the LORD is good; how blessed is the man who takes refuge in Him!",
//             "Joshua 1:9@Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
//             "1 Thessalonians 5:16-18@I can do everything through him who gives me strength.",
//             "Proverbs 3:5-6@Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight.",
//             "Psalm 25:4-5@Show me Your ways, LORD, teach me Your paths. Guide me in Your truth and teach me, for You are God my Saviour, and my hope is in You all day long.",
//             "Colossians 3:23@Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
//             "John Wooden@Don\’t let what you cannot do interfere with what you can do.",
//             "Jim Ryun@Motivation is what gets you started. Habit is what keeps you going.",
//             "R. Collier@Success is the sum of small efforts, repeated.",
//             "A.A. Milne@You are braver than you believe, stronger than you seem and smarter than you think.",
//             "Albert Einstein@Learn from yesterday. Live for today. Hope for tomorrow.",
//             "Pelé@Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing, or learning to do",
//             "Stephen Hawking@However difficult life may seem, there is always something you can do and succeed at.",
//             "O. J. Simpson@The day you take complete responsibility for yourself, the day you stop making any excuses, that’s the day you start to the top.",
//             "Dwayne Johnson@Success isn\’t overnight. It\’s when every day you get a little better than the day before. It all adds up.",
//             "Arthur Ashe@Start where you are. Use what you have. Do what you can.",
//         ];


//         randomVerse = quotes[Math.floor(Math.random() * quotes.length)];
//         var quote = randomVerse.split("@");
//         verse.text(quote[1]);
//         versegen.text(quote[0]);
//     }

// });

var quotes = ["Proverbs 9:10 - The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding.",
             "Psalm 34:8 - O taste and see that the LORD is good; how blessed is the man who takes refuge in Him!",
             "Joshua 1:9 - Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.",
             "1 Thessalonians 5:16-18 - I can do everything through him who gives me strength.",
             "Proverbs 3:5-6 - Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight.",
             "Psalm 25:4-5 - Show me Your ways, LORD, teach me Your paths. Guide me in Your truth and teach me, for You are God my Saviour, and my hope is in You all day long.",
             "Colossians 3:23 - Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
             "John Wooden - Don\’t let what you cannot do interfere with what you can do.",
             "Jim Ryun - Motivation is what gets you started. Habit is what keeps you going.",
             "R. Collier - Success is the sum of small efforts, repeated.",
             "A.A. Milne - You are braver than you believe, stronger than you seem and smarter than you think.",
             "Albert Einstein - Learn from yesterday. Live for today. Hope for tomorrow.",
             "Pelé - Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing, or learning to do",
             "Stephen Hawking - However difficult life may seem, there is always something you can do and succeed at.",
             "O. J. Simpson - The day you take complete responsibility for yourself, the day you stop making any excuses, that’s the day you start to the top.",
             "Dwayne Johnson - Success isn\’t overnight. It\’s when every day you get a little better than the day before. It all adds up.",
             "Arthur Ashe - Start where you are. Use what you have. Do what you can.",
         ];
function generate() {
         var randomVerse = Math.floor(Math.random() * quotes.length);
         document.querySelector('.verse-display').innerHTML = quotes[randomVerse];

}
