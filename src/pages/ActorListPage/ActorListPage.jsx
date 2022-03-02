import ActorCard from "../../components/ActorCard/ActorCard";
import "./ActorListPage.css";

export default function ActorListPage({ movies }) {
  let actors = movies.map((m, idx) => m.cast);
  actors = actors.flat();
  let actorSet = new Set(actors);
  let actorCollection = Array.from(actorSet);

  return (
    <div className="actorGrid">
      {actorCollection.map((actor) => {
        return <ActorCard actor={actor} />;
      })}
    </div>
  );
}
