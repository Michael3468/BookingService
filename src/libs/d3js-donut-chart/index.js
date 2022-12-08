import 'd3/dist/d3.min';

import './d3js-donut-chart.scss';

const d3 = require('d3');

// "start", "end" arcs colors pair per value
const chartColors = {
  greatStart: '#FFE39C',
  greatEnd: '#FFBA9C',
  goodStart: '#6FCF97',
  goodEnd: '#66D2EA',
  normalStart: '#BC9CFF',
  normalEnd: '#8BA4F9',
  badStart: '#919191',
  badEnd: '#3D4975',
};

class DonutChart {
  constructor(chartClassName, colors = chartColors) {
    this.donutChart = d3.select(chartClassName);
    this.colors = colors;

    this.percentsGreat = Number(this.donutChart.attr('data-great'));
    this.percentsGood = Number(this.donutChart.attr('data-good'));
    this.percentsNormal = Number(this.donutChart.attr('data-normal'));
    this.percentsBad = Number(this.donutChart.attr('data-bad'));

    this.innerScore = this.getTotalInnerScore();
    this.innerText = this.defineInnerText(this.innerScore);

    this.initChart();
  }

  getTotalInnerScore() {
    return this.percentsGreat + this.percentsGood + this.percentsNormal + this.percentsBad;
  }

  defineInnerText(innerScore) {
    let innerText = null;
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

    return innerText;
  }

  initChart() {
    const width = this.donutChart.attr('width');
    const height = this.donutChart.attr('height');
    const indentBetweenArcs = 1;
    const innerRadius = 5;
    const colorSmooth = 100; /* smooth transition of colors (resolution) */

    const g = (this.donutChart)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const radius = d3.min([width, height]) / 2;

    const great = (colorSmooth / this.innerScore) * this.percentsGreat;
    const good = (colorSmooth / this.innerScore) * this.percentsGood + great;
    const normal = (colorSmooth / this.innerScore) * this.percentsNormal + good;
    const bad = (colorSmooth / this.innerScore) * this.percentsBad + normal;

    const dblpi = 2 * Math.PI;

    const color = d3
      .scaleLinear()
      .domain([0, great, great, good, good, normal, normal, bad])
      .range([
        this.colors.greatStart,
        this.colors.greatEnd,
        this.colors.goodStart,
        this.colors.goodEnd,
        this.colors.normalStart,
        this.colors.normalEnd,
        this.colors.badStart,
        this.colors.badEnd,
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
      .endAngle(
        (d) => d + (dblpi / colorSmooth) * 1.2,
      ); // 1.2 to block artifacts on the transitions

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
      .text(this.innerScore);

    g.append('text')
      .attr('class', 'd3js-donut-chart__innerText')
      .attr('dy', '1.2em')
      .attr('text-anchor', 'middle')
      .text(this.innerText);
  }
}

export default DonutChart;
