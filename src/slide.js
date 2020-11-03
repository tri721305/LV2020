import React, {Component} from 'react';
import logo from './logo.svg';
import './style.scss';
// import HeaderTri from '../src/Component/headerTri/header'
import hinh1 from './images/hinh5.jpg';
import hinh2 from './images/hinh2.jpg'
import hinh3 from './images/hinh3.jpg'
import hinh4 from './images/hinh4.jpg'
import hinh5 from './images/hinh6.jpg'

import NavTri from './Component/navTri/NavTri'

const slides = [
  {
    title: "Sai Gon",
    subtitle: "SG-VietNam",
    description: "Adventure is never far away",
    image:  hinh1
      
  },
  {
    title: "Mui Ne",
    subtitle: "MN-VietNam",
    description: "Let your dreams come true",
    image:  hinh2
  },
  {
    title: "Ha noi",
    subtitle: "HN-VietNam",
    description: "A piece of heaven",
    image: hinh3
  },
  {
    title: "Cao Bang",
    subtitle: "CB-VietNam",
    description: "A piece of heaven",
    image: hinh4
  },
  {
    title: "Ninh Binh",
    subtitle: "NB-VietNam",
    description: "A piece of heaven",
    image: hinh5
  }
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function SlideBackgroundtest() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div>
 
    
      {/* <NavTri /> */}
      {/* <div className='tritri'>
      <ul className="thu">
        <li>ccbb</li>
        <li>ccbb</li>
        <li>ccbb</li>
        <li>ccbb</li>
      </ul>
      </div> */}
    <div className="slides">  
      
       {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button className='button1' onClick={() => dispatch({ type: "PREV" })}>‹</button>
      <button className='button2' onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
    </div>
   
    
    
  );
}


export default SlideBackgroundtest;
