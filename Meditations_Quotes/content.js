
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generateBtn').addEventListener('click', generateQuote);
});
  
function generateQuote() {
    const quotes = [
      "He does only what is his to do, and considers constantly what the world has in store for him—doing his best, and trusting that all is for the best. For we carry our fate with us -and it carries us.",

      "To love only what happens, what was destined. No greater harmony.",
      
      "For there is a single harmony. Just as the world forms a single body comprising all bodies, so fate forms a single purpose, comprising all purposes.",
      
      "To watch the courses of the stars as if you revolved with them. To keep constantly in mind how the elements alter into one another. Thoughts like this wash off the mud of life below.",
      
      "No one can keep you from living as your nature requires. Nothing can happen to you that is not required by Nature.",
      
      "The others obey their own lead, follow their own impulses. Don’t be distracted. Keep walking. Follow your own nature, and follow Nature—along the road they share.",
      
      "Doctors keep their scalpels and other instruments handy, for emergencies. Keep your philosophy ready too—ready to understand heaven and earth. In everything you do, even the smallest thing, remember the chain that links them. Nothing earthly succeeds by ignoring heaven, nothing heavenly by ignoring the earth.",
      
      "Love the discipline you know, and let it support you. Entrust everything willingly to the gods, and then make your way through life—no one’s master and no one’s slave.",
      
      "People try to get away from it all—to the country, to the beach, to the mountains. You always wish that you could too. Which is idiotic: you can get away from it anytime you like. By going within. Nowhere you can go is more peaceful—more free of interruptions—than your own soul.",
      
      "What injures the hive injures the bee.",
      
      "Whatever happens to you is for the good of the world. That would be enough right there. But if you look closely you’ll generally notice something else as well: whatever happens to a single person is for the good of others.",
      
      "In short, know this: Human lives are brief and trivial. Yesterday a blob of semen; tomorrow embalming fluid, ash.",
      
      "Indifference to external events. And a commitment to justice in your own acts. Which means: thought and action resulting in the common good. What you were born to do.",
      
      "When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. They are like this because they can’t tell good from evil. But I have seen the beauty of good, and the ugliness of evil, and have recognized that the wrongdoer has a nature related to my own—not of the same blood or birth, but the same mind, and possessing a share of the divine.",
      
      "Fight to be the person philosophy tried to make you. Revere the gods; watch over human beings. Our lives are short. The only rewards of our existence here are an unstained character and unselfish acts.",
      
      "Mastery of reading and writing requires a master. Still more so life.",
      
      "People who labor all their lives but have no purpose to direct every thought and impulse toward are wasting their time—even when hard at work.",
      
      "At dawn, when you have trouble getting out of bed, tell yourself: ‘I have to go to work—as a human being. What do I have to complain of, if I’m going to do what I was born for— the things I was brought into the world to do? Or is this what I was created for? To huddle under the blankets and stay warm?",
      
      "You don’t love yourself enough. Or you’d love your nature too, and what it demands of you. People who love what they do wear themselves down doing it, they even forget to wash or eat.",
      
      "It can ruin your life only if it ruins your character. Otherwise it cannot harm you—inside or out.",
      
      "Perfection of character: to live your last day, every day, without frenzy, or sloth, or pretense.",
      
      "The things you think about determine the quality of your mind. Your soul takes on the color of your thoughts.",
      
      "The mind in itself has no needs, except for those it creates itself. Is undisturbed, except for its own disturbances. Knows no obstructions, except those from within.",
      
      "The mind without passions is a fortress. No place is more secure. Once we take refuge there we are safe forever. Not to see this is ignorance. To see it and not seek safety means misery.",
      
      "That things have no hold on the soul. They stand there unmoving, outside it. Disturbance comes only from within—from our own perceptions.",
      
      "Choose not to be harmed—and you won’t feel harmed. Don’t feel harmed and you haven’t been.",
      
      "Objective judgment, now, at this very moment. Unselfish action, now, at this very moment. Willing acceptance—now, at this very moment—of all external events. That’s all you need.",

      "I can control my thoughts as necessary; then how can I be troubled? What is outside my mind means nothing to it. Absorb that lesson and your feet stand firm. You can return to life. Look at things as you did before. And life returns.",
      
      "External things are not the problem. It’s your assessment of them. Which you can erase right now.",
      
      "Your three components: body, breath, mind. Two are yours in trust; to the third alone you have clear title.",
      
      "To move from one unselfish action to another with God in mind. Only there, delight and stillness.",
      
      "For every action, ask: How does it affect me? Could I change my mind about it? But soon I’ll be dead, and the slate’s empty. So this is the only question: Is it the action of a responsible being, part of society, and subject to the same decrees as God?",
      
      "To stop talking about what the good man is like, and just be one.",
      
      "Be satisfied with even the smallest progress, and treat the outcome of it all as unimportant.",
      
      "You see how few things you have to do to live a satisfying and reverent life? If you can manage this, that’s all even the gods can ask of you.",
      
      "If you seek tranquillity, do less.’ Or (more accurately) do what’s essential what the logos of a social being requires, and in the requisite way. Which brings a double satisfaction: to do less, better. Because most of what we say and do is not essential. If you can eliminate it, you’ll have more time, and more tranquillity. Ask yourself at every moment, ‘Is this necessary?’",
      
      "The impediment to action advances action. What stands in the way becomes the way.",
      
      "To bear in mind constantly that all of this has happened before. And will happen again—the same plot from beginning to end, the identical staging. Produce them in your mind, as you know them from experience or from history…All just the same. Only the people different.",
      
      "Forget everything else. Keep hold of this alone and remember it: Each of us lives only now, this brief instant. The rest has been lived already, or is impossible to see.",
      
      "Think of yourself as dead. You have lived your life. Now take what’s left and live it properly.",

      "Please hire me"
    ];
  
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById('quoteDisplay').textContent = randomQuote;
}
