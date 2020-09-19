import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faMedium,
  faDev,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
  return (
    <div className="flex flex-wrap">
      <a
        href="https://www.linkedin.com/in/takato0903/"
        target="_blank"
        className="linkedin pr-2"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" className="h-10 w-10" />
      </a>
      <a
        href="https://medium.com/@TaishiKato"
        target="_blank"
        className="medium px-2"
      >
        <FontAwesomeIcon icon={faMedium} size="2x" className="h-10 w-10" />
      </a>
      <a href="https://dev.to/taishi" target="_blank" className="medium px-2">
        <FontAwesomeIcon icon={faDev} size="2x" className="h-10 w-10" />
      </a>
      <a
        href="https://github.com/taishikato"
        target="_blank"
        className="github px-2"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" className="h-10 w-10" />
      </a>
      <a
        href="https://twitter.com/taishikat0_Ja"
        target="_blank"
        className="twitter px-2"
      >
        <FontAwesomeIcon icon={faTwitter} size="2x" className="h-10 w-10" />
      </a>
      <a
        href="https://www.instagram.com/taishikat0/"
        target="_blank"
        className="instagram px-2"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" className="h-10 w-10" />
      </a>
      <a href="https://qiita.com/kanye__east" target="_blank" className="px-2">
        <img src="/qiita.png" width="40" />
      </a>
      <a href="https://note.com/taishikato" target="_blank">
        <img src="/note.svg" className="h-10 w-10" />
      </a>
      <style jsx>{`
        .linkedin {
          color: #0077b5;
        }
        .medium {
          color: #12100f;
        }
        .github {
          color: #333;
        }
        .twitter {
          color: #1ea1f2;
        }
        .instagram {
          color: #000000;
        }
      `}</style>
    </div>
  );
};

export default Socials;
