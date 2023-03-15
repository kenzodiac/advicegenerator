// - Kenneth Fujimura
// - Last Revised: 3/15/2023
// - "Advice Generator In React"
// - This is a project in React to practice our react skills. In it, we pulled 'advice' from an API, and have that advice appear on screen via a button click. We had to tightly follow a pre-designed prototype and follow a style guide.
// - Peer Reviewed By: Amardeep Mann - "The website looks identical to the prototypes. Good attention to detail for things like the curly quotes and making the card adjust properly for really long prompts
//
//Code looks great. On the css side good use of variables, calculations, and media queries. On the react aide good use of useEffect to run your function at page load and useStates to store your variables
//
//One small thing you can fix is that short or single word quotes look a bit off on mobile. Overall very good work! 👍🏽"
// - Github Repo: https://github.com/kenzodiac/advicegenerator
// - Azure Deployment: https://platitudegenerator.azurewebsites.net/

import MainPgComponent from './Components/MainPgComponent';
import './App.css'

function App() {
  return (
    <MainPgComponent/>
  );
}

export default App;