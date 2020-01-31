import React ,{ useState,useEffect }from 'react';
import PropTypes from 'prop-types';
import "./Home.scss"
import MapContainer from "./MapContainer";
import OfferList from "./OfferList";
import axios from 'axios';
import MoreInformations from "./MoreInformations";
import LoginView from "./LoginView";
import Register from "./Register";

function Home () {
    const [active,setActive] = useState();
    const [state,setState] = useState([]);
    const [showMore,setShowMore] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8080/offers/`)
            .then(res => {
                console.log(res);
                setState(res.data);
                setActive(res.data[0]);
            }).catch(error => {
                 console.log(error);
            })
    },[]);

    return(
        <>
        <div id="home">
            <div className="map">
                <MapContainer markers={active && active.destinations.map(item => [item.lang,item.lat])}/>
            </div>
            <div className="list">
                <OfferList state={state} active={active} setActive={setActive} setShowMore={setShowMore}/>
            </div>
        </div>
        {
            active && showMore && <MoreInformations active={active} setShowMore={setShowMore}/>
        }
        {/*<LoginView/>*/}
        {/*<Register/>*/}
    </>
    )
};

Home.propTypes = {
  displayServerError: PropTypes.func.isRequired,
};

export default Home;