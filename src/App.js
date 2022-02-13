import Form from "./Form";
import { useState } from 'react';

function App() {
  const [flow, setFlow] = useState("")
  const [diameter, setDiameter] = useState("")
  const [velocity, setVelocity] = useState("")
  const [density, setDensity] = useState("")

  return (
    <div className="App">
      <div className="form-container">
        <Form flow={flow} setFlow={setFlow}
       diameter={diameter} setDiameter={setDiameter}
        velocity={velocity} setVelocity={setVelocity}
        density={density} setDensity={setDensity}
        />
      </div>
    </div>
  );
}

export default App;
