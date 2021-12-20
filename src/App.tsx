import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import { CountButton } from '@/components/CountButton';
import { styled } from '@linaria/react';

const Title = styled.div<{ primary?: boolean }>`
  font-weight: bold;
  color: ${props => (props.primary ? 'orange' : 'lightblue')};
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title primary>hello linaria!</Title>
        <Title>hello linaria!</Title>
        <Logo />
        <p>Hello Vite + React!</p>
        <p>
          <CountButton />
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
