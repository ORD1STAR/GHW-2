const crypt = new Map([
  ["a", "._"],
  ["b", "_..."],
  ["c", "_._."],
  ["d", "_.."],
  ["e", "."],
  ["f", ".._."],
  ["g", "__."],
  ["h", "...."],
  ["i", ".."],
  ["j", ".___"],
  ["k", "_._"],
  ["l", "._.."],
  ["m", "__"],
  ["n", "_."],
  ["o", "___"],
  ["p", ".__."],
  ["q", "__._"],
  ["r", "._."],
  ["s", "..."],
  ["t", "_"],
  ["u", ".._"],
  ["v", "..._"],
  ["w", ".__"],
  ["x", "_.._"],
  ["y", "_.__"],
  ["z", "__.."],
  ["0", "_____"],
  ["1", ".____"],
  ["2", "..___"],
  ["3", "...__"],
  ["4", "...._"],
  ["5", "....."],
  ["6", "_...."],
  ["7", "__..."],
  ["8", "___.."],
  ["9", "____."],
  [".", "._._._"],
  [",", "__..__"],
  ["?", "..__.."],
  ["'", ".____."],
  ["!", "_._.__"],
  ["/", "_.._."],
  ["(", "_.__."],
  [")", "_.__._"],
  ["&", "._..._"],
  [":", "___..."],
  [";", "_._._."],
  ["=", "_..._."],
  ["-", "_...._"],
  ["_", "..__._"],
  ['"', "._.._."],
  ["$", "..._.._"],
  ["@", "..__._."],
  [" ", "/"],
]);

const reversed = new Map([
  ["._", "a"],
  ["_...", "b"],
  ["_._.", "c"],
  ["_..", "d"],
  [".", "e"],
  [".._.", "f"],
  ["__.", "g"],
  ["....", "h"],
  ["..", "i"],
  [".___", "j"],
  ["_._", "k"],
  ["._..", "l"],
  ["__", "m"],
  ["_.", "n"],
  ["___", "o"],
  [".__.", "p"],
  ["__._", "q"],
  ["._.", "r"],
  ["...", "s"],
  ["_", "t"],
  [".._", "u"],
  ["..._", "v"],
  [".__", "w"],
  ["_.._", "x"],
  ["_.__", "y"],
  ["__..", "z"],
  ["_____", "0"],
  [".____", "1"],
  ["..___", "2"],
  ["...__", "3"],
  ["...._", "4"],
  [".....", "5"],
  ["_....", "6"],
  ["__...", "7"],
  ["___..", "8"],
  ["____.", "9"],
  ["._._._", "."],
  ["__..__", ","],
  ["..__..", "?"],
  [".____.", "'"],
  ["_._.__", "!"],
  ["_.._.", "/"],
  ["_.__.", "("],
  ["_.__._", ")"],
  ["._..._", "&"],
  ["___...", ":"],
  ["_._._.", ";"],
  ["_..._.", "="],
  ["_...._", "-"],
  ["..__._", "_"],
  ["._.._.", '"'],
  ["..._.._", "$"],
  ["..__._.", "@"],
  ["/", " "],
]);

function translateWord(word) {
  word = word.toLowerCase();
  let translated = "";
  for (let i = 0; i < word.length - 1; i++) {
    translated += crypt.get(word[i].toLowerCase()) + " ";
  }
  translated += crypt.get(word[word.length - 1]);
  return translated;
}

function translateMorse(morse) {
  let translated = "";
  let morseArray = morse.split(" ");
  for (let i = 0; i < morseArray.length; i++) {
    translated += reversed.get(morseArray[i]);
  }
  return translated;
}

function encryptWord() {
  var word = document.getElementById("input1").value;
  document.getElementById("translated1").value = translateWord(word);
}

function uncryptWord() {
  var morse = document.getElementById("input2").value;
  document.getElementById("translated2").value = translateMorse(morse);
}
