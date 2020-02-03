import * as d3 from 'd3';

function getData(url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

const colors = ["hsl(30, 100%, 90%)", "hsl(30, 100%, 80%)", "hsl(30, 100%, 70%)", "hsl(30, 100%, 60%)", "hsl(30, 100%, 50%)", "hsl(30, 100%, 40%)", "hsl(30, 100%, 30%)", "hsl(30, 100%, 20%)"];

let width = 960;
let height= 600;
let svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height);

let path = d3.geoPath();

let data = d3.map();

let x = d3.range(0, 100, 100/8);

let scale = d3.scaleLinear()
        .domain([0, 100])
        .range([600, 860]);
        
let colorScale = d3.scaleThreshold()
    .domain(x)
    .range(colors);

let legend = d3.select("svg")
                .append("g")
                .attr("id", "legend")
                .attr("transform", "translate(0, 40)")
                .selectAll("rect")
                .data(x)
                .enter()
                .append("rect")
                .attr("height", 8)
                .attr("x", (d, i) => {
                    return (i*30) + 600;
                })
                .attr("width", 30)
                .attr("fill", (d, i) => colors[i]);

legend.call(d3.axisBottom(scale)
                .tickSize(13)
                .tickFormat((scale) => Math.round(scale) + "%")
                .tickValues(colorScale.domain()))
                .select(".domain")
                .remove();


let tooltip = d3.select("main")
                .append("div")
                .attr("id", "tooltip");

let education = getData("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json");
let county = getData("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json");

Promise.all([education, county]).then((data) => {
    education = data[0];
    county = data[1];
    console.log(education);
    console.log(county);
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
        .attr("d", path)
        .on("mouseover", (d) => {
            tooltip.style("opacity", 0.9);
            tooltip.html(() => {
                let match = education.filter(e => {
                    return e.fips === d.id;
                });
    
                if (match[0]) {
                    return `${match[0].area_name}, ${match[0].state} ${match[0].bachelorsOrHigher}%`;
                }
            })
            .attr("data-education", () => {
                let match = education.filter(e => {
                    return e.fips === d.id;
                });
    
                if (match[0]) {
                    return match[0].bachelorsOrHigher;
                }
            })
            .style("left", `${d3.event.pageX + 10}px`)
            .style("top", `${d3.event.pageY - 28}px`);
        })
        .on("mouseout", (d) => {
            tooltip.style("opacity", 0);
        });
        
});

