import React from 'react';
import PropTypes from 'prop-types';
import "./OfferList.scss"
import Moment from 'react-moment';

function OfferList ({active,setActive,state,setState,setShowMore}) {
    return(
        <div id="offer_list">
           <h2>Wszystkie ogłoszenia</h2>
            <div className="offer_list_wrapper">
                {
                    state &&
                        state.map(item =>
                            <div className={`offer ${active && item.id === active.id ? 'active' : null}`} onClick={() => setActive(item)}>
                                <h3>{item.name}</h3>
                                <div className="other_info">
                                    <h6>Daty potwierdzone</h6>
                                    <div className="date_wrapper">
                                        <div className="dates accepted">
                                            {item.dates.filter(item => item.accepted === true).map(date => <div className="date"><Moment format="DD-MM-YYYY">{date.dateFrom}</Moment>{" - "}<Moment format="DD-MM-YYYY">{date.dateTo}</Moment></div> )}
                                        </div>
                                    </div>

                                    <h6>Daty niepotwierdzone</h6>
                                    <div className="date_wrapper">
                                        <div className="dates">
                                            {item.dates.filter(item => item.accepted === false).map(date => <div className="date"><Moment format="DD-MM-YYYY">{date.dateFrom}</Moment>{" - "}<Moment format="DD-MM-YYYY">{date.dateTo}</Moment></div> )}
                                        </div>
                                    </div>

                                    <button onClick={() => setShowMore(true)}>
                                        Zobacz więcej
                                    </button>
                                </div>
                            </div>
                        )
                }
            </div>


        </div>
    )
};

OfferList.propTypes = {
  displayServerError: PropTypes.func.isRequired,
};

export default OfferList;