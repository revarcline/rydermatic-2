const names = require("./names.json");

export const generateName = () => {
  if (Math.floor(Math.random() * 100) == 1) {
    return "Bob Johnson!";
  } else {
    const first = names.first;
    const lastone = names.lastone;
    const lasttwo = names.lasttwo;

    const rfi = Math.floor(Math.random() * first.length);
    const rlo = Math.floor(Math.random() * lastone.length);
    const rlt = Math.floor(Math.random() * lasttwo.length);

    if (Math.floor(Math.random() * 20) == 1) {
      return `${first[rfi]} Mc${lastone[rlo]}${lasttwo[rlt]}!`;
    } else {
      return `${first[rfi]} ${lastone[rlo]}${lasttwo[rlt]}!`;
    }
  }
};
