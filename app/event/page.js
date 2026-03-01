"use client";

import { useState } from "react";
import api from "../../lib/api";

export default function EventPage() {
  const [form, setForm] = useState({
    userId: "",
    eventType: "",
    message: "",
    priorityHint: "",
  });

  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/events", form);
      setResult(res.data);
    } catch (error) {
      console.error(error);
      alert("Error sending event");
    }
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Event Simulator
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-md"
      >

        <input
          className="border p-2"
          placeholder="User ID"
          onChange={(e) =>
            setForm({ ...form, userId: e.target.value })
          }
        />

        <input
          className="border p-2"
          placeholder="Event Type"
          onChange={(e) =>
            setForm({ ...form, eventType: e.target.value })
          }
        />

        <input
          className="border p-2"
          placeholder="Message"
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <input
          className="border p-2"
          placeholder="Priority (high/low)"
          onChange={(e) =>
            setForm({ ...form, priorityHint: e.target.value })
          }
        />

        <button className="bg-blue-500 text-white p-2">
          Submit Event
        </button>

      </form>

      {result && (
        <div className="mt-6 border p-4">
          <p><b>Decision:</b> {result.decision}</p>
          <p><b>Reason:</b> {result.reason}</p>
        </div>
      )}

    </div>
  );
}