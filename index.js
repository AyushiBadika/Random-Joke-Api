import express from "express";

const app = express();

const PORT = 5000;

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "What do you call fake spaghetti? An impasta!",
  "Why can't you hear a pterodactyl go to the bathroom? Because the 'P' is silent!",
  "Why did the bicycle fall over? It was two-tired!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Why don't some couples go to the gym? Because some relationships don't work out.",
  "What do you call cheese that isn't yours? Nacho cheese!",
  "I would avoid the sushi if I was you. It’s a little fishy.",
  "Want to hear a joke about construction? I’m still working on it.",
  "Why don't eggs tell jokes? They'd crack each other up.",
  "What do you call a factory that makes okay products? A satisfactory.",
  "Did you hear about the guy who invented Lifesavers? He made a mint!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "Why was the math book sad? It had too many problems.",
  "Parallel lines have so much in common. It’s a shame they’ll never meet.",
  "Why don't you ever see elephants hiding in trees? Because they're so good at it!",
];

app.get("/api/joke/random", (req, res) => {
  const num = Math.floor(Math.random() * 20) + 1;
  res.send(jokes[num]);
});

app.listen(PORT, () => {
  console.log("Server hosted on PORT : " + PORT);
});
