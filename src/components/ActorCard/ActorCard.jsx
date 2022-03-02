import "./ActorCard.css";

export default function ActorCard({ actor }) {
  let randomNum = Math.floor(Math.random() * 1000);

  return (
    <div
      className="actorCard"
      style={{ background: `url(https://picsum.photos/${randomNum}/300)` }}
    >
      {actor}
    </div>
  );
}
