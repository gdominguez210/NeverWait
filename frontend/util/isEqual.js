const isEqual = (obj1, obj2) => {
  let obj1Props = Object.getOwnPropertyNames(obj1);
  let obj2Props = Object.getOwnPropertyNames(obj2);

  if (obj1Props.length !== obj2.Props.length) return false;

  for (let i = 0; i < obj1Props.length; i++) {
    let propName = obj1Props[i];
    if (obj1Props[propName] !== obj2Props[propName]) return false;
  }
  return true;
};

export default isEqual;
