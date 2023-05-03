import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
    const [chats, setChats] = useState([]);

    const getChats = async () => {
        const { data } = await axios.get("/api/chat");
        console.log(data);
        setChats(data);
    };

    useEffect(() => {
        getChats();
    }, []);

    return (
        <div>
            {chats.map(chat => (
                <div key={chat.id}>{chat.name}</div>
            ))}
        </div>
    );
};

export default ChatPage;
