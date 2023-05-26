const canvas =  document.getElementById('canvas') as HTMLCanvasElement;

const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const W = canvas.width;
const H = canvas.height;

const centerX = W / 2;
const centerY = H / 2;

// const dxElement = document.getElementById("dx") as HTMLInputElement;
// const d = Number(dxElement.value) * 10;

const d = 50;

const updateInterval = 150;
