"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function VideoStep({ t }) {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const mustWatch = [
    { id: 1, title: "Video 1", link: "https://www.youtube.com/watch?v=xxxx" },
    { id: 2, title: "Video 2", link: "https://www.youtube.com/watch?v=xxxx" },
    { id: 3, title: "Video 3", link: "https://www.youtube.com/watch?v=xxxx" },
  ];

  const classes = {
    week1: [
      { id: 1, title: "Video 1", link: "https://www.youtube.com/watch?v=xxxx" },
      { id: 2, title: "Video 2", link: "https://www.youtube.com/watch?v=xxxx" },
      { id: 3, title: "Video 3", link: "https://www.youtube.com/watch?v=xxxx" },
    ],
    week2: [
      { id: 1, title: "Video 1", link: "https://www.youtube.com/watch?v=xxxx" },
      { id: 2, title: "Video 2", link: "https://www.youtube.com/watch?v=xxxx" },
      { id: 3, title: "Video 3", link: "https://www.youtube.com/watch?v=xxxx" },
    ],
    week3: [
      { id: 1, title: "Video 1", link: "https://www.youtube.com/watch?v=xxxx" },
      { id: 2, title: "Video 2", link: "https://www.youtube.com/watch?v=xxxx" },
      { id: 3, title: "Video 3", link: "https://www.youtube.com/watch?v=xxxx" },
    ],
    week4: [
      { id: 1, title: "Video 1", link: "https://www.youtube.com/watch?v=xxxx" },
      { id: 2, title: "Video 2", link: "https://www.youtube.com/watch?v=xxxx" },
      { id: 3, title: "Video 3", link: "https://www.youtube.com/watch?v=xxxx" },
    ],
  };

  const renderVideos = (videos) =>
    videos.map((video) => (
      <motion.div
        key={video.id}
        whileHover={{ scale: 1.05 }}
        className="p-4 bg-white shadow-md hover:shadow-xl rounded-2xl flex flex-col items-center transition-all cursor-pointer"
        onClick={() =>
          setFullscreenVideo(video.link.replace("watch?v=", "embed/"))
        }
      >
        <iframe
          className="rounded-lg w-full h-48 pointer-events-none"
          src={video.link.replace("watch?v=", "embed/")}
          title={video.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p className="mt-3 font-semibold text-gray-800">{video.title}</p>
        <span className="text-blue-600 text-sm mt-1">
          {t.watchOnYT} ▶
        </span>
      </motion.div>
    ));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col w-full min-h-screen p-6 md:p-10 space-y-12 bg-gray-50"
    >
      {/* Main Title */}
      <h2 className="text-4xl font-extrabold text-center text-blue-700 drop-shadow-sm">
        Web Development Course
      </h2>

      {/* Must Watch Section */}
      <section>
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">
          🎬 Must Watch Before Starting
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {renderVideos(mustWatch)}
        </div>
      </section>

      {/* Classes Section */}
      <section>
        <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          📚 Weekly Classes
        </h3>

        <div className="space-y-12">
          {Object.entries(classes).map(([week, videos], idx) => (
            <div key={week}>
              <h4 className="text-xl font-semibold text-blue-700 mb-4">
                Week {idx + 1}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {renderVideos(videos)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      {fullscreenVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-5xl aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src={`${fullscreenVideo}?autoplay=1`}
              title="Fullscreen Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
            <button
              className="absolute top-4 right-4 text-white bg-red-600 px-3 py-1 rounded-lg"
              onClick={() => setFullscreenVideo(null)}
            >
              ✖ Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
