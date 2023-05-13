const canvas =  document.getElementById('canvas') as HTMLCanvasElement;

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const W = canvas.width;
const H = canvas.height;

const centerX = W / 2;
const centerY = H / 2;

drawHexagon();