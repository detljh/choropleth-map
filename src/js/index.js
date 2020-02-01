import * as d3 from 'd3';

function getData(url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

const colors = ["hsl(0, 100%, 90%)", "hsl(0, 100%, 80%)", "hsl(0, 100%, 70%)", "hsl(0, 100%, 60%)", "hsl(0, 100%, 50%)", "hsl(0, 100%, 40%)"];

let width = 960;
let height= 600;
let svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height);

let path = d3.geoPath();

let data = d3.map();
let colorScale = d3.scaleThreshold()
    .domain(d3.range(0, 100, 100/8))
    .range(d3.schemeBlues[9]);
console.log(colorScale);

let education = getData("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json");
let county = getData("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json");

Promise.all([education, county]).then((data) => {
    education = data[0];
    county = data[1];

    svg.append("g")
        .attr("class", "counties")
        .selectAll("path")
        .data(topojson.feature(county, county.objects.counties).features)
        .enter()
        .append("path")
        .attr("class", "county")
        .attr("data-fips", (d) => d.id)
        .attr("data-education", (d) => {
            let match = education.filter(e => {
                return e.fips === d.id;
            });

            if (match[0]) {
                return match[0].bachelorsOrHigher;
            }
        })
        .attr("fill", (d) => {
            let match = education.filter(e => {
                return e.fips === d.id;
            });

            if (match[0]) {
                return colorScale(match[0].bachelorsOrHigher);
            }
        })
        .attr("d", path);
});

