// function printLabel (labelObject: {label: string}):void {
//   console.log(labelObject.label);
// }

// var labelObject = {nick: 'chyingp', label: 'label: chyingp'};
// printLabel(labelObject);

// printLabel({nick: 'chyingp', label: 'label: chyingp'});

interface labelShape {
  label: string;
}

function printLabel(labelObject: labelShape): void {
  console.log(labelObject.label);
}

var labelObject = {label: 'label: chyingp', nick: 'chyingp'};
printLabel(labelObject);