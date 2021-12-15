import React from 'react';
import CatFoodList from "./CatFoodList";

const CatFood = () => {
    return (
        <section className="cat-food">
            <h1 className="cat-food__title">Ты сегодня покормил кота?</h1>
            <CatFoodList />
        </section>
    );
};

export default CatFood;