import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sidan kan inte hittas.</h2>
      <p>Det kan bero på stavfel, att sidan inte längre finns eller att den flyttats. Använd knappen nedan för att gå tillbaka till startsidan.</p>
      <Link to="/">Till startsidan</Link>
    </div>
  );
}
 
export default NotFound;