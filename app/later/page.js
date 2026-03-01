"use client";

import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function LaterPage() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchQueue();
  }, []);

  const fetchQueue = async () => {
    try {
      const res = await api.get("/api/later");
      setItems(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-4">
        Later Queue
      </h1>

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Event ID</th>
            <th className="p-2 border">Process At</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Retries</th>
          </tr>
        </thead>

        <tbody>

          {items.map((item) => (
            <tr key={item._id}>

              <td className="p-2 border">
                {item.eventId}
              </td>

              <td className="p-2 border">
                {new Date(item.processAt).toLocaleString()}
              </td>

              <td className="p-2 border">
                {item.status}
              </td>

              <td className="p-2 border">
                {item.retries}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}