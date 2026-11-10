export default function Banner({image, alt, title}) {
  return (
    <div className="picture-header">
      <img src={image} alt={alt} />
      <h1>{title}</h1>
    </div>
  );
}
