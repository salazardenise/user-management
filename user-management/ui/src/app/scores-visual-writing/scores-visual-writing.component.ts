import { Component, OnInit, ElementRef, Input } from '@angular/core';
import {Score} from './../types/score';
import {
  D3Service,
  D3,
  Axis,
  BrushBehavior,
  BrushSelection,
  D3BrushEvent,
  ScaleLinear,
  ScaleOrdinal,
  Selection,
  Transition
} from 'd3-ng2-service';

// used instructions at https://github.com/tomwanzek/d3-ng2-service to set-up d3 service for Angular
// followed horizontal bar chart example at https://www.pshrmn.com/tutorials/d3/bar-charts/#horizontal

@Component({
  selector: 'app-scores-visual-writing',
  templateUrl: './scores-visual-writing.component.html',
  styleUrls: ['./scores-visual-writing.component.css']
})
export class ScoresVisualWritingComponent implements OnInit {
  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;
  @Input() scores: Score[];

  constructor(private element: ElementRef, private d3Service: D3Service) {
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
   }

  ngOnInit() {
    this.createHistogram();
  }

  createHistogram() {
    let d3 = this.d3; // <-- for convenience use a block scope variable
    let d3ParentElement: Selection<any, any, any, any>; // <-- Use the Selection interface (very basic here for illustration only)
    let colors: any = [];

    // top ten reading scores bar chart
    this.scores.sort(compareWriting);

    if (this.parentNativeElement !== null) {
      let topTenWritingScores = this.scores.slice(0, 10);
      //console.log("parentNativeElement not null");
      colors = ['#BF3500', '#C30037', '#C700AA', '#7400CB', '#0000CF',
                '#0077D4', '	#00D8BB', '#00DC41', '#3DE000', '#C1E500'];
      
      var schoolNames = topTenWritingScores.map(score => score.school_name);
      var margin = {top: 40, right: 20, bottom: 50, left: 400};
      var fullWidth = 700;
      var fullHeight = 200;
      var width = fullWidth - margin.right - margin.left;
      var height = fullHeight - margin.top - margin.bottom;
      var svg = d3.select(this.parentNativeElement).append('svg')
        .attr('width', fullWidth)
        .attr('height', fullHeight)
        // this g is where the bar chart will be drawn
        .append('g')
          // translate it to leave room for the left and top margins
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


      var schoolNameScale = d3.scaleBand().domain(schoolNames).range([0, height]).paddingInner(0.1);
      var bandwidth = schoolNameScale.bandwidth() - 5;

      var maxWritingScore = d3.max(topTenWritingScores, function(d) { return parseInt(d.sat_writing_avg_score)});
      var writingScoreScale = d3.scaleLinear().domain([0, maxWritingScore]).range([0, width]);
      var barHolder = svg.append('g').classed('bar-holder', true);

      var xAxis = d3.axisBottom(writingScoreScale).tickSizeOuter(0);
      var yAxis = d3.axisLeft(schoolNameScale);
      
      // draw the axes
      svg.append('g').classed('x axis', true).attr('transform', 'translate(0,' + height + ')').call(xAxis);
      svg.append('g').classed('y axis', true).call(yAxis);
      
      // draw the bars
      var bars = barHolder.selectAll('rect.bar')
                .data(topTenWritingScores)
                .enter()
                .append('rect')
                .classed('bar', true)
                .attr('x', 0)
                .attr('width', function(d) {
                  return writingScoreScale(parseInt(d.sat_writing_avg_score));
                })
                .transition()
                .duration(1500)
                .attr('y', function(d) {
                  return schoolNameScale(d.school_name);
                })
                .attr('height', bandwidth)
                .attr('fill', function(d, i) {
                  return colors[i];
                });
        /*
        svg.append("text")
                .attr("x", (width / 2))             
                .attr("y", 0 - (margin.top / 2))
                .attr("text-anchor", "middle")  
                .style("font-size", "16px") 
                .style("font-weight", "bold")  
                .text("Top 10 SAT Writing Average Scores");
        */
    }
  }
}

function compareWriting(a, b) {
  const writingA = parseInt(a.sat_writing_avg_score);
  const wrtingB = parseInt(b.sat_writing_avg_score);
  let comparison = 0;
  if (writingA < wrtingB) {
    comparison = 1;
  } else if (writingA > wrtingB) {
    comparison = -1;
  }
  return comparison;
}
