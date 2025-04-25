import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines'; 

interface SparklineChartProps {
  data: number[]; 
}

const SparklineChart: React.FC<SparklineChartProps> = ({ data }) => {
  return (
    <div>
      <Sparklines data={data} width={100} height={20}>
        <SparklinesLine color="green" />
      </Sparklines>
    </div>
  );
};

export default SparklineChart;
