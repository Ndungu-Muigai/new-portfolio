import { Link } from "react-router";

import experiencesData from "../Data/Experiences.json";
import CV from "../assets/Files/CV.pdf"
import { MdArrowOutward } from "react-icons/md";

const Experiences = () => 
{
    const { education, work } = experiencesData;

    // Function to format dates for better readability
    const formatDate = dateString => 
    {
        if (!dateString) return "Present";
        const options = { year: "numeric", month: "short" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const openPDF = () =>
    {
        window.open(CV, "_blank", "noopener,noreferrer")
    }

    return (
        <div className="flex flex-col gap-6 mt-12">
            {/* Education Section */}
   
                <h2 className="text-2xl font-bold text-teal-400">Education</h2>
                <div className="space-y-6">
                    {
                        [...education].reverse().map(({ id, school, course, start_date, completion_date }) => (
                            <div key={id} className="border border-slate-700 rounded-lg p-6 space-y-2">
                                <h3 className="text-lg font-semibold text-slate-200">{school}</h3>
                                <p className="text-sm text-teal-300">{course}</p>
                                <p className="text-sm text-slate-400">{formatDate(start_date)} - {formatDate(completion_date)}</p>
                            </div>
                        ))
                    }
                </div>

            {/* Work Experience Section */}
                <h2 className="text-2xl font-bold text-teal-400">Work Experience</h2>
                <div className="space-y-6">
                    {
                        [...work].reverse().map(({ id, company, position, start_date, end_date, achievements }) => (
                            <div key={id} className="border border-slate-700 rounded-lg p-6 space-y-2">
                                <h3 className="text-lg font-semibold text-slate-200">{company}</h3>
                                <p className="text-sm text-teal-300">{position}</p>
                                <p className="text-sm text-slate-400">{formatDate(start_date)} - {formatDate(end_date)}</p>

                                {/* Achievements */}
                                <ul className="mt-3 space-y-4">
                                    {
                                        achievements.map((achievement, index) => (
                                        <li key={index} className="text-sm bg-slate-800 text-teal-400 px-3 py-1 rounded-md border border-slate-600">{achievement}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            <Link onClick={openPDF} className="text-teal-400 flex items-center gap-1">View full resume <MdArrowOutward/></Link>
        </div>
    );
};

export default Experiences;
