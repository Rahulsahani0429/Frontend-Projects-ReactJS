import { useRef } from "react";

function Uncomponent() {
  const userRef = useRef(0);
  const passwordRef = useRef(0);
  const handleRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log(user, password);
  };
  const handle = (event) => {
    event.preventDefault();

    const user = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;

    //if we get by id then we should be use const user = document.getElementById("name").value;
    console.log(user, password);
  };
  return (
    <div>
      <h1>uncontroller component</h1>
      <form action="" method="post" onSubmit={handle}>
        <input type="text" id="name" placeholder="enter your name" />
        <br />
        <br />
        {/* <input type="email" id='email' placeholder="enter your email" /> */}
        {/* <br />
        <br /> */}
        <input
          type="password"
          id="password"
          placeholder="enter your password"
        />

        <br />
        <br />
        <button>submit</button>
      </form>
      <h1>uncontroller component with useRef</h1>
      <form action="" method="post" onSubmit={handleRef}>
        <input
          type="text"
          ref={userRef}
          id="name"
          placeholder="enter your name"
        />
        <br />
        <br />
        {/* <input type="email" id='email' placeholder="enter your email" /> */}
        {/* <br />
        <br /> */}
        <input
          ref={passwordRef}
          type="password"
          id="password"
          placeholder="enter your password"
        />

        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Uncomponent;
