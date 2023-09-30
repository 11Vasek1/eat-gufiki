import "./ui/ui.scss";

import "./app.scss";
import Cards from "./Cards/Cards"

function App() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Кусьнагуфики</h1>
        <p className="text app__description">Смысл челленджа — собрать бинго из приготовленной вами еды. Ну и конечно же кайфануть, вкусно поесть и похвастаться фоточками с рецептами.<br />Требования максимально общие, чтобы каждый мог проявить фантазию.</p>
        <hr className="app__hr"/>
        <Cards />
      </div>
    </div>
  )
}

export default App
