// Место для первой задачи
function sayHello() {
  return "Привет, Антон!";
}

// Место для второй задачи
function returnNeighboringNumbers(Number) {
  return [Number - 1, Number, Number + 1];
}

// Место для третьей задачи
function getMathResult(a, kol) {
  let str = a + "---";
  let b = "---";
  let c = a;
  if (typeof kol === "number") {
    for (var i = 1; i <= kol; i++) {
      if (kol - i > 1) {
        a += c;
        str += a + b;
      } else {
        a += c;
        str += a;
        break;
      }
    }
  } else {
    str = a;
  }
  console.log(str);
  return str;
}
getMathResult(5, "3");

// Место для первой задачи
function calculateVolumeAndArea(a) {
  let str;
  if (isNaN(a) || a % 1 !== 0 || a < 0) {
    str = "При вычислении произошла ошибка";
  } else {
    let V = a * a * a;
    let S = 6 * (a * a);
    str = "Объем куба: " + V + ", " + "площадь всей поверхности: " + S;
  }
  return str;
}
// Место для второй задачи
function getCoupeNumber(a) {
  let b;
  if (isNaN(a) || a % 1 !== 0 || a < 0) {
    b = "Ошибка. Проверьте правильность введенного номера места";
  } else {
    if (a === 0 || a > 36) {
      b = "Таких мест в вагоне не существует";
    } else {
      if (a <= 4 && a > 0) {
        b = 1;
      }
      if (a <= 7 && a > 4) {
        b = 2;
      }
      if (a <= 11 && a > 7) {
        b = 3;
      }
      if (a <= 15 && a > 11) {
        b = 4;
      }
      if (a <= 19 && a > 15) {
        b = 5;
      }
      if (a <= 24 && a > 19) {
        b = 6;
      }
      if (a <= 28 && a > 24) {
        b = 7;
      }
      if (a <= 32 && a > 28) {
        b = 8;
      }
      if (a <= 36 && a > 32) {
        b = 9;
      }
    }
  }
  return b;
}

// Место для первой задачи
function getTimeFromMinutes(min) {
  let hour = 0;
  if (isNaN(min) || min % 1 !== 0 || min < 0) {
    hour = "Ошибка, проверьте данные";
  } else {
    if (min < 60) {
      hour = "Это " + 0 + " часов и " + min + " минут";
    } else {
      for (let i = 1; 59 < min; i++) {
        min -= 60;
        if (i === 1) {
          hour = "Это " + i + " час и " + min + " минут";
        }
        if (i > 1) {
          hour = "Это " + i + " часа и " + min + " минут";
        }
      }
    }
  }
  console.log(hour);
  return hour;
}
getTimeFromMinutes(50);

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
  let Ot;
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number" ||
    typeof d !== "number" ||
    a === undefined ||
    b === undefined ||
    c === undefined ||
    d === undefined
  ) {
    Ot = 0;
  } else {
    if (a > b && a > c && a > d) {
      Ot = a;
    } else {
      if (b > a && b > c && b > d) {
        Ot = b;
      } else {
        if (c > a && c > b && c > d) {
          Ot = c;
        } else {
          if (d > a && d > b && d > c) {
            Ot = d;
          }
        }
      }
    }
  }
  console.log(Ot);
  return Ot;
}
findMaxNumber(1, 5, "0", "10");
