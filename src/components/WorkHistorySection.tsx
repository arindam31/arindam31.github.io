import { workHistory } from "../data/workHistory";
import { Skill } from "../data/skills";


export default function WorkHistorySection() {
    return (
        <section id="work" className="scroll-mt-20">
            <h2 className="text-2xl font-semibold mb-6">Work History</h2>
            <ul className="border-l-2 border-gray-300 space-y-6 pl-6">
                {workHistory.map((job, index) => (
                    <li key={index} className="relative">
                        <div className="absolute w-3 h-3 bg-blue-600 rounded-full left-[-1.8rem] top-1.5"></div>
                        <h3 className="text-lg font-bold">
                            {job.title}
                            </h3>
                        <p className="text-sm text-gray-500">
                            {job.company} • {job.period}</p>
                        <p className="text-sm text-gray-500">{job.location}</p>
                        {job.description && (
                            <p className="text-gray-600 mt-1">{job.description}</p>
                        )}
                        {job.skills && job.skills.length > 0 && (
                            <ul className="flex flex-wrap gap-2 mt-2">
                                {job.skills
                                .filter((skill):skill is Skill => Boolean(skill))
                                .map((skill, idx) => (
                                    <li key={idx}>
                                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-lg">
                                            {skill.title}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )
                        }
                    </li>
                ))}
            </ul>
        </section>
    )
}