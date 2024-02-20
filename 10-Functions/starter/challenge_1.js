const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userAnswer = prompt(`what is your favourite programming language?
      0: JavaScript
      1: Python
      2: Rust
      3: C++
      (write Option Number)`);
    let checkUserAnswer = Number(userAnswer);
    this.answers[checkUserAnswer] += 1;
    console.log(poll);
    this.displayResults('string');
  },
  displayResults(type) {
    type = type.toLowerCase();
    const answer =
      type == 'array'
        ? this.answers
        : `Posll results are ${this.answers[0]},${this.answers[1]},${this.answers[2]} and ${this.answers[3]}`;
    console.log(answer);
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
s;
