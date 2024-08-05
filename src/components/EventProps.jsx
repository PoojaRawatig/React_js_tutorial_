import React from "react";

export const EventProps = () => {
  const handleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert(`Thank you for hovering over me`);
  };

  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser("Pooja")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {
  const handleGreeting = () => {
    console.log(`Hey user, welcome`);
  };

  return (
    <>
      <button onClick={props.onClick}>Click</button>
      <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
      <button onClick={handleGreeting}>Greeting</button>
    </>
  );
};

export default EventProps;
