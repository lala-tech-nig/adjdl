"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const courses = [
    { id: "web", name: "Web Development", link: "https://www.youtube.com/watch?v=nu_pCVPKzTk" },
    { id: "graphics", name: "Graphics Design", link: "https://www.youtube.com/watch?v=QyFcl_Fba-k" },
    { id: "content", name: "Content Creation", link: "https://www.youtube.com/watch?v=j0Wc0bfkvAY" },
    { id: "data", name: "Data Analysis", link: "https://www.youtube.com/watch?v=ua-CiDNNj30" },
  ];

  const handleSubmit = () => {
    // Instead of sending email via API, just go to review step
    setStep(3);
  };

  const selectedCourse = courses.find((c) => c.id === formData.course);

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-gray-100">
      {/* Step 1 */}
      {step === 1 && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col h-screen w-full items-center justify-between p-10"
        >
          <button
            onClick={() => setStep(2)}
            className="mt-20 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg"
          >
            Get Started
          </button>
          <div className="w-full flex justify-center">
            <select className="p-2 border rounded w-1/2">
              <option>English</option>
              <option>French</option>
              <option>Spanish</option>
              <option>German</option>
              <option>Chinese</option>
              <option>Arabic</option>
            </select>
          </div>
        </motion.div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full h-screen p-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-3 border rounded"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <div className="space-y-2">
            {courses.map((course) => (
              <label key={course.id} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="course"
                  checked={formData.course === course.id}
                  onChange={() => setFormData({ ...formData, course: course.id })}
                />
                <span>{course.name}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg"
            >
              Submit
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full h-screen p-6 space-y-4"
        >
          <h2 className="text-xl font-bold">Your Submitted Info</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Course:</strong> {selectedCourse?.name}</p>

          <div className="flex justify-end mt-6">
            <button
              onClick={() => setStep(4)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg"
            >
              Continue
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 4 */}
      {step === 4 && selectedCourse && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full h-screen p-6 space-y-4 items-center justify-center"
        >
          <h2 className="text-xl font-bold">{selectedCourse.name} Tutorial</h2>
          <iframe
            width="560"
            height="315"
            src={selectedCourse.link.replace("watch?v=", "embed/")}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <a
            href={selectedCourse.link}
            target="_blank"
            className="text-blue-600 underline"
          >
            Watch on YouTube
          </a>
        </motion.div>
      )}
    </div>
  );
}
