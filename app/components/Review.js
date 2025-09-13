"use client";
import { motion } from "framer-motion";

export default function Review({ t, formData, selectedCourse, setStep }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col w-full h-screen px-6 py-10 bg-gradient-to-br from-blue-50 via-white to-blue-100 items-center justify-center"
    >
      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 space-y-6">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          {t.yourInfo}
        </h2>

        {/* Info list */}
        <div className="space-y-4 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">{t.fullName}:</span>
            <span>{formData?.name || "—"}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">{t.phone}:</span>
            <span>{formData?.phone || "—"}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">{t.email}:</span>
            <span>{formData?.email || "—"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">{t.chooseCourse}:</span>
            <span className="text-blue-600 font-medium">
              {selectedCourse?.name || "—"}
            </span>
          </div>
        </div>

        {/* Continue button */}
        <div className="flex justify-center pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStep(4)}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-2xl shadow-lg transition-all"
          >
            {t.continue}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
