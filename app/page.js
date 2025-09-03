// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function App() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     course: "",
//   });

//   const courses = [
//     { id: "web", name: "Web Development", link: "https://www.youtube.com/watch?v=nu_pCVPKzTk" },
//     { id: "graphics", name: "Graphics Design", link: "https://www.youtube.com/watch?v=QyFcl_Fba-k" },
//     { id: "content", name: "Content Creation", link: "https://www.youtube.com/watch?v=lQEWAE3sU2w" },
//     { id: "data", name: "Data Analysis", link: "https://www.youtube.com/watch?v=ua-CiDNNj30" },
//   ];

//   const handleSubmit = () => {
//     // Instead of sending email via API, just go to review step
//     setStep(3);
//   };

//   const selectedCourse = courses.find((c) => c.id === formData.course);

//   return (
//     <div className="flex flex-col h-screen w-screen items-center justify-center bg-gray-100">
//       {/* Step 1 */}
//       {step === 1 && (
//         <motion.div
//           initial={{ x: "100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "-100%" }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col h-screen w-full items-center justify-between p-10"
//         >
//           <button
//             onClick={() => setStep(2)}
//             className="mt-20 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg"
//           >
//             Get Started
//           </button>
//           <div className="w-full flex justify-center">
//             <select className="p-2 border rounded w-1/2">
//               <option>English</option>
//               <option>French</option>
//               <option>Spanish</option>
//               <option>German</option>
//               <option>Chinese</option>
//               <option>Arabic</option>
//             </select>
//           </div>
//         </motion.div>
//       )}

//       {/* Step 2 */}
//       {step === 2 && (
//         <motion.div
//           initial={{ x: "100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "-100%" }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col w-full h-screen p-6 space-y-4"
//         >
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="p-3 border rounded"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//           />
//           <input
//             type="tel"
//             placeholder="Phone Number"
//             className="p-3 border rounded"
//             value={formData.phone}
//             onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="p-3 border rounded"
//             value={formData.email}
//             onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//           />

//           <div className="space-y-2">
//             {courses.map((course) => (
//               <label key={course.id} className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="course"
//                   checked={formData.course === course.id}
//                   onChange={() => setFormData({ ...formData, course: course.id })}
//                 />
//                 <span>{course.name}</span>
//               </label>
//             ))}
//           </div>

//           <div className="flex justify-end mt-6">
//             <button
//               onClick={handleSubmit}
//               className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg"
//             >
//               Submit
//             </button>
//           </div>
//         </motion.div>
//       )}

//       {/* Step 3 */}
//       {step === 3 && (
//         <motion.div
//           initial={{ x: "100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "-100%" }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col w-full h-screen p-6 space-y-4"
//         >
//           <h2 className="text-xl font-bold">Your Submitted Info</h2>
//           <p><strong>Name:</strong> {formData.name}</p>
//           <p><strong>Phone:</strong> {formData.phone}</p>
//           <p><strong>Email:</strong> {formData.email}</p>
//           <p><strong>Course:</strong> {selectedCourse?.name}</p>

//           <div className="flex justify-end mt-6">
//             <button
//               onClick={() => setStep(4)}
//               className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg"
//             >
//               Continue
//             </button>
//           </div>
//         </motion.div>
//       )}

//       {/* Step 4 */}
//       {step === 4 && selectedCourse && (
//         <motion.div
//           initial={{ x: "100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "-100%" }}
//           transition={{ duration: 0.5 }}
//           className="flex flex-col w-full h-screen p-6 space-y-4 items-center justify-center"
//         >
//           <h2 className="text-xl font-bold">{selectedCourse.name} Tutorial</h2>
//           <iframe
//             width="560"
//             height="315"
//             src={selectedCourse.link.replace("watch?v=", "embed/")}
//             title="YouTube video"
//             frameBorder="0"
//             allowFullScreen
//           ></iframe>
//           <a
//             href={selectedCourse.link}
//             target="_blank"
//             className="text-blue-600 underline"
//           >
//             Watch on YouTube
//           </a>
//         </motion.div>
//       )}
//     </div>
//   );
// }







"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaPhone, FaEnvelope, FaCode, FaPaintBrush, FaPenFancy, FaChartBar } from "react-icons/fa";

export default function App() {
  const [step, setStep] = useState(1);
  const [lang, setLang] = useState("English");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const translations = {
    English: {
      title: "ADJ FREE ICT TRAINING WEB DEV STUDENT 2025 3RD BATCH",
      getStarted: "Get Started",
      fullName: "Full Name",
      phone: "Phone Number",
      email: "Email",
      chooseCourse: "Choose a Course",
      submit: "Submit",
      yourInfo: "Your Submitted Info",
      continue: "Continue",
      watchOnYT: "Watch on YouTube",
      motivational: {
        web: "Web Development is the backbone of the digital world. Stay consistent—you’re building the future!",
        graphics: "Graphics Design brings ideas to life. Push through, your creativity will inspire the world!",
        content: "Content Creation shapes voices and movements. Stay the course, your words matter!",
        data: "Data Analysis unlocks the power of information. Keep learning—you’ll drive smarter decisions!",
      },
    },
    French: {
      title: "FORMATION GRATUITE EN TIC ADJ DEV WEB ÉTUDIANTS 2025 3E PROMOTION",
      getStarted: "Commencer",
      fullName: "Nom Complet",
      phone: "Numéro de Téléphone",
      email: "Email",
      chooseCourse: "Choisissez un Cours",
      submit: "Soumettre",
      yourInfo: "Vos Informations Soumises",
      continue: "Continuer",
      watchOnYT: "Regarder sur YouTube",
      motivational: {
        web: "Le développement web est l’épine dorsale du monde numérique. Persévérez—vous construisez l’avenir !",
        graphics: "Le design graphique donne vie aux idées. Continuez, votre créativité inspirera le monde !",
        content: "La création de contenu façonne des voix et des mouvements. Persévérez, vos mots comptent !",
        data: "L’analyse de données libère le pouvoir de l’information. Continuez à apprendre—vous guiderez de meilleures décisions !",
      },
    },
    // add more translations if needed...
  };

  const courses = [
    { id: "web", name: "Web Development", icon: <FaCode />, link: "https://www.youtube.com/watch?v=nu_pCVPKzTk" },
    { id: "graphics", name: "Graphics Design", icon: <FaPaintBrush />, link: "https://www.youtube.com/watch?v=QyFcl_Fba-k" },
    { id: "content", name: "Content Creation", icon: <FaPenFancy />, link: "https://www.youtube.com/watch?v=lQEWAE3sU2w" },
    { id: "data", name: "Data Analysis", icon: <FaChartBar />, link: "https://www.youtube.com/watch?v=ua-CiDNNj30" },
  ];

  const selectedCourse = courses.find((c) => c.id === formData.course);

  const handleSubmit = () => {
    setStep(3);
  };

  const t = translations[lang] || translations.English;

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Step 1 - Landing Page */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col h-screen w-full items-center justify-between p-10 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-700 mt-20">
            {t.title}
          </h1>
          <button
            onClick={() => setStep(2)}
            className="mt-20 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-2xl shadow-lg transition-transform transform hover:scale-105"
          >
            {t.getStarted}
          </button>
          <div className="w-full flex justify-center mb-4">
            <select
              className="p-2 border rounded-lg w-1/2 shadow"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              {Object.keys(translations).map((lng) => (
                <option key={lng}>{lng}</option>
              ))}
            </select>
          </div>
        </motion.div>
      )}

      {/* Step 2 - Form */}
      {step === 2 && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full h-screen p-8 space-y-6 bg-white rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center">{t.chooseCourse}</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center border rounded-lg p-3 shadow-sm">
              <FaUser className="text-blue-600 mr-3" />
              <input
                type="text"
                placeholder={t.fullName}
                className="flex-1 outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="flex items-center border rounded-lg p-3 shadow-sm">
              <FaPhone className="text-green-600 mr-3" />
              <input
                type="tel"
                placeholder={t.phone}
                className="flex-1 outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="flex items-center border rounded-lg p-3 shadow-sm">
              <FaEnvelope className="text-red-600 mr-3" />
              <input
                type="email"
                placeholder={t.email}
                className="flex-1 outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-3 mt-4">
            {courses.map((course) => (
              <label key={course.id} className="flex items-center p-3 border rounded-lg shadow-sm cursor-pointer hover:bg-gray-100">
                <input
                  type="radio"
                  name="course"
                  checked={formData.course === course.id}
                  onChange={() => setFormData({ ...formData, course: course.id })}
                  className="mr-3"
                />
                <span className="flex items-center space-x-2">
                  {course.icon}
                  <span>{course.name}</span>
                </span>
              </label>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg transform hover:scale-105"
            >
              {t.submit}
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 3 - Review */}
      {step === 3 && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full h-screen p-8 bg-white shadow-lg space-y-4"
        >
          <h2 className="text-2xl font-bold">{t.yourInfo}</h2>
          <p><strong>{t.fullName}:</strong> {formData.name}</p>
          <p><strong>{t.phone}:</strong> {formData.phone}</p>
          <p><strong>{t.email}:</strong> {formData.email}</p>
          <p><strong>{t.chooseCourse}:</strong> {selectedCourse?.name}</p>
          <div className="flex justify-end mt-6">
            <button
              onClick={() => setStep(4)}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg"
            >
              {t.continue}
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 4 - Video */}
      {step === 4 && selectedCourse && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full h-screen p-6 space-y-6 items-center justify-center text-center"
        >
          <h2 className="text-3xl font-bold text-blue-700">{selectedCourse.name} Tutorial</h2>
          <div className="w-full flex justify-center">
            <iframe
              className="rounded-xl shadow-lg"
              width="80%"
              height="400"
              src={selectedCourse.link.replace("watch?v=", "embed/")}
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <a href={selectedCourse.link} target="_blank" className="text-blue-600 underline">
            {t.watchOnYT}
          </a>
          <p className="mt-6 text-lg font-medium text-gray-700 italic">
            {t.motivational[selectedCourse.id]}
          </p>
        </motion.div>
      )}
    </div>
  );
}
