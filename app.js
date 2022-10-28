const div = document.querySelector('#id');
const secondDiv = document.createElement('div');
const thirdDiv = document.createElement('div');
const fourthDiv = document.createElement('div');

div.classList.add('container');
secondDiv.classList.add('border-block');
thirdDiv.classList.add('border-block');
fourthDiv.classList.add('border-block');
secondDiv.style.background = 'red';

div.append(secondDiv);
div.append(thirdDiv);
div.append(fourthDiv);

let count = 0;
const awaiting = 'Ожидает команды...';
const active = 'Активен!';
function rafficLight() {

    const plus = () => {
        setInterval(() => {
            count++;
            console.log(count)
            if(count === 1) {
                secondDiv.style.background = 'red';
                thirdDiv.style.background = 'white';
                thirdDiv.innerHTML = awaiting;
                fourthDiv.style.background = 'white';
                fourthDiv.innerHTML = awaiting;
                secondDiv.innerHTML = active;
                secondDiv.classList.add('activeForRed')
                fourthDiv.classList.remove('activeForGreen')
            } else if(count === 4) {
                thirdDiv.style.background = 'orange';
                secondDiv.style.background = 'white';
                secondDiv.innerHTML = awaiting;
                thirdDiv.innerHTML = active;
                thirdDiv.classList.add('activeForOrange')
                secondDiv.classList.remove('activeForRed')
            } else if(count === 8) {
                fourthDiv.style.background = 'green';
                thirdDiv.style.background = 'white';
                thirdDiv.innerHTML = awaiting;
                fourthDiv.innerHTML = active;
                fourthDiv.classList.add('activeForGreen')
                thirdDiv.classList.remove('activeForOrange')
            } else if( count === 10) {
                count = 0;
            }
        }, 1000);
    }
    plus();

}
rafficLight();