import d3 from './d3.js';

const colors = ["hsl(0, 100%, 90%)", "hsl(0, 100%, 80%)", "hsl(0, 100%, 70%)", "hsl(0, 100%, 60%)", "hsl(0, 100%, 50%)", "hsl(0, 100%, 40%)"];

let width = 960;
let height= 600;
let svg = d3.selectAll("svg")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

