const textAreas = document.getElementById('textArea');

const boldBtn = document.getElementById('bold');
const italic = document.getElementById('italic');
const underline = document.getElementById('underline');
boldBtn.addEventListener('click', () => {
  if (textAreas.style.fontWeight == 'bold') {
    textAreas.style.fontWeight = 'normal';
    boldBtn.style.backgroundColor = 'transparent';
  } else {
    textAreas.style.fontWeight = 'bold';
    boldBtn.style.backgroundColor = 'blue';
  }
});

italic.addEventListener('click', () => {
  if (textAreas.style.fontStyle == 'italic') {
    textAreas.style.fontStyle = 'normal';
    italic.style.backgroundColor = 'transparent';
  } else {
    textAreas.style.fontStyle = 'italic';
    italic.style.backgroundColor = 'blue';
  }
});
underline.addEventListener('click', () => {
  if (textAreas.style.textDecoration == 'underline') {
    textAreas.style.textDecoration = 'none';
    underline.style.backgroundColor = 'transparent';
  } else {
    textAreas.style.textDecoration = 'underline';
    underline.style.backgroundColor = 'blue';
  }
});

// alignment js section

const leftAlign = document.getElementById('left');
const centerAlign = document.getElementById('center');
const rightAlign = document.getElementById('right');

leftAlign.addEventListener('click', () => {
  textAreas.style.textAlign = 'left';
  leftAlign.style.backgroundColor = 'blue';
  centerAlign.style.backgroundColor = 'transparent';
  rightAlign.style.backgroundColor = 'transparent';
});

centerAlign.addEventListener('click', () => {
  if (textAreas.style.textAlign == 'center') {
    textAreas.style.textAlign = 'left';
    centerAlign.style.backgroundColor = 'transparent';
  } else {
    textAreas.style.textAlign = 'center';
    centerAlign.style.backgroundColor = 'blue';
    leftAlign.style.backgroundColor = 'transparent';
    rightAlign.style.backgroundColor = 'transparent';
  }
});

rightAlign.addEventListener('click', () => {
  textAreas.style.textAlign = 'left';
  leftAlign.style.backgroundColor = 'blue';

  if (textAreas.style.textAlign == 'right') {
    textAreas.style.textAlign = 'left';
    rightAlign.style.backgroundColor = 'transparent';
  } else {
    textAreas.style.textAlign = 'right';
    rightAlign.style.backgroundColor = 'blue';
    leftAlign.style.backgroundColor = 'transparent';
    centerAlign.style.backgroundColor = 'transparent';
  }
});

// font size section
const numb = document.getElementById('number');

numb.addEventListener('keyup', e => {
  const eventValue = e.target.value;
  textAreas.style.fontSize = `${eventValue}px`;
});
numb.addEventListener('click', e => {
  const eventValue = e.target.value;
  textAreas.style.fontSize = `${eventValue}px`;
});

// color section
const colors = document.getElementById('color');

colors.addEventListener('change', e => {
  const eventvalue = e.target.value;
  textAreas.style.color = eventvalue;
});

// font family section

const fonts = document.getElementById('fontFamilySelect');
fonts.addEventListener('change', e => {
  const eventvalue = e.target.value;
  textAreas.style.fontFamily = eventvalue;
});
