import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import "./MessageEditor.scss";
import remarkGfm from "remark-gfm";
const MessageEditor = ({onMessageSend}) => 
{   
    const [messageText, setMessageText] = useState("");

    const titleRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        const messageTitle = titleRef.current.value;
        onMessageSend(messageTitle,messageText);
    }

    const contentChanged = (e) => {
        setMessageText(e.target.value);
    }
    return (
        <>
        <div className="row">
            <div className="col">
                <form id="" onSubmit={onSubmit}>
                    <input ref={titleRef} className="title" placeholder="Title" />
                    <br />
                    <textarea onChange={contentChanged} className="MessageContent" placeholder="Message" />
                    <br />
                    <input className="msgsend" type="submit" value="Send message" />
                </form>
            </div>
            <div className="col right">
                <h1>Preview:</h1>
                <ReactMarkdown className="mdeditor" plugins={[remarkGfm]}>{messageText}</ReactMarkdown>
            </div>
        </div>

        </>
    )
}

export default MessageEditor;