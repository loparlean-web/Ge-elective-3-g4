export default function VideoEmbed({ title, src, source, description }) {
  return (
    <div className="video-embed">
      <div className="video-embed__frame">
        <iframe
          src={src}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="video-embed__meta">
        <h4 className="video-embed__title">{title}</h4>
        {description && <p className="video-embed__desc">{description}</p>}
        <p className="video-embed__credit">
          <strong>Source:</strong> {source}
        </p>
      </div>
    </div>
  )
}