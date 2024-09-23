import React, { useState } from 'react';
import './Homepage.css';
import Modal from './Modal'; // Import the Modal component

const Homepage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalFormType, setModalFormType] = useState(''); // 'signup' or 'login'

  const handleJoinClick = (formType) => {
    setModalFormType(formType);
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Add back the full list of 6 products
  const products = [
    {
      title: 'Wireless Headphones',
      description: 'High-quality noise-cancelling wireless headphones.',
      img: 'https://img.fruugo.com/product/7/71/1584936717_max.jpg',
      current: 5,
      needed: 10,
    },
    {
      title: 'Smartwatch',
      description: 'A sleek, stylish smartwatch with fitness tracking.',
      img: 'https://m.media-amazon.com/images/I/61ksrJ2LsgL._AC_UF894,1000_QL80_.jpg',
      current: 2,
      needed: 5,
    },
    {
      title: 'Gaming Laptop',
      description: 'Powerful laptop for gaming and productivity.',
      img: 'https://m.media-amazon.com/images/I/71OyrTkxpGL.__AC_SY300_SX300_QL70_FMwebp_.jpg',
      current: 3,
      needed: 6,
    },
    {
      title: 'Bluetooth Speaker',
      description: 'Portable speaker with deep bass and high volume.',
      img: 'https://jblstore.com.ph/cdn/shop/files/JBLFlip6Black_600x.png?v=1723021792',
      current: 1,
      needed: 4,
    },
    {
      title: 'Electric Scooter',
      description: 'Environmentally friendly electric scooter.',
      img: 'https://minimotorsusa.com/cdn/shop/products/dualtron-thunder-3-electric-scooter-side.jpg?v=1678911955',
      current: 7,
      needed: 10,
    },
    {
      title: 'Smartphone',
      description: 'Latest smartphone with advanced features.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2hu4ULNjKPmUzePqPU4jGe743OKU2GFxRQ&s',
      current: 9,
      needed: 10,
    },
  ];

  return (
    <div className="homepage-container">
      <h1>Welcome to the Purchase Group Marketplace</h1>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-tile">
            <img src={product.img} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div>
              <label>Group Progress: </label>
              <progress value={product.current} max={product.needed}>
                {product.current}/{product.needed}
              </progress>
              <p>{product.current}/{product.needed} people joined</p>
              <button onClick={() => handleJoinClick('signup')}>Join</button> {/* Join button */}
            </div>
          </div>
        ))}
      </div>
      {/* Modal for login/signup */}
      {isModalOpen && <Modal formType={modalFormType} closeModal={closeModal} />}
    </div>
  );
};

export default Homepage;
