import { Chat_User } from "@/types/chat_data";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

import data from "../../../../assets/chat_data.json";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

export default function Child_Messages__Chat() {
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

  const allUsers = categorizeUsersByName(data).sort(
    (a, b) => `${a.letter}`.charCodeAt(0) - `${b.letter}`.charCodeAt(0)
  );

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
          {allUsers.map((ele, ind) => {
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
        <ChatBox user={chattingWith} closeChat={setChattingWith} />
      )}
    </motion.div>
  );
}

function ChatBox({ user, closeChat }: { user: Chat_User; closeChat: any }) {
  function closeChatBox() {
    closeChat({});
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-800">
      <div className="flex justify-between items-center py-4 px-6 border-b-solid border-b-[1.5px] border-b-gray-600">
        <AiOutlineArrowLeft
          size={25}
          onClick={closeChatBox}
          className="p-1 bg-gray-600 rounded"
        />

        <div className="text-center">
          <p className="text-sm">Chatting with {user.name}</p>
          <p className="text-[12px] text-gray-300">[online status]</p>
        </div>

        <BsThreeDots size={25} className="p-1 bg-gray-600 rounded" />
      </div>
    </div>
  );
}
