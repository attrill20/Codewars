

function multipleOfIndex(array) {
    let newarr = [];
  
    for (let i = 0; i < array.length; i++) {
      if (i !== 0 && array[i] % i === 0) {
        newarr.push(array[i]);
      }
    }
  
    return newarr;
  }

  // 11/6/23 - confidence booster