import "./ui/ui.scss";
import Cards from "./Cards/Cards"

function App() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Хрючегуфики</h1>
        <p className="text">Смысл челленджа - собрать бинго из вкусной(или не очень) еды. Готовьте, шарьте фоточки и рецепты, заполняйте бинго и конечно же кайфуйте)</p>
        <hr />
        <Cards />
      </div>
    </div>
  )
}

export default App
