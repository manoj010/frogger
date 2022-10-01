const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas.width = 600;
canvas.height = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
canvas.width = 600;
canvas.height = 600;

//global variables
const grid = 80;
let keys = [];
let score = 0;
let collisionsCount = 0;
let frame = 0;
let gameSpeed = 1;

const particlesArray = [];
const maxParticles = 300;
const ripplesArray = [];
const carsArray = [];
const logsArray = [];

//images
const background = new Image();
background.src = '../assets/background.png';

const grass = new Image();
grass.src = '../assets/grass.png';