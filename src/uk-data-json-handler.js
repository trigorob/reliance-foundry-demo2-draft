import { default as data } from './data/uk/gdp-uk_json.json';
import * as lrm from './linear-reg-manual.js';


const UKGDPYears = data.map(({ date }) => date)
const UKGDPLevel = data.map(({ GDP }) => GDP).map((x) => x / 1000);//.map((x) => x.toFixed(2))


// LIST COMPREHENSION CONVERSION: 40 Years after 2015
const UKGDPPredictedYears = Array.from(Array(40).keys()).map((i) => (i+1) + 2015);



const fitSlope = lrm.getM(UKGDPYears, UKGDPLevel);
const fitBase = lrm.getB(UKGDPYears, UKGDPLevel, fitSlope);
const lineErrorBuffer = 1000; //TODO: improved machine learning to measure this better
const UKGDPPredictedLevel = lrm.fit(UKGDPPredictedYears, fitSlope, fitBase).map((x) => (x / 1000)+lineErrorBuffer).map((x) => x.toFixed(2));


export {
  UKGDPYears,
  UKGDPLevel, 
  UKGDPPredictedYears,
  UKGDPPredictedLevel

}


