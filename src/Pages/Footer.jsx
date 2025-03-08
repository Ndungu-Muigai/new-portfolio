const Footer = () => 
{
    //Getting the current year
    const year = new Date().getFullYear();

    return ( 
        <footer className="w-full text-center py-4 text-slate-400 text-sm border-t border-slate-700 mt-6">
            &copy; {year} Muigai Samuel Ndung'u. All rights reserved
        </footer>
     );
}
 
export default Footer;