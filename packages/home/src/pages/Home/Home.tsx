import {useEffect, useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy';

import {AllMovies} from './Home.types';

import {getAllMovies} from '@/api/movies';
import {Banner} from '@/components/Banner';
import {Row} from '@/components/Row/Row';
import {useAppSelector} from '@/hooks/useAppSelector';
import {Modal, showModal} from '@/components/Modal';
import {useAppDispatch} from '@/hooks/useAppDispatch';
import {Genre, Element} from '@/typings';
import {setCurrentMovie} from '@/components/Row/moviesSlice';

const Main = styled.main`
  position: relative;
  padding-left: 1rem;
  padding-bottom: 6rem;

  @media only screen and (min-width: 1024px) {
    padding-left: 4rem;
    & > * + * {
      margin-top: 6rem;
    }
  }
`;
const Section = styled.section`
  & > * + * {
    margin-top: 6rem;
  }
`;

const TrailerContainer = styled.div`
  height: calc(100vh - 250px);
`;

export const Home = () => {
  const {
    netflixOriginals,
    actionMovies,
    comedyMovies,
    documentaries,
    horrorMovies,
    romanceMovies,
    topRated,
    trendingNow,
  } = useLoaderData() as AllMovies;
  const modalShow = useAppSelector((state) => state.showModal);
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(true);
  const movie = useAppSelector((state) => state.movies.currentMovie);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!movie) return;

    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === 'tv' ? 'tv' : 'movie'
        }/${movie?.id}?api_key=${
          process.env.API_KEY
        }&language=en-US&append_to_response=videos`,
      ).then((response) => response.json());

      // console.log(data, '#@@@@')

      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === 'Trailer',
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }
    fetchMovie();
  }, [movie]);

  const handleClose = () => {
    dispatch(showModal(false));
    dispatch(setCurrentMovie(null));
  };

  return (
    <>
      <Main>
        <Banner netflixOriginals={netflixOriginals} />

        <Section>
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romantic Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </Section>
        <Modal
          size="xl"
          background="#000"
          open={modalShow.show}
          onClose={handleClose}>
          <TrailerContainer   style={{position: 'relative'}}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer}`}
              width="100%"
              height="100%"
              style={{position: 'absolute', top: '0', left: '0'}}
              playing
              muted={muted}
            />
          </TrailerContainer>
        <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores ab optio quod laboriosam similique possimus sit dolores beatae quaerat! Ipsum harum, deserunt nulla debitis ratione quam amet officiis veritatis dolore.
        Debitis nesciunt rem reprehenderit culpa nemo accusamus voluptatem, explicabo maiores temporibus nostrum ipsa itaque officia asperiores quisquam amet autem eos assumenda corrupti distinctio tenetur libero aliquid. Dicta, perferendis! Ullam, velit?
        Culpa natus similique earum odio error et, rem adipisci unde nulla praesentium eaque ea consequuntur sequi ad, esse eligendi consequatur dolores corrupti perspiciatis. Porro harum sint, deleniti perspiciatis dolorem recusandae?
        Rem alias minima eius sunt cum dolorem deleniti sequi? Quam in beatae voluptates sapiente soluta, ullam laboriosam dicta accusamus voluptatum voluptate tenetur. Magni velit sapiente perferendis, aut tempora maiores dignissimos?
        Nulla enim quas sapiente iste ipsum qui dolores? Quasi itaque deserunt fuga, ratione maxime architecto suscipit dicta doloremque, autem molestias nulla. Veritatis aliquid, iste fugit ipsum facilis quos repudiandae velit.
        Perspiciatis eos praesentium numquam at alias consectetur in sequi voluptatem! Voluptates deleniti fugiat nesciunt sequi sit quia minima nemo alias culpa suscipit similique ex deserunt, libero sint quas, praesentium placeat.
        Itaque suscipit non culpa assumenda doloribus fuga explicabo possimus, cum consequatur nobis eligendi at, quo reiciendis ducimus dicta inventore voluptates perferendis quas error! Eveniet delectus deserunt maxime nesciunt expedita molestiae.
        Expedita ea quos labore cumque dicta rerum vitae quis, nemo nostrum? Accusamus, maxime minus! Nemo ullam saepe quod minus quos natus reprehenderit alias, consequatur molestiae maxime autem et dolor sed.
        Accusamus quas eveniet rem necessitatibus nihil at pariatur placeat vitae repellat? Dicta, est sint modi, quia rem itaque aut assumenda illo fuga error quae possimus perferendis ut saepe non perspiciatis.
        Iusto quasi nesciunt ea quam suscipit ducimus, cupiditate natus qui totam aspernatur quas laborum dolorum fugit facere et rerum dolores? Ea sint temporibus quae et quibusdam atque ipsa suscipit animi.
        Quod maiores itaque laudantium ratione dolore impedit necessitatibus deserunt ab id ipsum? Dignissimos illo suscipit, necessitatibus corporis magni adipisci quae id accusamus, maiores, nobis sapiente excepturi optio accusantium provident voluptates.
        Harum, in nulla hic atque culpa suscipit adipisci quidem! Soluta quas, optio cum blanditiis natus provident, quae ipsa tenetur maxime quod impedit et incidunt eum laborum nemo voluptatem libero. Neque?
        Illo quaerat saepe quam, sed nulla voluptatem earum dignissimos vitae distinctio! Nulla eaque dolore quisquam amet reiciendis blanditiis maxime, nobis accusantium totam repudiandae saepe suscipit. Inventore sed porro iure provident?
        Debitis deleniti, quibusdam atque animi fuga placeat, eius, deserunt voluptas dolore accusamus officia in facilis voluptatum assumenda? Doloribus modi, asperiores sapiente saepe in, officiis sint voluptatum iure ad hic quibusdam.
        Ratione cum obcaecati quas et suscipit nisi unde consequuntur iusto, quibusdam, dolores velit ex! Iure facere, suscipit sit ullam, voluptatibus, omnis optio repellat vitae rerum excepturi facilis qui quae quia.
        Dolores non minus quibusdam quidem sunt magni porro quos corrupti vero, a similique exercitationem nam fugiat dolorum provident quam unde rerum sit dolorem. Numquam commodi iusto cumque voluptatem fugit expedita.
        Laudantium ad, adipisci vero sed rerum amet sint incidunt, enim ullam, fugiat numquam unde ut ipsa architecto minus sequi nemo ea non. Maiores quia aperiam quod aliquid nostrum voluptatibus repudiandae.
        Labore quidem aperiam fuga repudiandae eius officiis nemo aut, deleniti earum consectetur dolor quas nobis repellat, vero quis temporibus a necessitatibus error. Illo necessitatibus repudiandae, consectetur veritatis itaque totam quod.
        Exercitationem officia aliquid fuga porro qui ipsam veniam! Architecto sunt saepe porro aut, ducimus quo autem modi magnam eum tempora ad quisquam asperiores ex dolorum mollitia, natus debitis? Architecto, harum.
        Voluptate pariatur ipsa molestias perspiciatis atque iure quibusdam eius. Expedita vero eveniet, quidem sunt esse dolorum culpa alias est asperiores tempore provident eaque nobis, explicabo corrupti vel omnis eos? Atque.
        Possimus reprehenderit doloremque repudiandae sit aut ullam iure magni sed exercitationem dignissimos. Incidunt quos tenetur consequuntur ad ut magnam odit vero officiis quasi. Vel, voluptas. Velit quo quam adipisci cumque.
        Harum recusandae sapiente beatae? Blanditiis voluptatem esse error quia tenetur assumenda iste harum? Dolore, repellat id reiciendis dolores inventore quaerat nam at illo amet suscipit ipsum in, obcaecati doloremque sit!
        Voluptatibus nemo quibusdam quos laborum, deserunt obcaecati beatae tempora asperiores quisquam sint consequuntur eveniet sit adipisci dolor perspiciatis maiores, libero odio recusandae fuga vel a enim qui ratione molestiae. Dicta!
        Doloribus nihil aspernatur repudiandae obcaecati commodi non aperiam facilis sunt! Deserunt asperiores repellendus dolores laudantium officia nulla animi? Sint unde harum quis est dignissimos atque nemo, nisi dolores amet minus?
        Eum voluptates officia quo nostrum earum autem maxime veniam odio? Vitae, quibusdam nisi explicabo autem rerum id, unde perspiciatis accusamus iste sint hic exercitationem. In quod cupiditate aspernatur aliquid unde.
        Consectetur pariatur culpa odit dolor fugit hic magni nam libero distinctio aut similique animi repellendus, asperiores quasi soluta in maiores id sed aperiam cum blanditiis mollitia dolorem! Consectetur, tenetur aliquam.
        Voluptate, ad assumenda. Sint officia tempore corrupti ea at? Pariatur earum aliquid et magnam. Ducimus, nisi. Repudiandae, quia. Culpa laudantium aspernatur animi unde similique cum est. Atque harum ut enim.
        Fugit, esse. Sequi tempore in asperiores cumque officia eius ea. Itaque expedita amet placeat ducimus earum, esse sint suscipit nisi minus maxime voluptatibus possimus? Autem sit fuga distinctio labore rerum.
        Possimus in recusandae ex non atque, quas ducimus quaerat sed quasi beatae necessitatibus impedit mollitia error inventore laborum aut qui blanditiis dicta voluptas. Totam minus inventore, eaque alias impedit distinctio.
        Dolore corporis at quidem totam labore magni blanditiis cupiditate explicabo modi? Omnis accusantium reprehenderit, eligendi delectus, ea adipisci perferendis sunt ipsam rem quam odit distinctio optio odio nostrum officia deleniti?
        Enim quod ratione facere explicabo eligendi suscipit recusandae eaque aliquid iure provident, ducimus exercitationem quae magni totam veritatis! Magnam recusandae laborum odio itaque, quidem corrupti iusto facere dolores rerum quasi?
        Esse dignissimos ipsum pariatur iusto minima similique, molestias aut. Voluptatibus architecto quo, corrupti quidem reiciendis aut ullam eum a vero libero beatae accusamus nihil sequi consequatur dicta! Beatae, omnis ipsum.
        Ipsam omnis accusamus ut id eveniet hic voluptate fuga fugiat nesciunt perferendis, sit qui sed mollitia, fugit natus dignissimos nostrum labore exercitationem soluta. Dolorem alias animi possimus dolore sunt architecto.
        Earum ducimus iste totam iusto sed inventore praesentium fuga labore, culpa assumenda perferendis ad natus distinctio. Explicabo modi cupiditate voluptate ipsam eum atque accusamus culpa, magnam totam quidem sint doloribus.
        Expedita, iste. Laborum totam asperiores natus quas tempore commodi! Voluptate quia obcaecati placeat ad, perferendis rerum voluptatem dolorum facere reiciendis asperiores ducimus cupiditate provident reprehenderit beatae, nemo vitae nam doloremque.
        Enim, nisi sunt provident eos quia exercitationem quidem aut? Vitae corporis deserunt odit praesentium molestiae dignissimos temporibus nemo officiis, explicabo nulla, voluptatibus id enim repudiandae fugit? Maiores alias iste ex!
        Nulla nihil possimus sint. Ipsum illum eaque repellendus unde similique dignissimos fugiat architecto perferendis tempora voluptas rerum doloremque, cumque quae numquam dolorem fugit eligendi blanditiis quidem earum repellat! Voluptatibus, dolor.
        Quasi consectetur voluptate autem dolores earum, fugit reiciendis quas unde. Quidem consequatur eligendi doloremque minima officia sapiente voluptas quas voluptatibus non quibusdam qui mollitia dolor provident quisquam maiores, nemo magni?
        Excepturi nemo alias architecto omnis? Temporibus, sunt veniam adipisci fugiat dolorem quae beatae excepturi nulla minus aperiam cupiditate cumque sint ipsam. Asperiores excepturi dignissimos exercitationem saepe ex, temporibus fugit nihil.
        Alias, facere illo? Vero odit eligendi vel commodi vitae quis quas ab dolores nemo facere. Obcaecati tempore, dolor laborum numquam eum adipisci neque nisi temporibus quidem, molestias recusandae iste! Temporibus!
        Dolores molestiae doloribus maiores dignissimos placeat asperiores pariatur nam qui doloremque adipisci. Nobis quidem aliquid commodi, porro accusamus a. Beatae, quaerat reiciendis. Blanditiis officiis, ratione quam repudiandae suscipit dignissimos. Obcaecati.
        Voluptatem fugit laborum itaque, placeat tempora aliquid officia, eveniet dicta quisquam doloremque voluptas sit dolores velit a tempore consequuntur omnis minus quibusdam minima quae nisi laboriosam illum sunt. Ullam, omnis?
        Vitae vero atque voluptates a iste omnis! Consectetur, rerum, recusandae laborum quibusdam amet dicta fuga, inventore nemo magni non alias sequi possimus asperiores neque. Ullam distinctio cumque tenetur odio aliquid!
        Similique deleniti, fugit earum dolor sint est error, vero cum reprehenderit velit illum autem natus ad doloremque eligendi debitis soluta iure quia, eum laborum ex quaerat totam modi magni! Aspernatur.
        Possimus cum quia temporibus repudiandae voluptatum quam eius sit? Doloremque facilis et similique neque unde, non delectus ullam atque odit obcaecati error voluptatibus dolor blanditiis, rem beatae quae expedita fugit.
        Tempore asperiores velit doloremque quae quo sint iusto veniam? Aliquam exercitationem asperiores recusandae, voluptas quam eveniet cupiditate maxime velit sapiente, molestiae deleniti harum quia aliquid sed quidem saepe fugiat. Eligendi.
        Numquam molestiae dolorum consequatur asperiores perspiciatis similique ipsum praesentium pariatur deserunt totam veniam esse laudantium repellendus eveniet, earum fugiat adipisci rem id optio obcaecati quis ipsa. Similique corporis aliquam vitae?
        Odit veritatis pariatur iusto numquam esse nulla corrupti reprehenderit omnis distinctio amet repellat sunt, accusantium, tenetur laboriosam quo facere recusandae sit quasi optio. Velit natus distinctio nisi quae illum odio.
        Illum ab repudiandae eaque officia perferendis esse nulla voluptatem, nobis deleniti quia neque ipsum ex provident reprehenderit nesciunt voluptas quae dolore aliquam est, dicta corrupti fugiat reiciendis, suscipit dolorem! Quibusdam!
        Quasi libero voluptates explicabo facere qui recusandae exercitationem, accusantium possimus! Dolore error tempora quidem quia, laudantium iure laboriosam fugit temporibus et, eligendi autem unde, pariatur ut necessitatibus consectetur illo perferendis.
        </div>
        </Modal>
      </Main>
    </>
  );
};

export const loader = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await getAllMovies();

  return {
    netflixOriginals: netflixOriginals.results,
    trendingNow: trendingNow.results,
    topRated: topRated.results,
    actionMovies: actionMovies.results,
    comedyMovies: comedyMovies.results,
    horrorMovies: horrorMovies.results,
    romanceMovies: romanceMovies.results,
    documentaries: documentaries.results,
  };
};
