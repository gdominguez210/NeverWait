export const scrollTo = params => {
  const { element, to, duration, scrollDirection } = params;
  let start = element[scrollDirection],
    change = to - start,
    increment = 1000 / 60;
  let animateScroll = elapsedTime => {
    elapsedTime += increment;
    let position = easeInOut(elapsedTime, start, change, duration);
    element[scrollDirection] = position;
    if (elapsedTime < duration) {
      window.requestAnimationFrame(animateScroll.bind(null, elapsedTime));
    }
  };

  //   animateScroll(0);
  window.requestAnimationFrame(animateScroll.bind(null, 0));
};

const easeInOut = (currentTime, start, change, duration) => {
  currentTime /= duration / 2;
  if (currentTime < 1) {
    return (change / 2) * currentTime * currentTime + start;
  }
  currentTime -= 1;
  return (-change / 2) * (currentTime * (currentTime - 2) - 1) + start;
};
