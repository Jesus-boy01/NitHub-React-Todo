import Todo from './Todo'
import './App.css'
import toDOWallPaper from './todo-app-wallpaper.jpg';

const backgroundImageStyle = {
  backgroundImage: `linear-gradient(-60deg, rgba(0, 0, 0, 0.3), rgba(46, 43, 43, 0.7)), url(${toDOWallPaper})`,
  backgroundSize: `cover`,
  backgroundRepeat: `no-repeat`,
}

function App() {
  return (
    <>
      <div className="App" style={backgroundImageStyle}>
        <div className="Content">
          <Todo />
        </div>
      </div>
    </>
  )
}

export default App
