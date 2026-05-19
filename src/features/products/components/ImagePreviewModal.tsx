type Image = {
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
};

type ImagePreviewModalProps = {
  image: Image;
  onClose: () => void;
};

export function ImagePreviewModal({ image, onClose }: ImagePreviewModalProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "12px",
          maxWidth: "900px",
          width: "100%",
          overflow: "hidden",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image.url}
          alt={image.title}
          style={{
            width: "100%",
            maxHeight: "70vh",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "16px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
            {image.title}
          </h2>

          <p style={{ color: "#4b5563", marginTop: "8px" }}>
            {image.description}
          </p>

          <p style={{ fontWeight: "bold", marginTop: "8px" }}>
            ${image.price.toFixed(2)}
          </p>

          <button
            style={{
              border: "1px solid black",
              padding: "8px 16px",
              borderRadius: "6px",
              marginTop: "16px",
            }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}