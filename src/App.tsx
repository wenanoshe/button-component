import { Button } from "./components/Button";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="container">
        <div>
          <h4>Variants</h4>
          <div className="box">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="text">Text</Button>
          </div>
        </div>
        <div>
          <h4>Disabled shadow</h4>
          <div className="box">
            <Button disableShadow>Default</Button>
          </div>
        </div>
        <div>
          <h4>Disabled</h4>
          <div className="box">
            <Button disabled>Default</Button>
            <Button disabled variant="text">
              Default
            </Button>
          </div>
        </div>
        <div>
          <h4>With icon</h4>
          <div className="box">
            <Button color="primary" startIcon="grade">
              Default
            </Button>
            <Button color="primary" endIcon="add_circle">
              Default
            </Button>
          </div>
        </div>
        <div>
          <h4>Sizes</h4>
          <div className="box">
            <Button color="primary" size="sm">
              Small
            </Button>
            <Button color="primary" size="md">
              Medium
            </Button>
            <Button color="primary" size="lg">
              Large
            </Button>
          </div>
        </div>
        <div>
          <h4>Colors</h4>
          <div className="box">
            <Button color="default">default</Button>
            <Button color="primary">primary</Button>
            <Button color="secondary">secondary</Button>
            <Button color="danger">danger</Button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div>To see the Icons you need to add the google fonts link</div>
        <div className="footer__ref">
          <span>Made by Wenanoshe</span>
          <a href="https://github.com/wenanoshe">
            <span>Github</span>
            <span className="material-symbols-rounded icon">
              family_history
            </span>
          </a>
        </div>
      </footer>
    </>
  );
};
export default App;
