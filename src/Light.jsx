import "./Light.css";

export function Light({ className, color, opacity }) {
  return (
    <>
      {/*className is added as prop to assign class when declared in App.jsx for css purpose*/}
      <div
        className={`Light ${className}`}
        style={{ background: color, opacity: opacity }}
      />
    </>
  );
}
