import { useNavigate } from "react-router-dom";
import "./tictoctoe.css"
export function PlayersPage() {
    const navigate = useNavigate();

  return (
    <div className="form-container">
      <div>Fill the players details :</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/game", {
            state: {
              player1: e.target.children[0].value,
              player2: e.target.children[1].value,
            },
          });
        }}
        className="form"
      >
        <input className="form-input" type="text" placeholder="Player 1" />
        <input className="form-input" type="text" placeholder="Player 2" />
        <button className="form-btn">Start Game</button>
      </form>
    </div>
  );
}
