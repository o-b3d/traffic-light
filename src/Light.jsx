import "./Light.css";

export function Light({ color, opacity }) {
  return (
    <>
      <div className="Light" style={{ background: color, opacity: opacity }} />
    </>
  );
}
