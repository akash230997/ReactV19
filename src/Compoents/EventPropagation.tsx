function EventPropagation() {
  const handleGrandParentClick = () => {
    console.log("GrandParent Container clicked");
  };
  const handleParentClick = () => {
    console.log("Parent Container clicked");
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("event : ", event);
    console.log("Child Container clicked");
    event.stopPropagation();
  };
  return (
    <div>
      <h1>Event Propagation</h1>
      <div onClick={handleGrandParentClick}>
        <h1>GrandParent Container</h1>
        <div onClick={handleParentClick}>
          <h1>Parent Container</h1>
          <div>
            <h1>Child Container</h1>
            <button onClick={handleClick}>Click Me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventPropagation;
