import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { Context } from '../../Context/Context';

const Sidebar = () => {

    const [extend, setExtend] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
    const loadPrompt = async(prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <i onClick={() => setExtend(prev => !prev)} className="fa-solid fa-bars menu fa-xl"></i>
                <div onClick={()=>newChat()} className="new-chat">
                {extend ? <i className="fa-solid fa-plus fa-xl"></i> : <i className="fa-solid fa-plus fa-2xl"></i>}
                    {extend ? <p>New Chat</p> : null}
                </div>
                {extend ? <div className="recent">
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item, index) => {
                        return <div onClick={()=>loadPrompt(item)} className="recent-entry">
                            <i className="fa-solid fa-message icon fa-lg"></i>
                            <p>{item.slice(0,18)}...</p>
                        </div>
                    })}
                </div> : null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    {extend ? <i className="fa-solid fa-question icon fa-lg"></i> : <i className="fa-solid fa-question fa-lg"></i>}
                    {extend ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    {extend ? <i className="fa-solid fa-clock-rotate-left icon fa-lg"></i> : <i className="fa-solid fa-clock-rotate-left icons fa-lg"></i>}
                    {extend ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    {extend ? <i className="fa-solid fa-gear icon fa-lg"></i> : <i className="fa-solid fa-gear icons fa-lg"></i>}
                    {extend ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
