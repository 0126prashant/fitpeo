import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Data = () => {
  const [selectedBar, setSelectedBar] = useState(null);

  const barSeries = [{
    name: "Earning",
    data: [9, 8.1, 5.0, 10.1, 4.0, 7.6, 8.2, 9.3, 1.4, 10.8, 10.5, 9.2]
  }];

  const donutSeries = [44, 55, 60]; 

  const barOptions = {
    chart: {
      height: 65,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '0px',
        colors: ["#304758"]
      }
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    yaxis: {
      show: false,
    },
    title: {
      text: 'Monthly Earnings',
      floating: true,
      offsetY: 0, // Adjust this value as needed
      align: 'left', // Align to the left
      style: {
        color: selectedBar !== null ? 'blue' : '#808080'
      }
    }
  };

  const donutOptions = {
    colors: ["#EC407A", "#303F9F", "#E8EAF6"],
    plotOptions: {
      pie: {
        donut: {
          size: '60%', // Adjust as needed
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '22px', // Adjust the font size of the label
              color: '#000000', // Color of the label
            },
            value: {
              show: true,
              fontSize: '16px', // Adjust the font size of the value
              color: '#000000', // Color of the value
            },
            total: {
              show: true,
              label: 'Total',
              color: '#000000',
              formatter: function (w) {
                return donutSeries.reduce((a, b) => a + b, 0) + '%'; 
              }
            }
          }
        },
      },
    },
    legend: {
      show: false
    },
  }
  

  const handleBarClick = ({ dataPointIndex }) => {
    setSelectedBar(dataPointIndex);
  }

  const selectedColor = selectedBar !== null ? 'blue' : '#808080';

  return (
    <div style={{marginTop:"50px"}}>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ width: '75%',backgroundColor:"white" }}>
        
        <div style={{ textAlign: 'left', fontSize: '20px', fontWeight: 'bold',marginLeft:"10px" }}>
        Overview
      </div>
          <div id="bar-chart">
            <ReactApexChart options={barOptions} series={barSeries} type="bar" height={350} />
          </div>
          <div style={{ color: selectedColor, position: 'absolute', top: '20px', right: '20px', fontWeight: 'bold' }}>
            {selectedBar !== null && `Selected Bar: ${barSeries[0].data[selectedBar]}%`}
          </div>
        </div>
        <div style={{ width: '40%',marginLeft:"50px",backgroundColor:"white"}}>
          <div style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'bold', }}>
            Customers
          </div>
          <div style={{ textAlign: 'left', fontSize: '10px', marginBottom: '20px',color:"grey" }}>
            Customers that buy products
          </div>
          <div id="donut-chart">
            <ReactApexChart options={donutOptions} series={donutSeries} type="donut" height={250} />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;