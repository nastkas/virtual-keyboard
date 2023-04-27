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


for (let i = 0; i < rus.length; i++) {
    let span = document.createElement('span');
    let span1 = document.createElement('span');

    isEng ? span.classList.add('caseDown', 'hidden') : span.classList.add('caseDown')

    span1.classList.add('caseUp', 'hidden')
    span.innerHTML = rusData[i];
    span1.innerHTML = rusData[i];

    if (rusData[i].search(/[а-я]/) != -1 && rusData[i].length == 1) {

        span1.innerHTML = rusData[i].toUpperCase();
    }

    rus[i].append(span)
    rus[i].append(span1)

}

for (let i = 0; i < eng.length; i++) {
    let span = document.createElement('span');
    let span1 = document.createElement('span');

    isEng ? span.classList.add('caseDown') : span.classList.add('caseDown', 'hidden')

    span1.classList.add('caseUp', 'hidden')
    span.innerHTML = arrText[i]
    span1.innerHTML = arrText[i]
    if (arrText[i].search(/[a-z]/) != -1 && arrText[i].length == 1) {

        span1.innerHTML = arrText[i].toUpperCase();
    }

    eng[i].append(span)
    eng[i].append(span1)
}

let item = document.querySelectorAll('.item');

for (let i = 0; i < item.length; i++) {

    item[i].classList[1] == 'ArrowUp' ? item[i].innerHTML = '<span class="rus hidden"><span class="caseDown hidden">▲</span><span class="caseUp hidden">▲</span></span><span class="eng"><span class="caseDown">▲</span><span class="caseUp hidden">▲</span></span>' : null;
    item[i].classList[1] == 'ArrowDown' ? item[i].innerHTML = '<span class="rus hidden"><span class="caseDown hidden">▼</span><span class="caseUp hidden">▼</span></span><span class="eng"><span class="caseDown">▼</span><span class="caseUp hidden">▼</span></span>' : null;
    item[i].classList[1] == 'ArrowLeft' ? item[i].innerHTML = '<span class="rus hidden"><span class="caseDown hidden">◄</span><span class="caseUp hidden">◄</span></span><span class="eng"><span class="caseDown">◄</span><span class="caseUp hidden">◄</span></span>' : null;
    item[i].classList[1] == 'ArrowRight' ? item[i].innerHTML = '<span class="rus hidden"><span class="caseDown hidden">►</span><span class="caseUp hidden">►</span></span><span class="eng"><span class="caseDown">►</span><span class="caseUp hidden">►</span></span>' : null;
    item[i].classList[1] == 'AltRight' ? item[i].innerHTML = '<span class="rus hidden"><span class="caseDown hidden">Alt</span><span class="caseUp hidden">Alt</span></span><span class="eng"><span class="caseDown">Alt</span><span class="caseUp hidden">Alt</span></span>' : null;
    item[i].classList[1] == 'ControlLeft' ? item[i].innerHTML = '<span class="rus hidden"><span class="caseDown hidden">Ctrl</span><span class="caseUp hidden">Ctrl</span></span><span class="eng"><span class="caseDown">Ctrl</span><span class="caseUp hidden">Ctrl</span></span>' : null;
    item[i].classList[1] == 'ControlRight' ? item[i].innerHTML = '<span class="rus hidden"><span class="caseDown hidden">Ctrl</span><span class="caseUp hidden">Ctrl</span></span><span class="eng"><span class="caseDown">Ctrl</span><span class="caseUp hidden">Ctrl</span></span>' : null;
    item[i].classList[1] == 'Win' ? item[i].innerHTML = '<span class="rus hidden"><span class="caseDown hidden">Win</span><span class="caseUp hidden">Win</span></span><span class="eng"><span class="caseDown">Win</span><span class="caseUp hidden">Win</span></span>' : null;
    item[i].classList[1] == 'Space' ? item[i].innerHTML = '<span class="rus hidden"><span class="caseDown hidden"></span><span class="caseUp hidden"></span></span><span class="eng"><span class="caseDown"></span><span class="caseUp hidden"></span></span>' : null;
}