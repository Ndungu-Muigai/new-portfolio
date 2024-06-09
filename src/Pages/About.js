const About = () => 
{
    const openPdfInNewWindow = () =>
    {
        window.open(require("../assets/CV/Curriculum Vitae.pdf"));
    }

    return (
        <div className="h-screen flex flex-col justify-center items-start bg-gradient-to-br from-blue-500 to-purple-600 px-20">
            <h1 className="text-white text-3xl font-bold mb-4">Get to know me</h1>
            <p className="text-white mb-4">
                Hi. My name is Samuel Muigai, a Full Stack Software Engineer based in Nairobi, Kenya. I have a bachelors degree in Telecommunications from Strathmore University and I have also completed Moringa School's Software Engineering course
            </p>
            <p className="text-white mb-4">
                I love creating projects that help solve real-life problems we face in our daily lives. You can check out some of my work under the projects section
            </p>
            <p className="text-white mb-4">
                I am open to new collaborations or work where I can contribute and grow my skills. Feel free to connect with me through my various social media pages under the contacts section.
            </p>
            <p className="text-white mb-8">
                Apart from coding, I love swimming and playing video games in my spare time.
            </p>
            <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transform transition duration-300 ease-in-out" onClick={openPdfInNewWindow}>Download my resume</button>
        </div>
    );
};

export default About;
