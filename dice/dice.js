var reds = [];
var yellows = [];
var greens = [];
var blues = [];
var all = [];

function tallyBlue() {
  return blues.filter(b => b.state === "marked").length;
}

function tallyRed() {
  return reds.filter(b => b.state === "marked").length;
}

function tallyYellow() {
  return yellows.filter(b => b.state === "marked").length;
}

function tallyGreen() {
  return greens.filter(b => b.state === "marked").length;
}

function tallyByNumbers() {
  let count = 0;

  for (let i = 2; i <= 12; i++) {
    if (all.filter(b => b.state === "marked" && b.value == `${i}`).length == 4) {
      count++;
    }
  }

  return count;
}

function tallyByColumns() {
  let count = 0;

  for (let i = 0; i <= 11; i++) {
    if (reds[i].state === "marked"
      && yellows[i].state === "marked"
      && blues[i].state === "marked"
      && greens[i].state === "marked") {
        count++;
      }
  }

  return count;
}

function scoreCounts(count) {
  switch(count) {
    case 1:
      return 1;
    case 2:
      return 3;
    case 3:
      return 6;
    case 4:
      return 10;
    case 5:
      return 15;
    case 6:
      return 21;
    case 7:
      return 28;
    case 8:
      return 36;
    case 9:
      return 45;
    case 10:
      return 55;
    case 11:
      return 66;
    case 12:
      return 78;
    default:
      return 0;
  }
}

function scoreGame() {
  let blue = scoreCounts(tallyBlue());
  let red = scoreCounts(tallyRed());
  let yellow = scoreCounts(tallyYellow());
  let green = scoreCounts(tallyGreen());
  let columns = tallyByColumns() * 5;
  let numbers = tallyByNumbers() * 5;
  let sum = blue + red + yellow + green + columns + numbers;

  document.getElementById("blue-score").innerText = blue.toString();
  document.getElementById("red-score").innerText = red.toString();
  document.getElementById("yellow-score").innerText = yellow.toString();
  document.getElementById("green-score").innerText = green.toString();
  document.getElementById("farfig-score").innerText = "0";
  document.getElementById("number-score").innerText = numbers.toString();
  document.getElementById("column-score").innerText = columns.toString();
  document.getElementById("total-score").innerText = sum.toString();
}

function init() {
  
  reds.push(createBox("red", "2", 0, "open"));
  reds.push(createBox("red", "3", 1, "open"));
  reds.push(createBox("red", "4", 2, "open"));
  reds.push(createBox("red", "5", 3, "open"));
  reds.push(createBox("red", "6", 4, "open"));
  reds.push(createBox("red", "7", 5, "open"));
  reds.push(createBox("red", "8", 6, "open"));
  reds.push(createBox("red", "9", 7, "open"));
  reds.push(createBox("red", "10", 8, "open"));
  reds.push(createBox("red", "11", 9, "open"));
  reds.push(createBox("red", "12", 10, "open"));
  reds.push(createBox("red", "Lock", 11, "open"));

  yellows.push(createBox("yellow", "2", 0, "open"));
  yellows.push(createBox("yellow", "3", 1, "open"));
  yellows.push(createBox("yellow", "4", 2, "open"));
  yellows.push(createBox("yellow", "5", 3, "open"));
  yellows.push(createBox("yellow", "6", 4, "open"));
  yellows.push(createBox("yellow", "7", 5, "open"));
  yellows.push(createBox("yellow", "8", 6, "open"));
  yellows.push(createBox("yellow", "9", 7, "open"));
  yellows.push(createBox("yellow", "10", 8, "open"));
  yellows.push(createBox("yellow", "11", 9, "open"));
  yellows.push(createBox("yellow", "12", 10, "open"));
  yellows.push(createBox("yellow", "Lock", 11, "open"));

  greens.push(createBox("green", "12", 0, "open"));
  greens.push(createBox("green", "11", 1, "open"));
  greens.push(createBox("green", "10", 2, "open"));
  greens.push(createBox("green", "9", 3, "open"));
  greens.push(createBox("green", "8", 4, "open"));
  greens.push(createBox("green", "7", 5, "open"));
  greens.push(createBox("green", "6", 6, "open"));
  greens.push(createBox("green", "5", 7, "open"));
  greens.push(createBox("green", "4", 8, "open"));
  greens.push(createBox("green", "3", 9, "open"));
  greens.push(createBox("green", "2", 10, "open"));
  greens.push(createBox("green", "Lock", 11, "open"));

  blues.push(createBox("blue", "12", 0, "open"));
  blues.push(createBox("blue", "11", 1, "open"));
  blues.push(createBox("blue", "10", 2, "open"));
  blues.push(createBox("blue", "9", 3, "open"));
  blues.push(createBox("blue", "8", 4, "open"));
  blues.push(createBox("blue", "7", 5, "open"));
  blues.push(createBox("blue", "6", 6, "open"));
  blues.push(createBox("blue", "5", 7, "open"));
  blues.push(createBox("blue", "4", 8, "open"));
  blues.push(createBox("blue", "3", 9, "open"));
  blues.push(createBox("blue", "2", 10, "open"));
  blues.push(createBox("blue", "Lock", 11, "open"));

  all = reds.concat(blues.concat(greens.concat(yellows)));
  scoreGame();
}

function createBox(color, value, order) {
  var el;
  Array.prototype.forEach.call(document.getElementsByClassName(color), function (e) {
    if (e.innerText === value) {
      el = e;
    }
  });

  let obj = {
    color: color,
    value: value,
    order: order,
    state: "open",
    element: el
  };

  el.addEventListener("click", function() {
   if (obj.state == "open")  {
     obj.state = "marked";
     el.classList.add("marked");
   } else {
     obj.state = "open";
     el.classList.remove("marked");
   }

   scoreGame();
  });

  return obj;
}

init();
