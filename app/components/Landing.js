"use client";
import { motion } from "framer-motion";
import LanguageSelector from "./LanguageSelector";

export default function Landing({ t, setStep, lang, setLang, translations }) {
  return (
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
      <LanguageSelector lang={lang} setLang={setLang} translations={translations} />
    </motion.div>
  );
}
