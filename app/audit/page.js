"use client";

import { useEffect, useState } from "react";
import api from "../../lib/api";

export default function AuditPage() {

  const [audits, setAudits] = useState([]);

  useEffect(() => {
    fetchAudits();
  }, []);

  const fetchAudits = async () => {
    try {
      const res = await api.get("/api/audits");
      setAudits(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>

      <h1 className="text-2xl font-bold mb-4">
        Audit Logs
      </h1>

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Event ID</th>
            <th className="p-2 border">Decision</th>
            <th className="p-2 border">Reason</th>
            <th className="p-2 border">Rule</th>
            <th className="p-2 border">Time</th>
          </tr>
        </thead>

        <tbody>

          {audits.map((audit) => (
            <tr key={audit._id}>

              <td className="p-2 border">
                {audit.eventId}
              </td>

              <td className="p-2 border">
                {audit.decision}
              </td>

              <td className="p-2 border">
                {audit.reason}
              </td>

              <td className="p-2 border">
                {audit.ruleName}
              </td>

              <td className="p-2 border">
                {new Date(audit.createdAt).toLocaleString()}
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}