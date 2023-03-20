import { Chat_User } from "@/types/chat_data";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { BsSend, BsThreeDots } from "react-icons/bs";

import data from "../../../../assets/chat_data.json";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function Child_Messages__Chat() {
  const [chats, setChats] = useState([]);
  const [chattingWith, setChattingWith] = useState<Chat_User>();

  function categorizeUsersByName(users: Chat_User[]) {
    // Create a new object to hold the categorized users
    const categorizedUsers = {};

    // Loop through each user in the array
    users.forEach((user) => {
      // Get the first letter of the user's name and convert it to uppercase
      const firstLetter = user.name.charAt(0).toUpperCase();

      // If this is the first user we've seen with this first letter, create a new array for them
      if (!categorizedUsers[firstLetter]) {
        categorizedUsers[firstLetter] = [];
      }

      // Add the user to the array for their first letter
      categorizedUsers[firstLetter].push(user);
    });

    // Convert the object to an array of objects
    const categorizedUsersArray = [];
    for (const firstLetter in categorizedUsers) {
      categorizedUsersArray.push({
        letter: firstLetter,
        users: categorizedUsers[firstLetter],
      });
    }

    // Return the array of categorized users
    return categorizedUsersArray;
  }

  useEffect(() => {
    return () => {
      const chatUsers = categorizeUsersByName(data).sort(
        (a, b) => `${a.letter}`.charCodeAt(0) - `${b.letter}`.charCodeAt(0)
      );
      setChats(chatUsers);
    };
  }, []);

  function chatWithUser(userData: Chat_User) {
    setChattingWith(userData);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <div className="flex justify-between items-center py-4 px-6 border-b-solid border-b-[1.5px] border-b-gray-600">
        <AiOutlinePlus size={25} className="p-1 bg-gray-600 rounded" />

        <div className="text-center">
          <p className="">Chat</p>
          <p className="text-[12px] text-gray-300">Latest</p>
        </div>

        <BsThreeDots size={25} className="p-1 bg-gray-600 rounded" />
      </div>

      {chattingWith?._id == undefined && (
        <>
          {chats.map((ele, ind) => {
            return (
              <div key={ind + 6996} className="h-fit">
                <h2
                  className="w-full px-6 text-lg font-bold bg-gray-800"
                  style={poppins.style}
                >
                  {ele.letter}
                </h2>

                {ele.users.map((ele: Chat_User, ind: number) => {
                  return (
                    <div
                      key={ele._id}
                      onClick={() => chatWithUser(ele)}
                      className="flex items-center gap-2 px-6 py-3 border-b-[1.5px] border-solid border-gray-600 hover:bg-gray-700"
                    >
                      <div
                        className="h-12 w-12 border-2 border-solid"
                        style={{ background: `url(${ele.picture})` }}
                      ></div>
                      <div className="flex flex-col text-sm">
                        <p>{ele.name}</p>
                        <p className="text-[12px]">Currently online</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </>
      )}

      {/* Chat Box */}
      {chattingWith?._id != undefined && (
        <ChatBox
          user={chattingWith}
          closeChat={setChattingWith}
          setChats={setChats}
          categorizeUsersByName={categorizeUsersByName}
        />
      )}
    </motion.div>
  );
}

const dummyData = [
  {
    author: "you",
    message: "Lorem Ipsum Donor",
  },
  {
    author: "a",
    message: "Lorem Ipsum Donor",
  },
  {
    author: "you",
    message: "Lorem Ipsum Donor",
  },
  {
    author: "a",
    message: "Lorem Ipsum Donor",
  },
  {
    author: "a",
    message: "Lorem Ipsum Donor",
  },
  {
    author: "you",
    message: "Lorem Ipsum Donor",
  },
];

function ChatBox({
  user,
  closeChat,
  setChats,
  categorizeUsersByName,
}: {
  user: Chat_User;
  closeChat: any;
  setChats: any;
  categorizeUsersByName: any;
}) {
  const [chatData, setChatData] = useState(dummyData);

  const messagesContainerRef = useRef(null);
  const dropdownRef = useRef(null);

  function closeChatBox() {
    closeChat({});
  }

  function toggleDropdown() {
    dropdownRef.current.classList.toggle("hidden");
  }

  function deleteChat(userID: string) {
    closeChatBox();
    dropdownRef.current.classList.add("hidden");

    setChats((prevValue) => {
      const filteredData = data.filter((ele, ind) => ele._id != userID);
      const newChatData = categorizeUsersByName(filteredData).sort(
        (a, b) => `${a.letter}`.charCodeAt(0) - `${b.letter}`.charCodeAt(0)
      );

      return [...newChatData];
    });
  }

  function sendMessage(e) {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const message = `${formdata.get("message")}`;

    const newMessage: { message: string; author: string } = {
      message,
      author: "you",
    };
    if (message != "") {
      setChatData((prevValue): { message: string; author: string }[] => {
        return [...prevValue, newMessage];
      });
    }
    messagesContainerRef.current.scrollTop =
      messagesContainerRef.current.scrollTopMax;
    e.currentTarget.reset();
  }

  useEffect(() => {
    return () => {
      if (messagesContainerRef.current != null || undefined) {
        messagesContainerRef.current.scrollTop =
          messagesContainerRef.current.scrollTopMax;
      }
    };
  });

  return (
    <div
      ref={messagesContainerRef}
      className="absolute top-0 left-0 w-full h-[90vh] bg-gray-800 overflow-y-scroll"
    >
      <div className="sticky top-0 w-full flex justify-between items-center py-4 px-6 bg-gray-800">
        <AiOutlineArrowLeft
          size={25}
          onClick={closeChatBox}
          className="p-1 bg-gray-600 rounded"
        />

        <div className="text-center">
          <p className="text-sm">Chatting with {user.name}</p>
          <p className="text-[12px] text-gray-300">[online status]</p>
        </div>

        <div className="relative">
          <BsThreeDots
            size={25}
            onClick={toggleDropdown}
            className="p-1 bg-gray-600 rounded"
          />

          <div
            ref={dropdownRef}
            className="dropdown hidden absolute top-[110%] right-0 w-fit whitespace-nowrap p-2 text-sm bg-gray-800 border-[1.5px] rounded"
          >
            <div
              onClick={() => deleteChat(user._id)}
              className="text-red-500 hover:text-red-600"
            >
              Delete chat
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-full h-fit flex flex-col items-center justify-end gap-2 py-3 text-sm">
        {chatData.map((ele, ind) => {
          return (
            <div
              key={ind + "chatmessage"}
              className="w-full px-3 flex gap-2"
              style={{
                flexFlow: ele.author == "you" ? "row-reverse" : "row",
              }}
            >
              <div className="min-w-8 min-w-8 h-8 w-8 border-solid border-2 rounded-full"></div>
              <div className="max-w-[75%] p-3 bg-blue-500 text-[12px] rounded-lg">
                <span className="w-fit">{ele.message}</span>
              </div>
            </div>
          );
        })}
      </div>

      <form
        onSubmit={sendMessage}
        className="sticky bottom-0 flex justify-between items-center px-6 py-2 bg-gray-800"
      >
        <input
          name="message"
          autoComplete="off"
          className="w-5/6 p-2 bg-gray-700 text-sm text-white outline-none rounded"
        />
        <button type="submit" className="bg-blue-700 p-2 rounded">
          <BsSend size={22} />
        </button>
      </form>
    </div>
  );
}
