import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../store/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      const sound = new Audio(notificationSound);
      sound.play();
      newMessage.shouldShake = true;
      setMessages([...messages, newMessage]);
    });

    return () => socket.off("newMessage");
  }, [messages, socket, setMessages]);
};

export default useListenMessages;
