import { useState } from "react";
import Activity from "../components/Activity.jsx";
import Rest from "../components/Rest.jsx";

// buttonLabel is a variable value that can be dynamically
// changed inside App.jsx by declaring the name
function Choose({ ButtonLabel }) {
  // state variable "isToggled" and function that changed state set to
  // "setIsToggled"
  // initial state is false
  const [isToggled, setIsToggled] = useState(false);

  // map buttonLabels to corresponding files
  const Map = {
    rest: Rest,
    activity: Activity,
  };
  // function to fetch files from Map based on buttonLabel
  const SelectedFile = Map[ButtonLabel.toLowerCase()];
  return (
    <>
      {/* passing the button label variable */}
      {/* onclick function set to setIsToggled 
             with the initial property of not toggled */}
      <button onClick={() => setIsToggled(!isToggled)}>{ButtonLabel}</button>
      {/* react's if statement if isToggled = True then render x component */}
      {isToggled && <SelectedFile />}
    </>
  );
}

export default Choose;
