/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  // Tooltip,
  // XAxis,
  // YAxis,
  // CartesianGrid,
  // Rectangle,
  ResponsiveContainer,
} from "recharts";
// const formatYAxisLabel = (value) => {
//   return `${value / 1000}K`;
// };

const CustomBarShape = (props) => {
  const { x, y, width, height, fill, radius } = props;

  // Customize the shape here, for example, a rounded rectangle

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={radius}
      ry={radius}
      fill={fill}
    />
  );
};

const BarChartComponent = ({ barSize, data, radius }) => {
  return (
    <ResponsiveContainer width={"100%"} height={100}>
      <BarChart data={data}>
        <Bar
          dataKey="green"
          stroke="#FD4A22"
          fill="#FD4A22"
          strokeLinecap="round"
          strokeLinejoin="round"
          barSize={barSize}
          maxBarSize={10}
          strokeWidth={5}
          className="cursor-pointer"
          shape={<CustomBarShape width={barSize} radius={radius} />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
