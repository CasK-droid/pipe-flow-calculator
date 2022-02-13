const pi = 3.14159;

const convertInchToMeter = (inch) => {
    return inch * 0.0254;
}

const convertMeterToInch = (meter) => {
    return meter / 0.0254;
}

const calcArea = (diameter) => {
    return 0.25 * pi * diameter ** 2;
}

const calcFlow = (diameter, vel, rho) => {
    const area = calcArea(convertInchToMeter(diameter));
    const flow = area * vel * rho * 3.6;
    return Math.round(flow * 100) / 100;
}

const calcDiameter = (flow, vel, rho) => {
    const area = flow / 3.6 / (vel * rho);
    const diameter = convertMeterToInch(((4 * area) / pi) ** 0.5);
    return Math.round(diameter * 100) / 100;
}

const calcVel = (flow, diameter, rho) => {
    const area = calcArea(convertInchToMeter(diameter));
    const vel = flow / 3.6 / (area * rho);
    return Math.round(vel * 100) / 100;
}

const calcRho = (flow, diameter, vel) => {
    const area = calcArea(convertInchToMeter(diameter));
    const rho =  flow / 3.6 / (area * vel);
    return Math.round(rho * 100) / 100;
}

export {calcFlow, calcDiameter, calcVel, calcRho};