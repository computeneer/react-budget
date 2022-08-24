import React, { memo } from "react";
import { PieChart, Pie, Cell } from "recharts";

type CakeChartProps = {
  data: ChartData[];
  colors?: string[];
};

type ChartData = {
  name: string;
  value: number;
};

const CakeChart: React.FC<CakeChartProps> = ({ data, colors }) => {
  const COLORS = colors ?? ["#00C49F", "#FFBB28", "#FF8042", "#0088FE"];
  return (
    <PieChart width={500} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={120}
        label
        fill="#8884d8"
        paddingAngle={2}
        dataKey="value"
        nameKey="name"
        animationDuration={1500}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default memo(CakeChart);
