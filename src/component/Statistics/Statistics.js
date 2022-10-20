import { useLoaderData } from "react-router-dom";
import "./Statistics.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  let data = useLoaderData();
  data = data.data;
  console.log(data);
  return (
    <div className="stats-outerdiv">
      <div className="stats-innerdiv">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart className="stats" width={1000} height={600} data={data}>
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
