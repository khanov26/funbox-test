import React, {useState} from 'react';
import CatFoodListItem from "./CatFoodListItem";

const CatFoodList = () => {
    const [foodBoxes, setFoodBoxes] = useState([
        {
            taste: 'с фуа-гра',
            details: ['10 порций', 'мышь в подарок'],
            weight: '0,5',
            description: {
                default: 'Печень утки разварная с артишоками.',
                unavailable: 'Печалька, с фуа-гра закончился.',
            },
            selected: false,
            available: true,
        },
        {
            taste: 'с рыбой',
            details: ['40 порций', '2 мыши в подарок'],
            weight: '2',
            description: {
                default: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                unavailable: 'Печалька, с рыбой закончился.',
            },
            selected: false,
            available: true,
        },
        {
            taste: 'с курой',
            details: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
            weight: '5',
            description: {
                default: 'Филе из цыплят с трюфелями в бульоне.',
                unavailable: 'Печалька, с курой закончился.',
            },
            selected: false,
            available: false,
        }
    ]);

    const toggleFoodBoxSelect = foodBoxToBeSelected => {
        setFoodBoxes(foodBoxes.map(foodBox => {
            if (foodBox === foodBoxToBeSelected) {
                return {
                    ...foodBox,
                    selected: !foodBox.selected
                }
            }

            return foodBox;
        }));
    };

    return (
        <ul className="cat-food__boxes">
            {foodBoxes.map(foodBox =>
                <CatFoodListItem food={foodBox}
                                 onToggleSelect={() => toggleFoodBoxSelect(foodBox)}/>
            )}
        </ul>
    );
};

export default CatFoodList;