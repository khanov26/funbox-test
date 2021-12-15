import React, {useState} from 'react';
import classnames from 'classnames';
import catImg from '../images/cat.png';

const CatFoodListItem = ({food, onToggleSelect}) => {
    const {
        taste,
        details,
        weight,
        description,
        selected,
        available,
    } = food;

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        if (selected) {
            setHover(true);
        }
    };

    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <li className={classnames({
            'cat-food__boxes-item': true,
            'cat-food__boxes-item--selected': selected,
            'cat-food__boxes-item--unavailable': !available,
        })}>
            <div className="cat-food__box food-box" onClick={onToggleSelect} onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
                <div className="food-box__inner">
                    <div className="food-box__top">
                        {selected && hover
                            ? <h4 className="food-box__top-text food-box__top-text--red">
                                Котэ не одобряет?
                            </h4>
                            : <h4 className="food-box__top-text">
                                Сказочное заморское яство
                            </h4>
                        }
                        <h2 className="food-box__title">Нямушка</h2>
                        <h3 className="food-box__subtitle">{taste}</h3>

                        <ul className="food-box__details">
                            {details.map(detail =>
                                <li className="food-box__detail">{detail}</li>
                            )}
                        </ul>
                    </div>

                    <img src={catImg} alt="cat" className="food-box__cat"/>
                    <div className="food-box__weight food-weight">
                        <span className="food-weight__value">{weight}</span>
                        <span className="food-weight__unit">кг</span>
                    </div>
                </div>
            </div>
            <div className={classnames({
                'cat-food__description-text': true,
                'cat-food__description-text--yellow': !available,
            })}>
                {!available
                    ? description.unavailable
                    : selected
                        ? description.default
                        : <>Чего сидишь? Порадуй котэ, <span className="cat-food__buy"
                                                             onClick={onToggleSelect}>купи.</span></>
                }
            </div>
        </li>
    );
};

export default CatFoodListItem;