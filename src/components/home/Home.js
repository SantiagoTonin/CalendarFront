import './home.css';
import Sidebar from '../sidebar/Sidebar'

const Home = () => {
  return ( 
    <main>
      <aside className='homeSide'><Sidebar/></aside>
      <article className='homeContent'>Content</article>
    </main>
   );
}
 
export default Home;