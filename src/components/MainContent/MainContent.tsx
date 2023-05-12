import Board from "../Board/Board";
import Keyboard from "../Keyboard/Keyboard";
import "./mainContent.scss";
const MainContent = () => {
  return (
    <div className="main-content">
      <Board />
      <Keyboard />
    </div>
  );
};

export default MainContent;
