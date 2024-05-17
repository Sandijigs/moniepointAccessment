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
  { name: "feb", y: 100 },
  { name: "mar", y: 30 },
  { name: "apr", y: 120 },
  { name: "may", y: 50 },
  { name: "jun", y: 150 },
  { name: "jul", y: 100 },
  { name: "aug", y: 190 },
  { name: "sept", y: 120 },
  { name: "oct", y: 230 },
  { name: "nov", y: 160 },
  { name: "dec", y: 290 },
];

const CustomizedShape = ({ cx, cy }) => {
  return <circle cx={cx} cy={cy} r={2} fill="#FFD028" />;
};

const SmallScatteredLine = () => {
  return (
    <ResponsiveContainer width="170%" height={110}>
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

export default SmallScatteredLine;
