/* eslint-disable no-multi-spaces */
import 'd3/dist/d3.min';

import './d3js-donut-chart.scss';

const d3 = require('d3');

// "start", "end" arcs colors pair per value
const greatColorStart = '#FFE39C';
const greatColorEnd = '#FFBA9C';
const goodColorStart = '#6FCF97';
const goodColorEnd = '#66D2EA';
const normalColorStart = '#BC9CFF';
const normalColorEnd = '#8BA4F9';
const badColorStart = '#919191';
const badColorEnd = '#3D4975';

const indentBetweenArcs = 1;

// define the workspace and set the origin to its center
const svg = d3.select('.js-d3js-donut-chart__chart');
const width = svg.attr('width');
const height = svg.attr('height');

const percentsGreat = Number(svg.attr('data-great'));
const percentsGood = Number(svg.attr('data-good'));
const percentsNormal = Number(svg.attr('data-normal'));
const percentsBad = Number(svg.attr('data-bad'));

const innerRadius = 5;
const colorSmooth = 100; /* smooth transition of colors (resolution) */
const innerScore = percentsGreat + percentsGood + percentsNormal + percentsBad;

let innerText = '';
switch (innerScore % 10) {
  case 1:
    innerText = 'голос';
    break;
  case 2:
  case 3:
  case 4:
    innerText = 'голоса';
    break;
  default:
    innerText = 'голосов';
}

const g = svg
  .append('g')
  .attr('transform', `translate(${width / 2}, ${height / 2})`);

const radius = d3.min([width, height]) / 2;

const great = (colorSmooth / innerScore) * percentsGreat;
const good = (colorSmooth / innerScore) * percentsGood + great;
const normal = (colorSmooth / innerScore) * percentsNormal + good;
const bad = (colorSmooth / innerScore) * percentsBad + normal;

const dblpi = 2 * Math.PI;

const color = d3
  .scaleLinear()
  .domain([0, great, great, good, good, normal, normal, bad])
  .range([
    greatColorStart,
    greatColorEnd,
    goodColorStart,
    goodColorEnd,
    normalColorStart,
    normalColorEnd,
    badColorStart,
    badColorEnd,
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
  .padAngle((_, i) => (color2(i) === color2(i + indentBetweenArcs) ? 0 : 1))
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
