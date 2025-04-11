import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ConstructionSelection.css';

function ConstructionSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedItem, selectedMaterial } = location.state;
  const [quantities, setQuantities] = useState({
    Дверь: 0,
    Стена: 0,
    Фундамент: 0,
    "Складная лестница": 0,
    "Решетка": 0,
    "Устройство отслеживания стрельбы": 0,
    "Установка с автоматической винтовкой": 0,
    "Автоматаическая установка для картечи": 0,
    "Торговый бот": 0,
    "Электромагнитная турель": 0,
    "Ракетная пусковая установка": 0
  });

  const handleQuantityChange = (item, change) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: Math.max(0, prevQuantities[item] + change),
    }));
  };

  const handleResult = () => {
    navigate('/result', { state: { selectedItem, selectedMaterial, quantities } });
  };

  const handleMainMenu = () => {
    navigate('/');
  };

  const items = {
    Дерево: [
      { name: 'Дверь', image: `${process.env.PUBLIC_URL}/images/doorwood.png` },
      { name: 'Стена', image: `${process.env.PUBLIC_URL}/images/wood.jpg` },
      { name: 'Фундамент', image: `${process.env.PUBLIC_URL}/images/basewood.png` }
    ],
    Камень: [
      { name: 'Дверь', image: `${process.env.PUBLIC_URL}/images/doorstone.png` },
      { name: 'Стена', image: `${process.env.PUBLIC_URL}/images/stone.jpg` },
      { name: 'Фундамент', image: `${process.env.PUBLIC_URL}/images/basestone.png` }
    ],
    Железо: [
      { name: 'Дверь', image: `${process.env.PUBLIC_URL}/images/doormetall.png` },
      { name: 'Стена', image: `${process.env.PUBLIC_URL}/images/metall.png` },
      { name: 'Фундамент', image: `${process.env.PUBLIC_URL}/images/basemetall.png` },
      { name: 'Складная лестница', image: `${process.env.PUBLIC_URL}/images/laddermetall.png` },
      { name: 'Решетка', image: `${process.env.PUBLIC_URL}/images/grillmetall.png` }
    ],
    "Отличное железо": [
      { name: 'Дверь', image: `${process.env.PUBLIC_URL}/images/doorsteal.png` },
      { name: 'Стена', image: `${process.env.PUBLIC_URL}/images/wallsteal.png` },
      { name: 'Фундамент', image: `${process.env.PUBLIC_URL}/images/basesteal.png` },
      { name: 'Складная лестница', image: `${process.env.PUBLIC_URL}/images/laddersteal.png` },
      { name: 'Решетка', image: `${process.env.PUBLIC_URL}/images/grillsteal.png` }
    ],
    Титан: [
      { name: 'Дверь', image: `${process.env.PUBLIC_URL}/images/doortitanium.png` },
      { name: 'Стена', image: `${process.env.PUBLIC_URL}/images/titanium.png` },
      { name: 'Фундамент', image: `${process.env.PUBLIC_URL}/images/basetitanium.png` },
      { name: 'Складная лестница', image: `${process.env.PUBLIC_URL}/images/laddertitanium.png` },
      { name: 'Решетка', image: `${process.env.PUBLIC_URL}/images/grilltitanium.png` }
    ],
    Объекты: [
      { name: 'Устройство отслеживания стрельбы', image: `${process.env.PUBLIC_URL}/images/toptyrel.png` },
      { name: 'Установка с автоматической винтовкой', image: `${process.env.PUBLIC_URL}/images/middletyrel.png` },
      { name: 'Автоматаическая установка для картечи', image: `${process.env.PUBLIC_URL}/images/shottyrel.png` },
      { name: 'Торговый бот', image: `${process.env.PUBLIC_URL}/images/shopbot.png` },
      { name: 'Электромагнитная турель', image: `${process.env.PUBLIC_URL}/images/tesla.png` },
      { name: 'Ракетная пусковая установка', image: `${process.env.PUBLIC_URL}/images/rockettyrel.png` }
    ]
  };

  return (
    <div className="construction-selection">
      <h1>Выберите тип постройки и количество</h1>
      <div className="items-container">
        {items[selectedMaterial].map((item) => (
          <div key={item.name} className="item">
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item.name, -1)}>-</button>
              <span>{quantities[item.name]}</span>
              <button onClick={() => handleQuantityChange(item.name, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={handleMainMenu} className='menu-button'>Меню</button>
        <button onClick={handleResult} className='result-button'>Результат</button>
      </div>
    </div>
  );
}

export default ConstructionSelection;


