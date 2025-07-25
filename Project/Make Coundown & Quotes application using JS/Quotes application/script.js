let arr = [
    "Bloom where you’re planted..🌸" ,
    "Do small things with great love..❤️",
    "Happiness is homemade..🏡",
    "Home is a feeling, not a place..🕊️",
    "The stars whispered back..⭐",
    "Quiet mornings, soft hearts..☁️",
    "Collect moments, not things..📸",
    "Sunshine mixed with a little sass..☀️",
    "Wander often, wonder always..🌍",
    "Start where you are..🚀",
    "Dream big. Start small..🌙",
    "Ocean eyes, endless skies..🌊",
    "Little things matter most..🕊️",
    "Love never fails..💕",
    "Peace begins with a smile..🌸",
    "Collecting sunsets, not things..🌇",
    "Thank you for visiting..!🙏",
];

let num = 0;
let box = document.getElementById("box");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    clearInterval(interval);
});
let interval = setInterval(() => {
    num+=1;
    if(num >= arr.length){
        num = 0;
    }
    document.getElementById("box").textContent = arr[num];
}, 1000);

