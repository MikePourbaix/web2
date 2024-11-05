import { Movie } from "../types";
import Cinema from "./Cinema";
import PageTitle from "./PageTitle";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1: Movie[] = [
    {
      title: "HAIKYU-THE DUMPSTER BATTLE",
      director: "Susumu Mitsunaka",
      description: "A high-energy sports anime movie focusing on the intense volleyball rivalry between Karasuno High and their fierce competitors."
    },
    {
      title: "GOODBYE JULIA",
      director: "Mohamed Kordofani",
      description: "A poignant drama that explores themes of love, loss, and the complex dynamics of human relationships in a deeply emotional narrative."
    },
    {
      title: "INCEPTION",
      director: "Christopher Nolan",
      description: "A mind-bending sci-fi thriller where a skilled thief, who enters people's dreams to steal secrets, is given a chance to have his criminal record erased if he can implant an idea into a target's subconscious."
    },
    {
      title: "PARASITE",
      director: "Bong Joon-ho",
      description: "A darkly comic thriller that follows the members of a poor family who scheme to become employed by a wealthy household by posing as unrelated, highly qualified individuals."
    }
  ];


  const cinema2Name = "UGC Toison d'Or";

  const moviesCinema2: Movie[] = [
    {
      title: "THE WATCHERS",
      director: "Ishana Night Shyamalan",
      description: "A gripping supernatural thriller that follows a group of people who discover that the mysterious symbols they see in their dreams are connected to a sinister plot that threatens the fate of humanity."
    },
    {
      title: "BAD BOYS: RIDE OR DIE",
      director: "Adil El Arbi, Bilall Fallah",
      description: "An action-packed buddy cop movie that follows two detectives as they team up to take down a ruthless drug lord while dealing with personal issues that threaten to derail their mission."
    },
    {
      title: "TENET",
      director: "Christopher Nolan",
      description: "A high-concept spy thriller where a secret agent is tasked with preventing World War III through the manipulation of time inversion technology."
    },
    {
      title: "THE IRISHMAN",
      director: "Martin Scorsese",
      description: "An epic crime drama that follows the life of a mob hitman as he reflects on his involvement in the disappearance of his longtime friend and powerful union leader."
    }
  ];


  return (
    <div>

      <Header urlLogo="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
        <h1>Tout sur les films</h1>
      </Header> <br /> <br /> <br /><br /><br />

      <main className="page-content">
        <PageTitle title={pageTitle} />

        <Cinema name={cinema1Name} movies={moviesCinema1} />

        <Cinema name={cinema2Name} movies={moviesCinema2} />
      </main>

      <Footer urlLogo="https://media.istockphoto.com/id/1202770152/fr/photo/bobine-de-film-disolement-sur-le-fond-jaune-lumineux-dans-les-couleurs-pastel.jpg?s=1024x1024&w=is&k=20&c=2yKBrC8oyimPdW-5IxFWN_zxFPVK3KWYL9OE2gVmVX4=">
        <p>&copy; 2021 UGC Cinémas</p>
      </Footer>

    </div>
  );
};


export default App;