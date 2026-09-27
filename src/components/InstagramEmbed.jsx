import { useEffect } from "react";

let scriptPromise = null;
function loadEmbedScript() {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve) => {
    if (window.instgrm) return resolve(window.instgrm);
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => resolve(window.instgrm);
    document.body.appendChild(script);
  });
  return scriptPromise;
}

export default function InstagramEmbed({ url }) {
  useEffect(() => {
    let cancelled = false;
    loadEmbedScript().then((instgrm) => {
      if (!cancelled && instgrm) instgrm.Embeds.process();
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div className="instagram-embed-wrapper w-full flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#0b0f1e",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "1rem",
          margin: 0,
          width: "100%",
          maxWidth: "400px",
          minWidth: "280px",
        }}
      />
    </div>
  );
}
