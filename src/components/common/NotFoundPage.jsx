import { useEffect } from 'react';
import Parallax from 'parallax-js';
import '../../styles/Parallax404.css'; // Create this CSS file or include Tailwind classes accordingly

export default function NotFoundPage() {
  useEffect(() => {
    const scene = document.getElementById('scene');
    if (scene) {
      new Parallax(scene);
    }
  }, []);

  return (
    <div>
      <nav>
        <div className="menu">
          <p className="website_name">Demanzo</p>
          <div className="menu_links"></div>
          <div className="menu_icon">
            <span className="icon"></span>
          </div>
        </div>
      </nav>

      <section className="wrapper">
        <div className="container">
          <div id="scene" className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2"></div>

            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <p className="p404" data-depth="0.50" style={{ color: '#ed1b24' }}>404</p>
            <p className="p404" data-depth="0.10">404</p>
          </div>

          <div className="text">
            <article>
              <p>
                Demanzo is a B2B digital marketing agency offering SaaS digital marketing and digital
                marketing for IT companies to increase leads and online visibility.
              </p>
              <a href="/"><button aria-label="return home">Return TO Home</button></a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
