const sentence = "The sun is shining, the tank is clean, and we are getting out of here!";

const loopThrough = (text) => {
  let totalTime = 0;
  for (const i in text) {
    setTimeout(() => {
      process.stdout.write(text[i]);
    }, i * 50);
    totalTime = i * 50;
  }
  setTimeout(() => {
    console.log('\n');
  }, totalTime + 50);
};

loopThrough(sentence);