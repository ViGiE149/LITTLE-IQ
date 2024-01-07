import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import EducationPage from './components/EducationPage';
import GalleryPage from './components/GalleryPage';
import TestimonialsPage from './components/TestimonialsPage';
import ContactPage from './components/ContactPage';
import FeesPage from './components/FeesPage';
import './App.css';
import MealsPage from './components/MealsPage';
import Footer from './components/Footer';
import PostPage from './components/PostPage';
import ViewPostPage from './components/ViewPostPage';
import ManagePostPage from './components/ManagePostsPage';
import FeesUpdatePage from './components/FeesUpdatePage';
import PasswordPage from './components/PasswordPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/fees" element={<FeesPage />} /> 
        <Route path="/meals" element={<MealsPage />} /> 
        <Route path="/post" element={<PostPage />} /> 
       <Route path="/viewpost" element={<ViewPostPage />} />  
       <Route path="/managepost" element={<ManagePostPage />} />  
       <Route path="/feesupdate" element={<FeesUpdatePage />} /> 
       <Route path="/PasswordPage" element={<PasswordPage />} />   
      </Routes>
      <Footer />
    </Router>
     
  );
}

export default App;
