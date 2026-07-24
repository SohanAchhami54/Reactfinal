import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const learning = [
    t("learning1"),
    t("learning2"),
    t("learning3"),
  ];

  const projects = [
    {
      title: t("project1Title"),
      description: t("project1Description"),
    },
    {
      title: t("project2Title"),
      description: t("project2Description"),
    },
    {
      title: t("project3Title"),
      description: t("project3Description"),
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="space-y-10">
        {/* Heading */}
        <div>
          <h1 className="text-4xl font-bold text-white">
            {t("aboutMe")}
          </h1>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            {t("aboutDescription", {
              name: `${t("sohan")} ${t("achhami")}`,
            })}
          </p>
        </div>

        {/* Learning */}
        <div className="rounded-xl border border-gray-800 bg-gray-800/40 p-6">
          <h2 className="text-2xl font-semibold text-white">
            {t("currentlyLearning")}
          </h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
            {learning.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Projects */}
        <div className="rounded-xl border border-gray-800 bg-gray-800/40 p-6">
          <h2 className="text-2xl font-semibold text-white">
            {t("projects")}
          </h2>

          <ul className="mt-6 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <li
                key={project.title}
                className="list-none rounded-lg border border-gray-700 p-5"
              >
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-400">
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Goal */}
        <div className="rounded-xl border border-gray-800 bg-gray-800/40 p-6">
          <h2 className="text-2xl font-semibold text-white">
            {t("myGoal")}
          </h2>

          <p className="mt-4 leading-8 text-gray-300">
            {t("goalDescription")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;