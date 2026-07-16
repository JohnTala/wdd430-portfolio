import SkillCard from "@/components/SkillCard";

export default async function About() {

    await new Promise((resolve)=>{setTimeout(resolve,1000)})
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-lg text-gray-700 mb-8">
        Hi, I'm John Talatala, an aspiring full-stack web developer with a
        passion for building responsive and user-friendly web applications.
        Through my studies, I have gained experience developing websites using
        modern web technologies and enjoy learning new frameworks such as
        Next.js.
      </p>

      <SkillCard
        title="Technical Skills"
        skills={[
          "HTML5",
          "CSS3",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Tailwind CSS",
          "Git & GitHub",
        ]}
      />
    </main>
  );
}