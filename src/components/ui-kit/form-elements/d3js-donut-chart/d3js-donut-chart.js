import './d3js-donut-chart.scss';
import 'd3/dist/d3.min.js';

var d3 = require('d3');

const innerRadius = 5;
const colorSmooth = 100; //smooth transition of colors (resolution)
const innerText = 'голосов'; // TODO склонения голосов
const innerScore = '260';

// values in percents
var percentsGreat = 50;
var percentsGood = 25;
var percentsNormal = 25;
var percentsBad = 0;

// "start", "end" arcs colors pair per value
var greatStartColor = '#FFE39C';
var greatEndColor = '#FFBA9C';
var goodStartColor = '#6FCF97';
var goodEndColor = '#66D2EA';
var normalStartColor = '#BC9CFF';
var normalEndColor = '#8BA4F9';
var badStartColor = '#919191';
var badEndColor = '#3D4975';

//indent between arcs
var indent = 1;

// define the workspace and set the origin to its center
var svg = d3.select('.d3js-donut-chart__chart'),
  width = svg.attr('width'),
  height = svg.attr('height'),
  g = svg
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

var radius = d3.min([width, height]) / 2;

var arc = d3
  .arc()
  .innerRadius(radius - innerRadius)
  .outerRadius(radius)
  .padAngle((_, i) => (color2(i) === color2(i + indent) ? 0 : 1))
  .startAngle(function (d) {
    return d;
  })
  .endAngle(function (d) {
    return d + (dblpi / colorSmooth) * 1.2;
  }); // 1.2 to block artifacts on the transitions

var great = (colorSmooth / 100) * percentsGreat;
var good = (colorSmooth / 100) * percentsGood + great;
var normal = (colorSmooth / 100) * percentsNormal + good;
var bad = (colorSmooth / 100) * percentsBad + normal;

var dblpi = 2 * Math.PI;

var color = d3
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

g.selectAll('path')
  .data(d3.range(0, dblpi, dblpi / colorSmooth))
  .enter()
  .append('path')
  .attr('d', arc)
  .style('fill', function (d, i) {
    return color(i);
  });

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
