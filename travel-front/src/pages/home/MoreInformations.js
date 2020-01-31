import React ,{useState} from 'react';
import PropTypes from 'prop-types';
import "./MoreInfromations.scss"
import Moment from "react-moment";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {setLogin} from "../../elements/Header/Header";

function MoreInformations ({active,setShowMore}) {
    const [id,setId] = useState(active.dates.length > 0 && active.dates[0].id);
    const [suggestDate,setSuggestDate] = useState({
        dateFrom:'',
        dateTo:'',
        accepted:false
    });
    const [person,setPerson] = useState({
        name:'',
        mail:'',
        phone:''
    });

    const sendForm = () => {
        axios.post(`http://localhost:8080/offers/addParticipian/${id}/`, { person })
            .then(res => {
                window.location.reload(true);
            })
    };

    const addDate = () => {
        axios.post(`http://localhost:8080/offers/15/${id}/addDate/`, { suggestDate })
            .then(res => {
                window.location.reload(true);
            })
    };

    return(
        <div id="more_info" onClick={() => setShowMore(false)}>
            <div className="more_info_content" onClick={(e) => e.stopPropagation()}>
                <h2 className="title">{active.name}</h2>
                <h6>Daty potwierdzone</h6>
                <div className="date_wrapper">
                    <div className="dates accepted">
                        {active.dates.filter(item => item.accepted === true).map(date => <div className="date"><Moment format="DD-MM-YYYY">{date.dateFrom}</Moment>{" - "}<Moment format="DD-MM-YYYY">{date.dateTo}</Moment><span><FontAwesomeIcon icon={faUserAlt}/>{date.participians.length}</span></div> )}
                    </div>
                </div>

                <h6>Daty niepotwierdzone</h6>
                <div className="date_wrapper">
                    <div className="dates">
                        {active.dates.filter(item => item.accepted === false).map(date => <div className="date"><Moment format="DD-MM-YYYY">{date.dateFrom}</Moment>{" - "}<Moment format="DD-MM-YYYY">{date.dateTo}</Moment><span><FontAwesomeIcon icon={faUserAlt}/>{date.participians.length}</span></div> )}
                    </div>
                </div>
                {
                    localStorage.getItem('login') === 'true' ?
                        <>
                            <div className="suggest_date">
                                <h3>Zaproponuj termin</h3>
                                <div className="row">
                                    <input type="date" name="bday" max="1979-12-31" value={suggestDate.dateFrom} onChange={(e) => setSuggestDate({...suggestDate,dateFrom:e.target.value})}/>
                                    <input type="date" name="bday" max="1979-12-31" value={suggestDate.dateTo} onChange={(e) => setSuggestDate({...suggestDate,dateTo: e.target.value})}/>
                                </div>
                                <button onClick={addDate} disabled={suggestDate.dateFrom === '' || suggestDate.dateTo === '' || suggestDate.dateFrom > suggestDate.dateTo}>Zaproponuj termin</button>
                            </div>
                            <div className="sing_up">
                                <h3>Zapisz się na wycieczkę</h3>
                                <div className="form">
                                    <h4>Wybierz termin</h4>
                                    <select  value={id} onChange={(e) => setId(e.target.value)}>
                                        {active.dates.map(date => <><option value={date.id}>{`${date.dateFrom.substring(0,10)} - ${date.dateTo.substring(0,10)}`}</option></>)}
                                    </select>
                                    <h4>Podaj dane</h4>
                                    <input type="text"  value={person.name} placeholder="Imię i Nazwisko" onChange={(e) => setPerson({...person,name:e.target.value})}/>
                                    <div className="row">
                                        <input type="text"  value={person.mail} placeholder="Email" onChange={(e) => setPerson({...person,mail:e.target.value})}/>
                                        <input type="text"  value={person.phone} placeholder="Telefon" onChange={(e) => setPerson({...person,phone:e.target.value})}/>
                                    </div>
                                    <button disabled={person.name === '' || person.mail === '' || person.phone === '' || !id} onClick={sendForm}>
                                        Zapisz się
                                    </button>
                                </div>
                            </div>
                        </> :
                        <div className="suggest_date please_login">
                            <h3>Zapisz się na wycieczkę</h3>
                            <button onClick={() => setLogin(true)}>Zaloguj sie</button>
                        </div>
                }

                <h3 className="title_section">Punkty wycieczki</h3>
                <div className="destination_wrapper">
                    {
                        active.destinations.map((desc,index) =>
                            <div className="desc">
                                <h3>{`${index+1}. ${desc.name}`}</h3>
                                <div className="attraction_wrapper">
                                    {
                                        desc.attractionList.length > 0 && desc.attractionList.map(att =>
                                            <div className="attr">
                                                <h4>{att.name}</h4>
                                                <div className="image">
                                                    <img src={att.files[0]}/>
                                                </div>
                                                <p>{att.description && att.description}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
};

MoreInformations.propTypes = {
  displayServerError: PropTypes.func.isRequired,
};

export default MoreInformations;