import { default as data } from './data/usa/gdp_usa_year_json.json';
import * as lrm from './linear-reg-manual.js';


// Fixed, sample data values for use
const SampleLabels = [1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
const SampleData = [92.2, 77.4, 59.5, 57.2, 66.8, 74.3, 84.9, 93, 87.4, 93.5, 102.9, 129.4, 166, 203.1, 224.6, 228.2, 227.8, 249.9, 274.8, 272.8, 300.2, 347.3, 367.7, 389.7, 391.1, 426.2, 450.1, 474.9, 482, 522.5, 543.3, 563.3, 605.1, 638.6, 685.8, 743.7, 815, 861.7, 942.5, 1019.9, 1075.9, 1167.8, 1282.4, 1428.5, 1548.8, 1688.9, 1877.6, 2086, 2356.6, 2632.1, 2862.5, 3211, 3345, 3638.1, 4040.7, 4346.7, 4590.2, 4870.2, 5252.6, 5657.7, 5979.6, 6174, 6539.3, 6878.7, 7308.8, 7664.1, 8100.2, 8608.5, 9089.2, 9660.6, 10284.8, 10621.8, 10977.5, 11510.7, 12274.9, 13093.7, 13855.9, 14477.6, 14718.6, 14418.7, 14964.4, 15517.9, 16155.3, 16691.5, 17427.6, 18120.7]


const USAGDPYears = data.map(({ date }) => date)
const USAGDPLevel = data.map(({ level_current }) => level_current)

// LIST COMPREHENSION CONVERSION: 40 Years after 2015
const USAGDPPredictedYears = Array.from(Array(40).keys()).map((i) => (i+1) + 2015);



const fitSlope = lrm.getM(USAGDPYears, USAGDPLevel);
const fitBase = lrm.getB(USAGDPYears, USAGDPLevel, fitSlope);
const lineErrorBuffer = -5000; //TODO: improved machine learning to measure this better
const USAGDPPredictedLevel = lrm.fit(USAGDPPredictedYears, fitSlope, fitBase).map((x) => (x / 1000)+lineErrorBuffer).map((x) => x.toFixed(2));


export {
  SampleLabels,
  SampleData,
  USAGDPYears,
  USAGDPLevel, 
  USAGDPPredictedYears,
  USAGDPPredictedLevel

}


