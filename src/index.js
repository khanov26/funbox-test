import './styles.scss';

const foodBoxes = document.querySelectorAll('.food-box');
const buyButtons = document.querySelectorAll('.cat-food__buy');

const toggleSelectBox = event => {
    const foodBoxesItem = event.target.closest('.cat-food__boxes-item');
    foodBoxesItem.classList.toggle('cat-food__boxes-item--selected')
    foodBoxesItem.classList.remove('cat-food__boxes-item--selected-hover');
}

const handleMouseenter = event => {
    const foodBoxesItem = event.target.parentElement;
    if (foodBoxesItem.classList.contains('cat-food__boxes-item--selected')) {
        foodBoxesItem.classList.add('cat-food__boxes-item--selected-hover');
    }
};

const handleMouseleave = event => {
    const foodBoxesItem = event.target.parentElement;
    foodBoxesItem.classList.remove('cat-food__boxes-item--selected-hover');
};

foodBoxes.forEach(foodBox => {
    foodBox.addEventListener('click', toggleSelectBox);
    foodBox.addEventListener('mouseenter', handleMouseenter);
    foodBox.addEventListener('mouseleave', handleMouseleave);
});

buyButtons.forEach(buyButton => {
    buyButton.addEventListener('click', toggleSelectBox);
});