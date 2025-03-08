import { FaWhatsapp, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaPhone, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router";

const Intro = () => 
{
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-200">
        <Link to="/" className="transition-colors">Muigai Samuel Ndung'u</Link>
      </h1>
      <h2 className="text-lg font-medium tracking-tight sm:text-xl text-teal-300">Full Stack Software Developer</h2>
      <p className="max-w-md text-slate-400 leading-relaxed">I excel at transforming complex concepts into user-friendly applications.</p>

      <nav className="hidden lg:flex lg:flex-wrap lg:flex-col gap-4 text-sm sm:text-base font-medium">
        <Link to="/#about" className="hover:text-slate-200 hover:underline transition-colors">About</Link>
        <Link to="/#experience" className="hover:text-slate-200 hover:underline transition-colors">Experience</Link>
        <Link to="/#skills" className="hover:text-slate-200 hover:underline transition-colors">Skills</Link>
        <Link to="/#projects" className="hover:text-slate-200 hover:underline transition-colors">Projects</Link>
      </nav>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link to="https://github.com/ndungu-muigai" target="_blank" className="p-2 rounded-full text-xl hover:text-slate-200 transition-colors" aria-label="GitHub" title="GitHub">
          <FaGithub />
        </Link>
        <Link to="https://linkedin.com/in/samuel-muigai-560355224" target="_blank" className="p-2 rounded-full text-xl hover:text-teal-400 transition-colors" aria-label="LinkedIn"  title="LinkedIn" >
          <FaLinkedinIn />
        </Link>
        <Link  to="https://twitter.com/MzeeMuigai" target="_blank" className="p-2 rounded-full text-xl hover:text-teal-400 transition-colors" aria-label="Twitter" title="X (Twitter)" >
          <FaXTwitter />
        </Link>
        <Link to="https://instagram.com/mr.muigai" target="_blank" className="p-2 rounded-full text-xl hover:text-teal-400 transition-colors" aria-label="Instagram" title="Instagram">
          <FaInstagram />
        </Link>
        <Link to="https://web.whatsapp.com/send?phone=254707251073" target="_blank" className="p-2 rounded-full text-xl hover:text-teal-400 transition-colors" aria-label="WhatsApp" title="WhatsApp">
          <FaWhatsapp />
        </Link>
        <Link to="tel:+254707251073" className="p-2 rounded-full text-xl hover:text-teal-400 transition-colors" aria-label="Call" title="Call">
          <FaPhone />
        </Link>
        <Link to="mailto:ndungu.muigai01@gmail.com" className="p-2 rounded-full text-xl  hover:text-teal-400 transition-colors" aria-label="Email" title="Email">
            <FaEnvelope />
        </Link>
      </div>
    </>
  );
};

export default Intro;
