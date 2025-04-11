import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MaterialSelection.css';

function MaterialSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedItem } = location.state;

  const handleSelection = (material) => {
    navigate('/construction', { state: { selectedItem, selectedMaterial: material } });
  };

  const materials = [
    { name: 'Дерево', image: `${process.env.PUBLIC_URL}/images/wood.jpg` },
    { name: 'Камень', image: `${process.env.PUBLIC_URL}/images/stone.jpg` },
    { name: 'Железо', image: `${process.env.PUBLIC_URL}/images/metall.png` },
    { name: 'Отличное железо', image: `${process.env.PUBLIC_URL}/images/steal.png` },
    { name: 'Титан', image: `${process.env.PUBLIC_URL}/images/titanium.png` },
    { name: 'Объекты', image: `${process.env.PUBLIC_URL}/images/object.png` }
  ];

  return (
    <div className="material-selection">
      <h1>Выбор материала</h1>
      <div className="items-container">
        {materials.map((material) => (
          <div key={material.name} className="item" onClick={() => handleSelection(material.name)}>
            <img src={material.image} alt={material.name} />
            <p>{material.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaterialSelection;



