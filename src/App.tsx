import { BrowserRouter } from 'react-router-dom';
import PersonalShowcaseRoutes from './routes/PersonalShowcaseRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <PersonalShowcaseRoutes />
    </BrowserRouter>
  );
}
