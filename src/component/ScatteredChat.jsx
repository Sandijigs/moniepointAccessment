/* eslint-disable react/prop-types */
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data03 = [
  { name: "jan", y: 20 },
  { name: "feb", y: 200 },
  { name: "mar", y: 190 },
  { name: "apr", y: 300 },
  { name: "may", y: 280 },
  { name: "jun", y: 450 },
  { name: "jul", y: 370 },
  { name: "aug", y: 550 },
  { name: "sept", y: 490 },
  { name: "oct", y: 650 },
  { name: "nov", y: 630 },
  { name: "dec", y: 800 },
];

const CustomizedShape = ({ cx, cy }) => {
  return <circle cx={cx} cy={cy} r={3} fill="#FFD028" />;
};

const ScatteredLine = () => {
  return (
    <ResponsiveContainer width="140%" height={170}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 8, fill: "#9E9E9E", fontFamily: "poppins" }}
        />
        <YAxis
          dataKey="y"
          axisLine={false}
          tick={() => null}
          tickLine={false}
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter
          data={data03}
          fill="#FFD028"
          line
          shape={<CustomizedShape />}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatteredLine;
