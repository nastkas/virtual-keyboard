function createElem(elem) {
    let el = document.createElement(elem)
    return el;
  }

function prepend(elem, classname, parent) {
  let input = createElem(elem);
  input.classList.add(classname);
  document.querySelector(`${parent}`).prepend(input)
}

function append(elem, classname, parent, text = '') {
  let input = createElem(elem);
  input.className = classname;
  input.innerHTML = text;
  document.querySelector(`${parent}`).append(input)
}

let isEng = JSON.parse(localStorage.getItem('isEng'))

let arrData = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus",
    "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight",
    "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
    "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft",
    "WinLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];

let arrText = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Delete", "CapsLock",
    "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "ShiftLeft", "z", "x", "c", "v",
    "b", "n", "m", ",", ".", "/", "ArrowUp", "ShiftRight", "ControlLeft", "Win", "Alt", "Space",
    "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];

let rusData = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з",
    "х", "ъ", "\\", "Delete", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "ShiftLeft", "я", "ч", "с", "м", "и", "т",
    "ь", "б", "ю", ".", "ArrowUp", "ShiftRight", "ControlLeft", "Win", "Alt", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];



prepend('div', 'wrapper', 'body');
prepend('textarea', 'textarea', '.wrapper');
append('div', 'keyboard', '.wrapper');
document.querySelector('.textarea').setAttribute("rows", 10);
document.querySelector('.textarea').setAttribute("cols", 100);

let textarea = document.querySelector('.textarea')

for (let i = 0; i < arrText.length; i++) {
    append('div', `item ${arrData[i]}`, '.keyboard');
    if (isEng) {
        append('span', `rus hidden`, `.${arrData[i]}`);
        append('span', `eng`, `.${arrData[i]}`);
    } else {
        append('span', `rus`, `.${arrData[i]}`);
        append('span', `eng hidden`, `.${arrData[i]}`);
    }

}

let rus = document.querySelectorAll('.rus')
let eng = document.querySelectorAll('.eng')
