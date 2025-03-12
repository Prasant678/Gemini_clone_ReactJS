import React, { useContext } from 'react'
import './Main.css'
import { Context } from '../../Context/Context'

const Main = () => {

    const {
        input,
        setInput,
        recentPrompt,
        onSent,
        resultData,
        loading,
        showResult } = useContext(Context);
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src="user.png" alt="" />
            </div>
            <div className="main-container">
                {!showResult ? <>
                <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you Today?</p>
                </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful place to see on an upcomming road trip.</p>
                            <i className="fa-solid fa-compass fa-xl" style={{color:"#3B71CA"}}></i>
                        </div>
                        <div className="card">
                            <p>briefly summerize this concept: urban planning.</p>
                            <i className="fa-solid fa-lightbulb fa-xl" style={{color:"#E4A11B"}}></i>
                        </div>
                        <div className="card">
                            <p>brainstrom team bonding activites for our work retreat.</p>
                            <i className="fa-brands fa-android fa-xl" style={{color:"#DC4C64"}}></i>
                        </div>
                        <div className="card">
                            <p>Improve the readability of the following code.</p>
                            <i className="fa-solid fa-code fa-xl" style={{color:"#08C2FF"}}></i>
                        </div>
                    </div>
                    </>
                    :
                    <div className='result'>
                        <div className="result-title">
                            <img src="user.png" alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src="google-gemini-icon.svg" alt="" />
                            {loading ? 
                            <div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div> : 
                            <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                        </div>
                    </div>}
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <i className="fa-regular fa-image" style={{color: "#9FA6B2"}}></i>
                            <i className="fa-solid fa-microphone" style={{color: "#3B71CA"}}></i>
                            {input ? <i onClick={() => onSent()} className="fa-solid fa-paper-plane" style={{color: "#14A44D"}}></i> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
