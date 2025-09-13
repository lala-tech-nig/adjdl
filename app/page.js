"use client";
import { useState } from "react";
import { translations } from "./utils/translations";
import { courses } from "./utils/courses";
import Landing from "./components/Landing";
import FormStep from "./components/FormStep";
import Review from "./components/Review";
import VideoStep from "./components/VideoStep";

export default function App() {
  const [step, setStep] = useState(1);
  const [lang, setLang] = useState("English");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", course: "" });

  const selectedCourse = courses.find((c) => c.id === formData.course);
  const handleSubmit = () => setStep(3);
  const t = translations[lang] || translations.English;

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100">
      {step === 1 && <Landing t={t} setStep={setStep} lang={lang} setLang={setLang} translations={translations} />}
      {step === 2 && <FormStep t={t} formData={formData} setFormData={setFormData} courses={courses} handleSubmit={handleSubmit} />}
      {step === 3 && <Review t={t} formData={formData} selectedCourse={selectedCourse} setStep={setStep} />}
      {step === 4 && selectedCourse && <VideoStep t={t} selectedCourse={selectedCourse} />}
    </div>
  );
}
