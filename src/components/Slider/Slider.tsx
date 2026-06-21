import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import man1 from "../../Images/western-man1.png";
import man2 from "../../Images/western-man2.png";
import man3 from "../../Images/western-man3.png";
import "./Slider.css";

interface CardItem {
  id: number;
  img: string;
  name: string;
  desc: string;
}

function Slider() {
  const [offset, setOffset] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  
  const CardsData: CardItem[] = [
    { id: 1, img: man1, name: "Andrew Rathore", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. " },
    { id: 2, img: man2, name: "Vera Duncan", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. " },
    { id: 3, img: man3, name: "Mark Smith", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. " },
    { id: 4, img: man1, name: "Lionel Messi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. " },
    { id: 5, img: man2, name: "Crestiano Ronaldo", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. " },
  ];

  const cardWidth = 340;

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 992;
      setVisibleCount(isMobile ? 1 : 3);
      setOffset(0);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSteps = CardsData.length - visibleCount + 1;
  const activeIndex = Math.abs(offset / cardWidth);

  const goToSlide = (index: number) => {
    setOffset(-index * cardWidth);
  };

  return (
    <div className="slider-container">
      <h1 className='text-center mx-auto fw-bold sliderTitle'>Read What Others have to Say</h1>
      
      <div className="slider-viewport">
        <div className="slider-track" style={{ transform: `translateX(${offset}px)` }}>
          {CardsData.map((card) => (
            <div key={card.id} className="card-wrapper">
              <Card name={card.name} img={card.img} description={card.desc} />
            </div>
          ))}
        </div>
      </div>

      <div className="slider-dots">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <button 
            key={i} 
            className={`dot ${activeIndex === i ? 'active' : ''}`} 
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;