import '../index.css';
import img from '../assets/tiger.jpg';



console.log('Hello World!');
const pCreat = document.createElement('h1');
pCreat.textContent = 'I love JavaScript';
document.body.append(pCreat);
const picture = document.createElement('img');
picture.src = img;
picture.classList.add('img-tiger');
document.body.append(picture);