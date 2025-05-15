'use client';

import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import type { ApexOptions } from 'apexcharts';

// Dynamically import ApexCharts to avoid SSR issues
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type Props = {
    width: number,
    height: number,
}

const SplineChart:FC<Props> = ({width, height})=>  {
  const [series] = useState([
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ]);

   const [options] = useState<ApexOptions>({
    chart: {
      height: 100,
      type: 'area',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
      labels: {
        show: false, // Hide x-axis labels
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
      axisBorder: {
        show: false, // x-axis border line
      },
    },
    yaxis: {
      show: false, // hide y-axis including labels, ticks, line
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    grid: {
      show: false, //  remove all grid lines
    },
    markers: {
      size: 0,
    },
    
  });


  return (
    <div className="p-4">
      <ApexChart options={options} series={series} type="area" height={height} width={width} />
    </div>
  );
}


export default SplineChart
