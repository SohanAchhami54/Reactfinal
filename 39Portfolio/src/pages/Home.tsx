import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-[80vh] items-center justify-center">
      <div className="max-w-4xl text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-blue-400">
          {t("welcomePortfolio")}
        </p>

        <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
          {t("greeting")}{" "}
          <span className="text-blue-400">{t("sohan")} {t("achhami")} </span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          {t("portfolioDescription")}
        </p>

        <div className="mt-10 flex justify-center">
          <NavLink
            to="/about"
            className="rounded-lg border border-gray-600 px-6 py-3 font-medium text-gray-300 transition hover:border-white hover:text-white"
          >
            {t("learnMore")}
          </NavLink>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-800 bg-gray-800/40 p-6">
            <h2 className="text-2xl font-semibold text-white">
              {t("blog")}
            </h2>

            <p className="mt-3 leading-7 text-gray-400">
              {t("blogDescription")}
            </p>
          </div>

          <div className="rounded-xl border border-gray-800 bg-gray-800/40 p-6">
            <h2 className="text-2xl font-semibold text-white">
              {t("weather")}
            </h2>

            <p className="mt-3 leading-7 text-gray-400">
              {t("weatherDescription")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;