const isEqual = (obj1, obj2) => {
  let obj1Props = Object.getOwnPropertyNames(obj1);
  let obj2Props = Object.getOwnPropertyNames(obj2);

  if (obj1Props.length !== obj2Props.length) return false;

  for (let i = 0; i < obj1Props.length; i++) {
    let propName = obj1Props[i];
    if (typeof obj1[propName] === "object") {
      let result = isEqual(obj1[propName], obj2[propName]);
      if (result) {
        continue;
      } else {
        return false;
      }
    } else {
      if (obj1[propName] !== obj2[propName]) return false;
    }
  }
  return true;
};
export default isEqual;
