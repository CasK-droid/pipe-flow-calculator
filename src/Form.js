import React from 'react';
import { calcFlow, calcDiameter, calcVel, calcRho } from './calcs.js';
import "./index.css";
import { useState, useEffect } from 'react';

const Form = ({ flow, setFlow, diameter, setDiameter, velocity, setVelocity, density, setDensity }) => {

    const [calculatedValue, setCalculatedValue] = useState("");

    useEffect(() => {
        const parameters = [flow, diameter, velocity, density];
        const parameterCount = parameters.filter(parameter => parameter > 0).length
        if (parameterCount >= 3) {
            if (!flow || (calculatedValue === "flow")) {
                setFlow(calcFlow(diameter, velocity, density));
                setCalculatedValue("flow");
            } else if (!diameter || (calculatedValue === "diameter")) {
                setDiameter(calcDiameter(flow, velocity, density));
                setCalculatedValue("diameter");
            } else if (!velocity || (calculatedValue === "velocity")) {
                setVelocity(calcVel(flow, diameter, density));
                setCalculatedValue("velocity");
            } else if (!density || (calculatedValue === "density")) {
                setDensity(calcRho(flow, diameter, velocity));
                setCalculatedValue("density");
            }
        } else {
            setCalculatedValue("");
        }
    }, [flow, setFlow, diameter, setDiameter, velocity, setVelocity, density, setDensity, calculatedValue])

    const resetCalcField = () => {
        if (calculatedValue) {
            setFlow("");
            setDiameter("");
            setVelocity("");
            setDensity("");
        }
    }

    const updateFlow = (flow) => {
        setFlow(flow);
        if (!flow) {
            resetCalcField();
        }
    }

    const updateDiameter = (diameter) => {
        setDiameter(diameter);
        if (!diameter) {
            resetCalcField();
        }
    }

    const updateVelocity = (velocity) => {
        setVelocity(velocity);
        if (!velocity) {
            resetCalcField();
        }
    }

    const updateDensity = (density) => {
        setDensity(density);
        if (!density) {
            resetCalcField();
        }
    }

    return (
        <div className="form-box">
            <h2>Pipe flow calculator</h2>
            <form>
                <label htmlFor="flow">Flow (ton/hr): </label> <br />
                <input id="flow" type="number" placeholder='Flow' value={flow} readOnly={calculatedValue === "flow" ? true : false} onChange={(e) => updateFlow(e.target.value)}></input>
                <br />
                <label htmlFor="diameter">Pipe diameter (inch): </label> <br />
                <input id="diameter" type="number" placeholder='Diameter' value={diameter} readOnly={calculatedValue === "diameter" ? true : false} onChange={(e) => updateDiameter(e.target.value)}></input>
                <br />
                <label htmlFor="velocity">Flow velocity (m/s): </label> <br />
                <input id="velocity" type="number" placeholder='Velocity' value={velocity} readOnly={calculatedValue === "velocity" ? true : false} onChange={(e) => updateVelocity(e.target.value)}></input>
                <br />
                <label htmlFor="density">Density (kg/m3): </label> <br />
                <input id="density" type="number" placeholder='Density' value={density} readOnly={calculatedValue === "density" ? true : false} onChange={(e) => updateDensity(e.target.value)}></input>
            </form>
        </div>
    );
};

export default Form;
