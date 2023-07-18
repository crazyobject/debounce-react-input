import { useState } from "react";
import DebounceReactInput from "./DebounceReactInput";
import "./app.css";

const sampleData = [
  {
    first: "Dhanesh",
    last: "Mane",
  },
  {
    first: "Swapnil",
    last: "Joshi",
  },
  {
    first: "kedar",
    last: "Joshi",
  },
  {
    first: "rohit",
    last: "patil",
  },
  {
    first: "shashikant",
    last: "sawant",
  },
];

function App() {
  const [userList, setUserList] = useState(sampleData);

  return (
    <div className="App">
      <DebounceReactInput userList={userList} setUserList={setUserList} />
      <div>
        <hr />
        {userList.map((user) => {
          return (
            <div>
              {user.first} {user.last}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
