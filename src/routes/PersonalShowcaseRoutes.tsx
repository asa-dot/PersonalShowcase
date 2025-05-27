import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

export default function PersonalShowcaseRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}