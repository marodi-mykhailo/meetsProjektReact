import {Avatar, Paper} from '@material-ui/core';
import React from 'react';
import {Container} from 'react-bootstrap';
import s from './MeetItem.module.css';
import ParticipantsItem from "./ParticipantsItem/ParticipantsItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons/faClock";
import Button from "@material-ui/core/Button";

const img = 'https://secure.meetupstatic.com/photos/event/a/8/4/e/highres_486643086.jpeg'

const participants = Array(1, 13, 123, 1, 231, 23, 1231, 32, 123, 12)

const MeetItem = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <Container>
                    <div className={s.date}><span>понедельник, 9 ноября 2020 г.</span></div>
                    <h3 className={s.title}>#7 Czy paragrafy mogą spętać algorytmy? & makesense.ai - proste narzędzie
                        (...)</h3>
                    <div className={s.author}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                        <div className={s.authorInfo}>
                            <div className={s.host}>Hosted by</div>
                            <div className={s.name}>Marodi Mykhailo</div>
                        </div>
                    </div>
                </Container>
            </div>
            <section className={s.main}>
                <Container>
                    <div className={s.mWrapper}>
                        <div className={s.left}>
                            <img className={s.mainImg} src={img} alt={''}/>
                            <h4 className={s.LTitle}>Details</h4>
                            <p className={s.LInfo}>
                                Pierwszy meetup po wakacyjnej przerwie wciąż odbędzie się na zasadzie online.

                                Link do wydarzenia: zostanie dodany w późniejszym terminie

                                ____________________________________________

                                1. PREZENTACJA 19:00 - 19:45
                                Prelegent: Kamil Szpyt, adiunkt w Instytucie Prawa Prywatnego na Wydziale PAiSM
                                Krakowskiej Akademii, radca prawny
                                Tytuł: Czy paragrafy mogą spętać algorytmy? O próbach uregulowania prawnej sytuacji
                                sztucznej inteligencji w Unii Europejskiej

                                Postępujący rozwój sztucznej inteligencji rodzi zarówno liczne nadzieje, jak i obawy. Z
                                jednej strony mami wizją świata przyszłości, w którym całą pracę za ludzi będą
                                wykonywały maszyny. Z drugiej – przeraża groźbą buntu robotów na miarę tego znanego z
                                filmu „Terminator”. Wnioskując z wypowiedzi ekspertów – obie prognozy są równie
                                prawdopodobne. Niezależnie jednak od tego, która z nich się w rzeczywistości sprawdzi,
                                ustawodawca unijny już na tym etapie podjął pierwsze działania mające na celu
                                uregulowanie prawnych ram produkowania i korzystania z AI, co w praktyce miałoby
                                ograniczyć skalę ewentualnych nadużyć i przechylić szalę na korzyść pierwszej z
                                przedstawionych wizji.

                                Pracy w tym zakresie nie brakuje. Konieczne jest m.in. rozwiązanie problemu
                                odpowiedzialności za działania sztucznej inteligencji (w szczególności w przypadku
                                autonomicznych pojazdów), zapewnienie (lub pozbawienie) ochrony rezultatów artystycznej
                                i wynalazczej twórczości AI czy wreszcie nadanie sztucznej inteligencji podmiotowości
                                prawnej.

                                Niniejsze wystąpienie ma na celu przedstawienie najważniejszych ze wskazanych wyżej
                                problemów, ich potencjalnych rozwiązań oraz stanu ustawodawstwa Unii Europejskiej w
                                zakresie ich uregulowania.

                                Bio:
                                Kamil Szpyt – doktor nauk prawnych, adiunkt w Instytucie Prawa Prywatnego na Wydziale
                                Prawa, Administracji i Stosunków Międzynarodowych Krakowskiej Akademii im. Andrzeja
                                Frycza Modrzewskiego; wykładowca w Kolegium Nauk Medycznych Uniwersytetu Rzeszowskiego;
                                radca prawny prowadzący własną kancelarię oraz współpracujący z renomowanymi
                                kancelariami wrocławskimi, warszawskimi i krakowskimi.

                                2. PREZENTACJA 19:45 - 20:15
                                Prelegent: Piotr Skalski, VirtusLab
                                Tytuł: makesense.ai - proste narzędzie do rozwiazywania trudnych problemów

                                makesense.ai jest darmowym open-source narzędziem online do labelowania zdjęć. Działa w
                                przeglądarce i nie wymaga skomplikowanej instalacji. Wystarczy odwiedzić stronę i już
                                jesteś gotowy do pracy. Nie ma też znaczenia, na którym systemie operacyjnym pracujesz.
                                Doskonale sprawdza się w małych projektach Deep Learning oraz Computer Vision, co
                                znacznie ułatwia i przyspiesza proces przygotowania zbioru danych. Przygotowane etykiety
                                mogą być pobierane w jednym z wielu obsługiwanych formatów. Aplikacja została napisana w
                                języku TypeScript i jest oparta na duecie React/Redux.
                                https://github.com/SkalskiP/make-sense

                                Bio:
                                Bio: Computer Vision Tech Lead @ VirtusLab | Founder @ makesense.ai | Writer @
                                medium.com/@piotr.skalski92

                                ____________________________________________
                                Sponsorzy

                                Sponsorem założycielskim Data Science Rzeszow jest VirtusLab https://virtuslab.com
                            </p>
                            <div className={s.participantsWrapp}>
                                <div className={s.PHeader}>
                                    <h4 className={s.PTitle}>Participants <span>(20)</span></h4>
                                    <div className={s.all}>See all</div>
                                </div>
                                <div className={s.participants}>
                                    {participants.map(item => {
                                        return <ParticipantsItem/>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={s.right}>
                            <div className={s.rightWrapper}>
                                <Paper elevation={3} className={s.paper}>
                                    <div className={s.meet}>
                                        <img className={s.smallImg} src={img} alt={''}/>
                                        <div className={s.meetInfo}>
                                            <div className={s.meetName}>Data Science Rzeszów</div>
                                            <div className={s.meetType}>Открытая группа</div>
                                        </div>
                                    </div>
                                </Paper>
                                <Paper elevation={3} className={s.paper}>
                                    <div className={s.meet}>
                                        <FontAwesomeIcon icon={faClock} className={s.timeIcon}/>
                                        <div className={s.meetInfo}>
                                            <div className={s.meetName}>понедельник, 9 ноября 2020 г.</div>
                                            <div className={s.meetType}>19:00 до 21:00 GMT+1</div>
                                        </div>
                                    </div>
                                    <Button variant="outlined"
                                            color="secondary"
                                            className={s.joinBtn}>
                                        Secondary
                                    </Button>
                                </Paper>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default MeetItem;
