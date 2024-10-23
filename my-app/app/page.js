"use client";
import { useState } from "react";
import { motion } from "framer-motion";
const tabs = [
  "About",
  "Research",
  "Personas",
  "Scenario",
  "Storyboard",
  "Moodboard",
  "Flowchart",
  "Wireframes",
  "GUI",
  "Prototype",
  "References",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="min-h-screen bg-black text-white bg-gradient-to-b from-black via-gray-950 to-purple-950/20">
      {/* Decorative Elements */}
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-br from-purple-800/10 via-transparent to-blue-800/10 pointer-events-none" />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative pt-16 pb-12 text-center"
      >
        <motion.div
          className="absolute top-[-120px] left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.h1
          className="text-7xl font-bold tracking-tighter"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
            SaveFlow
          </span>
        </motion.h1>
      </motion.header>

      {/* Navigation Tabs */}
      <nav className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          className="flex flex-wrap justify-center gap-2 backdrop-blur-sm bg-black/20 p-4 rounded-2xl border border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                activeTab === tab
                  ? "text-white bg-gradient-to-r from-purple-600/90 to-purple-700/90 shadow-lg shadow-purple-500/20"
                  : "text-gray-400 hover:text-white bg-white/5 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeTab === tab && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-700/20 rounded-xl blur-lg"
                  layoutId="activeTab"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab}
            </motion.button>
          ))}
        </motion.div>
      </nav>

      {/* Content Area */}
      <motion.main
        className="max-w-7xl mx-auto p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.div className="rounded-3xl backdrop-blur-md bg-gradient-to-b from-white/[0.07] to-white/[0.03] border border-white/10 p-8 shadow-2xl shadow-black/40">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-[400px] flex items-center justify-center"
          >
            <h2 className="text-2xl font-light text-gray-200">
              {activeTab} Content Goes Here
            </h2>
          </motion.div>
        </motion.div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="text-center py-12 text-gray-500 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-sm">© 2024 SaveFlow. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
