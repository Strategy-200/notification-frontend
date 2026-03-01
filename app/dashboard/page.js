"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../lib/api";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

export default function Dashboard() {

  const router = useRouter();
  const [metrics, setMetrics] = useState(null);

  // -----------------------
  // Auth Protection
  // -----------------------

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      router.push("/login");
      return;
    }

    fetchMetrics();

    const interval = setInterval(fetchMetrics, 5000);

    return () => clearInterval(interval);

  }, []);

  // -----------------------
  // Fetch Metrics
  // -----------------------

  const fetchMetrics = async () => {
    try {
      const res = await api.get("/api/metrics");
      setMetrics(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!metrics) return <p>Loading...</p>;

  const data = [
    { name: "NOW", value: metrics.nowCount },
    { name: "LATER", value: metrics.laterCount },
    { name: "NEVER", value: metrics.neverCount },
  ];

  const COLORS = ["#00C49F", "#FFBB28", "#FF4444"];

  return (
    <div>

      <h1 className="text-2xl font-bold mb-4">
        Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">

        <div className="p-4 bg-white shadow rounded">
          <h2>Total Events</h2>
          <p className="text-xl font-bold">
            {metrics.totalEvents}
          </p>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h2>Queue Size</h2>
          <p className="text-xl font-bold">
            {metrics.queueSize}
          </p>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h2>NOW Decisions</h2>
          <p className="text-xl font-bold">
            {metrics.nowCount}
          </p>
        </div>

      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 shadow rounded w-96">

        <PieChart width={300} height={300}>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>

      </div>

    </div>
  );
}