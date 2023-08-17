
import Layout from '../includes/layout';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

// Index 

export default function IndexPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Layout page='index'>
      <div className='main-index-content'>
          Sample Page
      </div>
    </Layout>
  )
}