import './d3js-donut-chart.scss';
import 'd3/dist/d3.min';

const d3 = require('d3');

const innerRadius = 5;
const colorSmooth = 100; /* smooth transition of colors (resolution) */
const innerText = 'голосов';
const innerScore = '260';

// values in percents
const percentsGreat = 50;
const percentsGood = 25;
const percentsNormal = 25;
const percentsBad = 0;

// "start", "end" arcs colors pair per value
const greatStartColor = '#FFE39C';
const greatEndColor = '#FFBA9C';
const goodStartColor = '#6FCF97';
const goodEndColor = '#66D2EA';
const normalStartColor = '#BC9CFF';
const normalEndColor = '#8BA4F9';
const badStartColor = '#919191';
const badEndColor = '#3D4975';

// indent between arcs
const indent = 1;

// define the workspace and set the origin to its center
const svg = d3.select('.d3js-donut-chart__chart');
const width = svg.attr('width');
const height = svg.attr('height');
const g = svg
  .append('g')
  .attr('transform', `translate(${width / 2},${height / 2})`);

const radius = d3.min([width, height]) / 2;

const great = (colorSmooth / 100) * percentsGreat;
const good = (colorSmooth / 100) * percentsGood + great;
const normal = (colorSmooth / 100) * percentsNormal + good;
const bad = (colorSmooth / 100) * percentsBad + normal;

const dblpi = 2 * Math.PI;

const color = d3
  .scaleLinear()
  .domain([0, great, great, good, good, normal, normal, bad])
  .range([
    greatStartColor,
    greatEndColor,
    goodStartColor,
    goodEndColor,
    normalStartColor,
    normalEndColor,
    badStartColor,
    badEndColor,
  ])
  .interpolate(d3.interpolateRgb);

const color2 = d3
  .scaleThreshold()
  .domain([great, good, normal, bad])
  .range(d3.range(5));

const arc = d3
  .arc()
  .innerRadius(radius - innerRadius)
  .outerRadius(radius)
  .padAngle((_, i) => (color2(i) === color2(i + indent) ? 0 : 1))
  .startAngle((d) => d)
  .endAngle((d) => d + (dblpi / colorSmooth) * 1.2); // 1.2 to block artifacts on the transitions

g.selectAll('path')
  .data(d3.range(0, dblpi, dblpi / colorSmooth))
  .enter()
  .append('path')
  .attr('d', arc)
  .style('fill', (d, i) => color(i));

g.append('text')
  .attr('class', 'd3js-donut-chart__innerScore')
  .attr('dy', '0em') // align the text to the center of the chart
  .attr('text-anchor', 'middle')
  .text(innerScore);

g.append('text')
  .attr('class', 'd3js-donut-chart__innerText')
  .attr('dy', '1.2em')
  .attr('text-anchor', 'middle')
  .text(innerText);
