"use client";
import { motion } from "framer-motion";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

export default function FormStep({ t, formData, setFormData, courses, handleSubmit }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col w-full h-screen px-6 py-10 bg-gradient-to-br from-orange-50 via-white to-orange-100 rounded-2xl shadow-2xl"
    >
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-center text-gray-800 tracking-tight">
        {t.chooseCourse}
      </h2>

      {/* Input fields */}
      <div className="flex flex-col mt-8 space-y-5">
        <div className="flex items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm focus-within:ring-2 focus-within:ring-orange-400 transition">
          <FaUser className="text-orange-500 mr-3 text-lg" />
          <input
            type="text"
            placeholder={t.fullName}
            className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="flex items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm focus-within:ring-2 focus-within:ring-green-400 transition">
          <FaPhone className="text-green-500 mr-3 text-lg" />
          <input
            type="tel"
            placeholder={t.phone}
            className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className="flex items-center bg-white border border-gray-200 rounded-xl p-4 shadow-sm focus-within:ring-2 focus-within:ring-red-400 transition">
          <FaEnvelope className="text-red-500 mr-3 text-lg" />
          <input
            type="email"
            placeholder={t.email}
            className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      {/* Course selection */}
      <div className="mt-6 grid gap-4">
        {courses.map((course) => (
          <motion.label
            key={course.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center p-4 rounded-xl border shadow-sm cursor-pointer transition ${
              formData.course === course.id
                ? "bg-orange-100 border-orange-400"
                : "bg-white border-gray-200 hover:bg-gray-50"
            }`}
          >
            <input
              type="radio"
              name="course"
              checked={formData.course === course.id}
              onChange={() => setFormData({ ...formData, course: course.id })}
              className="mr-3 accent-orange-500"
            />
            <span className="flex items-center space-x-2 text-gray-700">
              {course.icon}
              <span className="font-medium">{course.name}</span>
            </span>
          </motion.label>
        ))}
      </div>

      {/* Submit button */}
      <div className="flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-2xl shadow-lg transition-all"
        >
          {t.submit}
        </motion.button>
      </div>
    </motion.div>
  );
}
