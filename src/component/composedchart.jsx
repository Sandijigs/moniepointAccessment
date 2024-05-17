/* eslint-disable react/prop-types */
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "2021",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "2020",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "2019",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "2018",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "2017",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
];

const CustomBarShape = ({
  x,
  y,
  width,
  height,
  fill,
  radius,
  dataKey,
  data,
}) => {
  const maxValue = Math.max(...data.map((entry) => entry[dataKey]));

  const isHighest = height === 0 || height === maxValue;

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={radius}
      ry={radius}
      fill={isHighest ? "#FFD028" : fill} // Set a different color for the highest value
    />
  );
};

const HeightBar = () => {
  return (
    <ResponsiveContainer width={"120%"} height={220}>
      <ComposedChart
        width={"100%"}
        height={100}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        {/* <CartesianGrid stroke="#f5f5f5" /> */}
        <XAxis
          dataKey="name"
          scale="band"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 8, fill: "#9E9E9E", fontFamily: "poppins" }}
        />
        <YAxis axisLine={false} tick={() => null} tickLine={false} />
        <Bar
          dataKey="pv"
          fill="#E6E6E6"
          shape={
            <CustomBarShape width={20} radius={4} dataKey="pv" data={data} />
          }
        />
        <Line type="monotone" dataKey="uv" stroke="#FFD028" dot={false} />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
export default HeightBar;
