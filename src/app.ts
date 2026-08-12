import { createHeader } from "./components/header";
import { createHero } from "./components/hero";
import { createExperience } from "./components/experience";
import { createProjectList } from "./components/projects";
import { createAbout } from "./components/about";
import { createFooter } from "./components/footer";
import { portfolioContent } from "./content/portfolio";
import { bindPortraitFallback } from "./interactions/portrait";
import { bindNavigation } from "./interactions/navigation";

export function renderApp(root: HTMLElement): void {
  root.replaceChildren();
  const main = document.createElement("main");
  main.append(
    createHero(portfolioContent),
    createExperience(portfolioContent.currentExperience),
    createProjectList(
      portfolioContent.projects,
      portfolioContent.repositoriesHref
    ),
    createAbout(portfolioContent.about, portfolioContent.principles)
  );

  root.append(
    createHeader(portfolioContent.name, portfolioContent.contacts),
    main,
    createFooter(portfolioContent.contacts)
  );
  bindPortraitFallback(root);
  bindNavigation(root);
}
