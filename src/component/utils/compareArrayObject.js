export const arrayObjectEquals = (oldArr, newArr) => {
  if (oldArr.length !== newArr.length) {
    return false;
  }

  let result = true;

  oldArr.forEach((o) => {
    newArr.forEach((n) => {
      let rv = true;
      if (o.userName === n.userName) {
        rv = rv && n['isOnline'] === o['isOnline'];
        if (!rv) {
          console.log(
            'isOnline',
            ' ',
            n['isOnline'],
            ' ',
            o['isOnline'],
          );
        }
      }

      result = result && rv;
    });
  });

  return result;
};
