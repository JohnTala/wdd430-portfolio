interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-600">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}