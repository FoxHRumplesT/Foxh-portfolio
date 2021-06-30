import './landing.sass'
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Services from './components/services/services';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Workflow from './components/workflow/workflow';

export interface LandingProps {
  
}
 
const Landing: React.FC<LandingProps> = (props) => {
  return (
    <section className="body">
      <Header />
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Workflow />
    </section>
  );
}
 
export default Landing;