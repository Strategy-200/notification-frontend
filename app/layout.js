export const metadata = {
  title: "Notification Engine",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>

        <div className="flex min-h-screen">

          {/* Sidebar */}
          <div className="w-64 bg-gray-900 text-white p-4">

            <h1 className="text-xl font-bold mb-6">
              Notification Engine
            </h1>

            <nav className="flex flex-col gap-3">

              <a href="/dashboard" className="hover:text-gray-300">
                Dashboard
              </a>

              <a href="/event" className="hover:text-gray-300">
                Event Simulator
              </a>

              <a href="/audit" className="hover:text-gray-300">
                Audit Logs
              </a>

              <a href="/later" className="hover:text-gray-300">
                Later Queue
              </a>

              <a href="/rules" className="hover:text-gray-300">
                Rules Manager
              </a>

            </nav>

          </div>

          {/* Page Content */}
          <div className="flex-1 p-6 bg-gray-100">
            {children}
          </div>

        </div>

      </body>
    </html>
  );
}