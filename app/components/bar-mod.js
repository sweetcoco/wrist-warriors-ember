import Ember from 'ember';

export default Ember.Component.extend({
    init: function() {
        this._super();
    },
    didInsertElement: function() {
        // have to wait for the template to be in the DOM
        this.showGraph();
    },
    showGraph: function() {
        var dataset = [25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12, 17, 18, 10, 24, 18, 25, 9, 3 ];

        // var w = 500;
        // var h = 500;
        var barPadding = 1;
        var margin = {
            top: 20,
            right: 20,
            bottom: 30,
            left: 20
          };

        var el = d3.select('.bar-mod .graph');

        var w = el[0][0].offsetWidth - margin.left - margin.right;
        var h = w/2;

        var svg = d3.select(".bar-mod .graph")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function(d, i) {
                return i * (w / dataset.length); // dynamically move bar to the right
            })
            .attr("y", h)
            .attr("width", w / dataset.length - barPadding) // make sure bar-width is dynamic
            .attr("height", 0)
            .transition()
            .duration(2000)
            .attr("y", function(d) {
                 return h - (d * 4) ;  // Height minus data value because svg bars are upside down
            })
            .attr("height", function(d) {
                return d * 4;
            });

        svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text(function(d) {
               return d;
            })
            .attr("x", function(d, i) {
                return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
            })
            .attr("y", function(d) {
                return h - (d * 4) + 14;              // +15
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white")
            .attr("text-anchor", "middle");

            console.log('your mom!');
        }
});
