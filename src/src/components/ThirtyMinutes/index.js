import React, { Component } from 'react';
import * as d3 from 'd3';
import _ from 'lodash';
import ReactFauxDom from 'react-faux-dom';

import styles from './styles.scss';

class ThirtyMinutes extends Component {
    render() {
        let self = this;

        let svg = new ReactFauxDom.Element('svg');
    
        svg.setAttribute('width', 300);
        svg.setAttribute('height', 100);
        svg.setAttribute('0 0 200 200');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.style.setProperty('margin', '0 5%');

        let timeBlockRects;

        timeBlockRects = d3.select(svg)
                .selectAll('.time_block_rect')
                .data([1,2,3,4,5,6,7,8])
                .enter().append('rect')
                .attr('x', (d) => d*30)
                .attr('y', 0)
                .attr('width', 30)
                .attr('height', 30)
                .style('fill', 'red')
                .style('stroke', 'white')
                .on('click', function(d) {
                    let completed = true,
                        completedAt = '08-06-12-30';
                    
                    d3.select(this)
                        .attr('fill', 'black');
                    
                    fetch('/api/', {
                        method: 'post',
                        body: JSON.stringify(opts)
                        }).then(function(response) {
                        return response.json();
                        }).then(function(data) {
                        ChromeSamples.log('Created Gist:', data.html_url);
                        });
                });

        return (
            <div>
                {svg.toReact()}
                <div className={styles.inputTimeblock}>dd</div>
            </div>
        );
    }
}

export default ThirtyMinutes;