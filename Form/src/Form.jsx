import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`welcome ${formData.name} your form summited successfully`);
    console.log(formData);
  };

  return (
    <>
      <div>
        <h1>Form App</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange}
            value={formData.name}
            placeholder="enter your name"
            name="name"
            id=""
          />{" "}
          <br /> <br />
          <input
            type="text"
            placeholder="enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id=""
          />{" "}
          <br /> <br />
          <input
            type="password"
            placeholder="enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id=""
          />{" "}
          <br /> <br />
          <input
            type="text"
            placeholder="enter your city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            id=""
          />
          <br /> <br />
          <button type="submit">submit</button>
        </form>
        {Object.entries(formData).map(([key, item], index) => (
          <ul>
            <li key={index}>
              {key}:{item}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
export default Form;
