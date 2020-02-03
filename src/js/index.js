import d3 from './d3.js';
import '../css/index.css'

/* fetches data async and returns a promise */
function getData(url) {
    return fetch(url)
    .then(response => response.json())
    .then(data => data);
}

let width = 960;
let height= 600;
let svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height);

// create object for generating svg path instructions from geoJSON data
let path = d3.geoPath();

// load in data
let education = getData("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json");
let county = getData("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json");

// once all data is loaded in 
Promise.all([education, county]).then((data) => {
    education = data[0];
    county = data[1];

    // create new array of only the bachelors data to find min and max of data to create domain for scale
    let bachelors = education.map((d) => d.bachelorsOrHigher);
    let min = d3.min(bachelors);
    let max = d3.max(bachelors);
    // number of intervals
    let domainNum = 9;
    // width of each interval for legend
    let scaleWidth = 34;
    // size of interval
    let step = (max-min)/domainNum;
    // shift of legend axis placement on page horizontally
    let xShift = 560;

    /* x domain for color scale
     * adds step to range as colorScale() function calculates values using <= the domain
     * eg. colorScale(x) where x=min-min+step will compare x <= min+step and assigns it to first color as
     * intended
     */
    let x = d3.range(min+step, max+step, step);
    // scale for legend should start at min to max
    let scale = d3.scaleLinear()
            .domain([min, max])
            // start and end position of legend
            .range([xShift, (xShift + domainNum*scaleWidth)]);

    const colors = [];
    for (let i = domainNum + 1; i > 0; i--) {
        let color = `hsl(30, 60%, ${i*(100/(domainNum+1))-5}%)`;
        colors.push(color);
    }

    // assign data domain to different colours
    let colorScale = d3.scaleThreshold()
        .domain(x)
        .range(colors);

    let legend = svg.append("g")
                    .attr("id", "legend")
                    .attr("transform", "translate(0, 30)");

    legend.selectAll("rect")
        .data(x)
        .enter()
        .append("rect")
        .attr("height", 10)
        .attr("x", (d, i) => {
            return (i*scaleWidth) + xShift;
        })
        .attr("width", scaleWidth)
        .attr("fill", (d, i) => colors[i]);


    legend.call(d3.axisBottom(scale)
                    .tickSize(16)
                    .tickFormat((x) => Math.round(x) + "%")
                    // add min value to x domain to show the first tick/min value
                    .tickValues([min, ...x]))
                    // remove domain path from legend (top border of legend)
                    .select(".domain")
                    .remove();


    let tooltip = d3.select("main")
                    .append("div")
                    .attr("id", "tooltip");

    svg.append("g")
        .attr("class", "counties")
        .selectAll("path")
        // create topojson object of county data and extract features from it to create a path 
        .data(topojson.feature(county, county.objects.counties).features)
        .enter()
        .append("path")
        .attr("class", "county")
        .attr("data-fips", (d) => d.id)
        .attr("data-education", (d) => {
            // find matching education data for county
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
        // draw path by attaching geoPath
        .attr("d", path)
        // tooltip on mouseover
        .on("mouseover", (d) => {
            d3.getEvent = () => require("d3-selection").event;
            
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
            .style("left", `${d3.getEvent().pageX + 10}px`)
            .style("top", `${d3.getEvent().pageY - 28}px`);
        })
        // hide tooltip on mouseout
        .on("mouseout", (d) => {
            tooltip.style("opacity", 0);
        });     
});

