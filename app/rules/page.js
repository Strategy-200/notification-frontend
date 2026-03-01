"use client";

import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function RulesPage() {

  const [rules, setRules] = useState([]);

  const [form, setForm] = useState({
    name: "",
    field: "",
    operator: "equals",
    value: "",
    action: "NOW",
    reason: "",
  });

  useEffect(() => {
    fetchRules();
  }, []);

  const fetchRules = async () => {
    const res = await api.get("/api/rules");
    setRules(res.data);
  };

  const createRule = async () => {
    await api.post("/api/rules", form);
    fetchRules();
  };

  const deleteRule = async (id) => {
    await api.delete(`/api/rules/${id}`);
    fetchRules();
  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-4">
        Rules Manager
      </h1>

      {/* Create Form */}
      <div className="border p-4 mb-6">

        <h2 className="font-bold mb-2">Create Rule</h2>

        <div className="flex flex-col gap-2 max-w-md">

          <input
            placeholder="Name"
            className="border p-2"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            placeholder="Field (eventType, priorityHint)"
            className="border p-2"
            onChange={(e) =>
              setForm({ ...form, field: e.target.value })
            }
          />

          <input
            placeholder="Value"
            className="border p-2"
            onChange={(e) =>
              setForm({ ...form, value: e.target.value })
            }
          />

          <select
            className="border p-2"
            onChange={(e) =>
              setForm({ ...form, action: e.target.value })
            }
          >
            <option>NOW</option>
            <option>LATER</option>
            <option>NEVER</option>
          </select>

          <input
            placeholder="Reason"
            className="border p-2"
            onChange={(e) =>
              setForm({ ...form, reason: e.target.value })
            }
          />

          <button
            className="bg-blue-500 text-white p-2"
            onClick={createRule}
          >
            Create Rule
          </button>

        </div>

      </div>

      {/* Rules Table */}
      <table className="w-full border">

        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Field</th>
            <th className="p-2 border">Value</th>
            <th className="p-2 border">Action</th>
            <th className="p-2 border">Reason</th>
            <th className="p-2 border">Delete</th>
          </tr>
        </thead>

        <tbody>

          {rules.map((rule) => (
            <tr key={rule._id}>

              <td className="p-2 border">{rule.name}</td>
              <td className="p-2 border">{rule.field}</td>
              <td className="p-2 border">{rule.value}</td>
              <td className="p-2 border">{rule.action}</td>
              <td className="p-2 border">{rule.reason}</td>

              <td className="p-2 border">
                <button
                  className="bg-red-500 text-white p-1"
                  onClick={() => deleteRule(rule._id)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}