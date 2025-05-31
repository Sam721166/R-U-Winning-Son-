const dadQuotes = [
  "Son, I see the effort you're putting in every single day. Even if no one else notices it, I do — and I'm beyond proud of you for simply showing up.",
  "Son, you’ve already come so far through storms most people wouldn’t survive. That alone makes you someone worthy of respect — and of your own pride.",
  "Son, it’s okay to feel tired, to need a break. But it’s never okay to give up — not with the fire I know you carry in your heart.",
  "You may not realize it now, son, but every struggle is shaping you into someone powerful, someone unbreakable, someone I’m damn proud to call my boy.",
  "Son, I know the world can be overwhelming sometimes, but remember — you’ve got a strength inside you that was built for exactly this.",
  "Son, failure doesn’t mean you’re broken — it means you’re brave enough to try, and strong enough to get up again when you fall.",
  "You’ve got dreams worth chasing, son. And even on the days you feel like you're falling behind, you're still moving forward.",
  "Son, your worth isn’t tied to how fast you win — it’s in how fiercely you refuse to quit, no matter how long it takes.",
  "There’s no shame in feeling lost, son. Even the best of us get turned around sometimes — what matters is that you keep walking.",
  "Son, when things feel heavy, remember: you don’t have to carry everything alone. You’ve got people who love you — and I’m one of them.",
  "Son, I know you feel pressure to be everything at once. But trust me — greatness is built one moment, one mistake, one step at a time.",
  "Son, you don’t have to prove anything to anyone — except to the kid you used to be, the one who believed you could become something great.",
  "Even when life gets messy and uncertain, son, your purpose remains. You are meant to create, to impact, and to rise — and I know you will.",
  "Son, the road you’re on may be tough, but it’s carving out a warrior. And warriors don’t quit — they adapt, they endure, and they win.",
  "Son, no matter how many times life knocks you down, what defines you is the quiet strength to rise — again and again.",
  "You’re not behind, son. You’re just growing at your own pace — and that’s exactly the way it’s supposed to be.",
  "Son, you may not feel strong today, but even surviving the hard days is proof of your resilience. That’s real power.",
  "The world will try to dull your spark, son — don’t let it. Protect your fire. It’s what makes you unstoppable.",
  "Son, don’t mistake slow progress for failure. Every small step you take forward is a quiet victory, and I see it.",
  "You’ve been through storms, son. And yet, here you are — standing, breathing, trying again. That’s something to be proud of.",
  "Son, I won’t always be right beside you, but my voice — my belief in you — will always echo behind you, pushing you onward.",
  "Son, when doubt creeps in, just remember who you are and how far you’ve come. You’re stronger than your darkest thoughts.",
  "Son, you’re not meant to be perfect — you’re meant to be real, to be honest, to be brave enough to keep going.",
  "Sometimes, son, the hardest thing isn’t the battle — it’s believing that you’re worthy of winning it. But you are.",
  "Son, even if you’re not where you want to be yet, I hope you’re proud of the man you’re becoming. I sure as hell am.",
  "The world can be loud with expectations, son, but your quiet effort speaks louder than anything. Keep going.",
  "Son, you are capable of incredible things, even when your mind tries to convince you otherwise. I believe in you completely.",
  "Son, every setback is preparing you for something greater. It may not make sense now, but one day it will.",
  "Son, life isn’t about rushing to the finish line. It’s about walking your path with courage — and you’re doing just that.",
  "Son, don’t let comparison steal your joy. You’re running a race only you were born to win.",
  "You may not have it all figured out yet, son, and that’s perfectly okay. Growth isn’t a straight line — it’s a journey.",
  "Son, I know you carry a lot on your shoulders, but I also know that you're strong enough to carry it with grace.",
  "Son, success isn’t just about results — it’s about the resilience to keep trying, and I see that in you every day.",
  "Son, your vulnerability is not weakness — it’s proof of your humanity. And that’s something powerful.",
  "Son, the world may try to harden your heart, but I hope you keep it soft — because that’s where your true strength lives.",
  "Son, even the most fearless warriors have scars. Don’t be ashamed of yours — they’re proof that you keep fighting.",
  "Son, some days you’ll feel like you’re not enough. On those days, remember that just existing, just trying — is already a victory.",
  "You don’t need to have all the answers, son. Just keep asking the right questions, and your path will become clear.",
  "Son, it’s not about how fast you move — it’s about not stopping. Keep moving forward, even if it’s only an inch at a time.",
  "Son, every morning you get out of bed and try again is a win, even if the day feels hard. That’s what resilience looks like.",
  "Son, I don’t expect you to be fearless — I just ask you to be brave enough to keep trying, even when you’re scared.",
  "Son, when life feels too big, just remember: the strongest trees grow from the hardest soil — and you are growing still.",
  "Son, no matter how loud the world gets, make sure your inner voice — the one that believes in you — speaks louder.",
  "Son, every tear you’ve cried, every failure you’ve faced — it all adds up to the man you’re becoming. And that man is worthy of pride.",
  "Son, no matter how far you think you have to go, don’t forget to look back and see how far you’ve already come.",
  "Son, don’t hide your pain — learn from it. Let it shape you, not break you.",
  "Son, your light may feel dim some days, but even stars shine brightest in the darkest skies. Keep shining.",
  "Son, your future is not written in fear — it’s carved by the choices you make today. And I trust you to make strong ones.",
  "Son, I know it’s hard to believe in yourself sometimes — so let me believe for you, until you can again.",
  "No matter what happens next, son — win or lose — I’m already proud of the man you are and the one you’re becoming."
];

// --- PAGE 1: index.html ---

if (document.getElementById('btn')) {
    (document.getElementById('btn')).onclick = function () {
        const name = document.getElementById('input1').value.trim();
        if (name.length === 0) {
            alert("Please enter your name, son!");
            return;
        }
        localStorage.setItem('sonName', name);
        window.location.href = "index2.html";
    };
}

// --- PAGE 2: index2.html ---
if (document.querySelector('.box2')) {
    const box2 = document.querySelector('.box2');
    
    let name = localStorage.getItem('sonName') || "Son";

    function showDadQuote() {
        const randomIndex = Math.floor(Math.random() * dadQuotes.length);
        const quote = dadQuotes[randomIndex];
        box2.innerHTML = `
            <p id = js-p1>Hey ${name},</p>
            <p id = js-p2>"${quote}"</p>
            <div id = js-div>
                <button id="another">Another one</button>
                <button id="goback">Go back</button>
            </div>
        `;
        document.getElementById('another').onclick = showDadQuote;
        document.getElementById('goback').onclick = () => window.location.href = "index.html";
    }

    showDadQuote();
}

