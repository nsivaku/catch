import React, {useState, useEffect} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr'
import Home from '../../pages/Home';
import About from '../../pages/About';
import Toys from '../../pages/Toys';
import Donations from '../../pages/Donations';
import News from '../../pages/News';
import ShoppingCart from './ShoppingCart';

import trexImage from '../../images/Toy Catolog/trex.jpg';
import airplaneImage from '../../images/Toy Catolog/airplane.jpg';
import garbageTruckImage from '../../images/Toy Catolog/garbagetruck.jpg';
import schoolBusImage from '../../images/Toy Catolog/bus.jpg';
import snakeImage from '../../images/Toy Catolog/snake.jpg';
import automobileImage from '../../images/Toy Catolog/dinocar.jpg';
import firetruckImage from '../../images/Toy Catolog/firetruck.jpg';
import tractorImage from '../../images/Toy Catolog/tractor.jpg';
import lizardImage from '../../images/Toy Catolog/lizard.jpg';
import penguinImage from '../../images/Toy Catolog/penguin.jpg';
import alienImage from '../../images/Toy Catolog/alien.jpg';
import dogImage from '../../images/Toy Catolog/dog.jpg';
import pixieImage from '../../images/Toy Catolog/pixie.jpg';

import './Navbar.css';

function CartItem(props) {
  const toyInfo = {
    "T-Rex": {description: "temp description", imagePath: trexImage, altText: 'Modfified T-Rex Toy', buildURL: 'https://docs.google.com/presentation/d/1wbJqiEVo8fUr-7MK_vaexr9-cqTBe6HjSzHXuhyEOuY/edit#slide=id.p'},
    "Airplane": {description: "temp description", imagePath: airplaneImage, altText: 'Modfified Airplane Toy', buildURL: 'https://docs.google.com/presentation/d/1sG6zYR71rNoACMY5j51roubwaqilKjNm_EgJfxFn7VU/edit#slide=id.p'},
    "Garbage Truck": {description: "temp description", imagePath: garbageTruckImage, altText: 'Modfified Truck Toy', buildURL: 'https://docs.google.com/presentation/d/12rRDEw87h6ICf5L7guNQBBB5o5kUtJ3QybOLMZ_QNRg/edit?usp=sharing'},
    "School Bus": {description: "temp description", imagePath: schoolBusImage, altText: 'Modfified Bus Toy', buildURL: ''},
    "Snake": {description: "temp description", imagePath: snakeImage, altText: 'Modfified Snake Toy', buildURL: ''},
    "Car": {description: "temp description", imagePath: automobileImage, altText: 'Modfified Automobile Toy', buildURL: 'https://docs.google.com/presentation/d/1wNAGJYabdsUwAWgdzBGDGSQVSf8A0drX-7Vv6Ua_UU4/edit#slide=id.ge901fea6e3_0_80'},
    "Firetruck": {description: "temp description", imagePath: firetruckImage, altText: 'Modfified Firetruck Toy', buildURL: 'https://docs.google.com/presentation/d/1rYG7PFngmJgI7uBpoO3ydhBF3RiEJJCjJ8ZIl-tqLXY/edit#slide=id.p'},
    "Tractor": {description: "temp description", imagePath: tractorImage, altText: 'Modfified Tractor Toy', buildURL: 'https://docs.google.com/presentation/d/1wNAGJYabdsUwAWgdzBGDGSQVSf8A0drX-7Vv6Ua_UU4/edit#slide=id.p'},
    "Lizard": {description: "temp description", imagePath: lizardImage, altText: 'Modfified Lizard Toy', buildURL: ''},
    "Penguin": {description: "temp description", imagePath: penguinImage, altText: 'Modfified Penguin Toy', buildURL: 'https://docs.google.com/document/d/1rYR7cj2QgniXExzF7qxCrk9XsvUmf7qV7L0kWtusydA/edit'},
    "Alien": {description: "temp description", imagePath: alienImage, altText: 'Modfified Alien Toy', buildURL: ''},
    "Dog": {description: "temp description",  imagePath: dogImage, altText: 'Modfified Dog Toy', buildURL: ''},
    "Pixie": {description: "temp description", imagePath: pixieImage, altText: 'Modfified Pixie Toy', buildURL: ''}
  }

  const [quantity, setQuantity] = useState(props.toy.quantity)
  const [disable, setDisable] = useState(quantity === 1)
  const toyName = props.toy.name;

  const addOne = () => {
    console.log('increment');
    console.log(props.order);
    let tempOrder = [...props.order];
    console.log(tempOrder);
    tempOrder[props.index].quantity++;
    setQuantity(tempOrder[props.index].quantity);
    setDisable(false);
    props.setOrder(tempOrder);
    console.log(props.order);
  };

  const removeOne = () => {
    console.log('decrement')
    console.log(props.order)
    let tempOrder = [...props.order];
    tempOrder[props.index].quantity--;
    setQuantity(tempOrder[props.index].quantity);
    if(quantity === 1) {
      setDisable(true)
    }
    props.setOrder(tempOrder);
    console.log(props.order);
  };

  const removeItem = () => {
    console.log(props.order);
    let tempOrder = [...props.order];
    tempOrder[props.index].quantity = 0;
    setQuantity(0);
    props.setOrder(tempOrder);
    console.log(props.order);
  };

  

  return(
    <>
    {(quantity !== 0) && 
    <div className='cart-item-container'>
      <div className='colbreak'/>
      <img src={toyInfo[toyName].imagePath} className='item-picture' alt={toyInfo[toyName].altText}></img>
      <div className='colbreak'/>
      <div className='item-details'>
        <div className="item-descriptors">
          <p className='item-title'>{toyName}</p>
          <p className="item-description">{toyInfo[toyName].description}</p>
        </div>
      
        <div className="item-buttons" style={{display:"inline-flex"}}>
          <span>
            <button style={{backgroundColor:"transparent", border:"none", margin:"0", padding:"0"}}onClick={() => removeItem()}><FaTrash size={20} style={{marginRight:"10px"}}/></button>
            <span style={{minWidth:"60%", maxWidth:"60%", alignItem:"center", backgroundColor:"#AAAAAA", padding: "5px", borderRadius: "300px", paddingLeft: "15px", paddingRight: "15px"}}>
              <button style={{margin:"0", padding:"0", backgroundColor:"transparent", border:"none"}} onClick={() => removeOne()} disabled={disable}><FaMinus size={15}/></button>
              <b style={{marginRight:"25px", marginLeft:"25px"}}>{quantity}</b>
              <button style={{margin:"0", padding:"0", backgroundColor:"transparent", border:"none"}} onClick={() => addOne()}><FaPlus size={15}/></button>
            </span>
          </span>
        </div>
        <div className='rowbreak'/>
      </div>
      <div className='colbreak'/>
    </div>
}
    </>
  );
}

function ShoppingCartPanel(props) {


  const closeShoppingCart = () => {
    props.setShoppingCartActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", closeShoppingCart); // add event listener
    return () => {
        window.removeEventListener("scroll", closeShoppingCart); // clean up
    }
  }, []);

  return(
    <div className='shopping-cart-container'>
      <div className='disable-interaction' onClick={() => closeShoppingCart()}></div>
      <div className='shopping-cart-panel'>
        <div className='close-cart'>
          <button onClick={() => closeShoppingCart()} style={{margin: "10px", backgroundColor:"transparent", border:"none", float:"right"}}>
            <GrClose size={35}/>
          </button>
        </div>
        <div className='cart-items'>
          {props.order.map((toy, index) => (
            (toy.quantity !== 0) && <CartItem
              index={index}
              toy={toy}
              order={props.order}
              setOrder={props.setOrder}
            />
          ))}
        </div>
        <div className='checkout-container' style={{flex: 2, display:"flex", justifyContent:"center"}}>
          <button className='checkout'>Checkout</button>
        </div>
      </div>
    </div>
  );

}

export default function NavBar() {
    const [activeTab, setActiveTab] = useState('');
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [shoppingCartActive, setShoppingCartActive] = useState(false);
    const [total, setTotal] = useState(0);

    const [order, setOrder] = useState([]);

    const handleClick = (path) => {
      setActiveTab(path);
    };

    const getClassName = (path) => {
      if (activeTab === '/about' || activeTab === '/toys' || activeTab === '/donations' || activeTab === '/news') {
        return path === activeTab ? "mx-3 nav-link-alternate-active" : "mx-3 nav-link-alternate";
      }
      else {
        return path === activeTab ? "mx-3 nav-link-active" : "mx-3 nav-link";
      }
    };

    useEffect(() => {
      const storedActiveTab = localStorage.getItem('activeTab');
      if (storedActiveTab) {
          setActiveTab(storedActiveTab);
      }
    }, []);

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 170) || currentScrollPos < 30);
        setPrevScrollPos(currentScrollPos);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    useEffect(() => {
      const getTotal = () => {
        setTotal(0)
        const totalQuantity = order.reduce((acc, toy) => acc + toy.quantity, 0);
        setTotal(totalQuantity);
      }
      getTotal()
    }, [order])

    const openShoppingCart = () => {
      console.log('activate click');
      setShoppingCartActive(true);
    };

    const changeOrder = (n) => {
      setOrder(n);
    };
    

    return (
      <>
      <Router>
        <Container fluid className="nav-container">
          <Navbar className={`bg-transparent mx-3 navbar ${visible ? 'navbar-show' : 'navbar-hide'}`} expand="lg">
              <Navbar.Brand className={activeTab === '/about' || activeTab === '/toys' || activeTab === '/donations' || activeTab === '/news' ? "nav-brand-alternate" : "nav-brand"} as={Link} to={"/"} onClick={() => handleClick('/')}>
                <img className="nav-logo" src={require('../../images/logo.png')} alt=""></img>CATCH
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className="collapse-nav" id="basic-navbar-nav">
                  <Nav className="mx-auto">
                    <Nav.Link className={getClassName("/")} as={Link} to={"/"} onClick={() => handleClick('/')}>Home</Nav.Link>
                    <Nav.Link className={getClassName("/about")} as={Link} to={"/about"} onClick={() => handleClick('/about')}>About</Nav.Link>
                    <Nav.Link className={getClassName("/toys")} as={Link} to={"/toys"} onClick={() => handleClick('/toys')}>Toy Catalog</Nav.Link>
                    <Nav.Link className={getClassName("/donations")} as={Link} to={"/donations"} onClick={() => handleClick('/donations')}>Donations</Nav.Link>
                    <Nav.Link className={getClassName("/news")} as={Link} to={"/news"} onClick={() => handleClick('/news')}>News</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
              <Nav className="ml-auto justify-content-end adjust-right-nav">
                  <button onClick={() => openShoppingCart()} className="shopping-button">
                    <ShoppingCart
                      alternate={activeTab === '/about' || activeTab === '/toys' || activeTab === '/donations' || activeTab === '/news' ? true : false}
                      quantity={total} // will need to be dynamically updated
                    />
                  </button>
              </Nav>
          </Navbar>
        </Container>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/toys" element={<Toys order={order} setOrder={changeOrder}/>} />
            <Route path="/donations" element={<Donations />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </Router>
      {shoppingCartActive && 
        <ShoppingCartPanel order={order} setOrder={changeOrder} setShoppingCartActive={setShoppingCartActive}/>
      }
      </>
    );
}
