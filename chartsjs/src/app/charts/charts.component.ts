import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
   }

  ngOnInit(): void {

    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
    const myChart1 = new Chart("myChart1", {
      type: 'line',
    //   xAxis: [
    //     {
    //       width: '49%',
    //       scrollbar: {
    //         enabled: true
    //       },
    //       categories: keys,
    //       title: {
    //         text: 'Pre Period',
    //         style: {
    //           fontFamily: 'Mulish_regular',
    //           fontWeight: 'Bold',
    //           fontSize: '15px',
    //         }
    //       },
    //     },
    //     {
    //       width: '49%',
    //       left: '52%',
    //       scrollbar: {
    //         enabled: true
    //       },
    //       categories: keys2,
    //       title: {
    //         text: 'Post Period',
    //         style: {
    //           fontFamily: 'Mulish_regular',
    //           fontWeight: 'Bold',
    //           fontSize: '15px',
    //         }
    //       },
    //       offset: 0,
    //     }],
      data: {
          labels: ['labels','labels','labels','labels','labels','labels','labels'],
          datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(175, 162, 192)',
            tension: 0.1
          },{
            label: 'My second Dataset',
            data: [65, 69, 83, 41, 66, 35, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 42)',
            tension: 0.1
          }
          ]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
    const myChart2 = new Chart("myChart2", {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
  }

}
