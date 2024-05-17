import {
  BarChart,
  Bar,
  // Tooltip,
  // XAxis,
  // YAxis,
  CartesianGrid,
  // Rectangle,
  ResponsiveContainer,
} from "recharts";
// const formatYAxisLabel = (value) => {
//   return `${value / 1000}K`;
// };

const SAMPLEA_DATA = [
  { month: "Monday", green: 500 },
  { month: "Tuesday", green: 800 },
  { month: "Wenesday", green: 1000 },
  { month: "Thursday", green: 1200 },
  { month: "Friday", green: 1000 },
  { month: "Saturday", green: 800 },
  { month: "Sunday", green: 500 },
];

// const COLORS = {
//   lightPurple: "#F2f2F1",
//   lightPurpleActive: "#FF660A",
// };

// interface BaseSingleBarChartProps {
//   height: number;
//   color: keyof typeof COLORS;
//   activeColor: keyof typeof COLORS;
//   legend?: string;
//   width?: number;
//   yAxisWidth?: number;
//   yAxisMargin?: number;
//   barSize?: number;
//   dataKey?: string;
//   dataArray?: Record<string, unknown>[];
// }

const TwinBarChart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={70}>
      <BarChart
        data={SAMPLEA_DATA}
        margin={{
          top: 5,
          right: 30,
          left: -2,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="green"
          stroke="#8A5CFF"
          fill="#8A5CFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          barSize={4}
          maxBarSize={5}
          strokeWidth={3}
          className="cursor-pointer"
        />
        <Bar
          dataKey="green"
          stroke="#FFD028"
          fill="#FFD028"
          strokeLinecap="round"
          strokeLinejoin="round"
          barSize={4}
          maxBarSize={5}
          strokeWidth={3}
          className="cursor-pointer"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TwinBarChart;
