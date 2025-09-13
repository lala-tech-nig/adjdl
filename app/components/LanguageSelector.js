export default function LanguageSelector({ lang, setLang, translations }) {
  return (
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
  );
}
