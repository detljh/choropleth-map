import * as d3 from 'd3';

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

let path = d3.geoPath();
let data = d3.map();

let education = getData("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json");
let county = getData("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json");

Promise.all([education, county]).then((data) => {
    education = data[0];
    county = data[1];

    let bachelors = education.map((d) => d.bachelorsOrHigher);
    let min = d3.min(bachelors);
    let max = d3.max(bachelors);
    let domainNum = 9;
    let scaleWidth = 34;
    let step = (max-min)/domainNum;
    let xShift = 560;

    let x = d3.range(min + step, max+step, step);
    let scale = d3.scaleLinear()
            .domain([min, max])
            .range([xShift, (xShift + domainNum*scaleWidth)]);

    const colors = [];
    for (let i = domainNum + 1; i > 0; i--) {
        let color = `hsl(30, 60%, ${i*(100/(domainNum+1))-5}%)`;
        colors.push(color);
    }

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
                    .tickValues([min, ...x]))
                    .select(".domain")
                    .remove();


    let tooltip = d3.select("main")
                    .append("div")
                    .attr("id", "tooltip");

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

