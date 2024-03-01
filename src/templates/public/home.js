import { Link }         from "react-router-dom";
import Navbar           from "../navbars/homeNavbar";
import Footer           from "../footers/footer";
import Run              from "../../media/run.mp4";
import Raum             from "../../media/raum.png";
import About            from "../../media/about.png";
import Ai               from "../../media/ai.png";
import Hobbies          from "../../media/hobbies.png";
import Login            from "../../media/login.png";
import                       "../../css/home.css";

const home = () => {
    window.scroll(0,0);

    return (
        <div className="home">
            <Navbar/>
            <div className="infos">
                <div className="info">
                    <div className="content">
                        <h3>
                            <Link to="/events">Events</Link>
                        </h3>
                        <p>
                            In diesem Abschnitt bieten wir Ihnen die Möglichkeit, die neuesten Events
                            und bedeutenden Anmerkungen des PaRaMeRoS Teams einzusehen. Hier finden Sie
                            nicht nur Informationen zu den aktuellen Veranstaltungen, sondern auch
                            wichtige Hinweise zu verschiedenen Themen wie Erfolge, Fortschritt und
                            ähnliche Belange des Teams. Dieser Bereich dient als umfassende
                            Informationsquelle, um Sie nicht nur über die laufenden Ereignisse,
                            sondern auch über die allgemeine Entwicklung des Teams auf dem Laufenden
                            zu halten. Tauchen Sie ein und erfahren Sie mehr über unsere Errungenschaften,
                            den fortschreitenden Entwicklungsprozess und andere relevante Aspekte, die einen
                            Einblick in die spannende Welt des PaRaMeRoS Teams gewähren.<br/><br/>
                            <Link to="/events">Link to Events</Link>
                        </p>
                    </div>
                    <img
                        src={Raum}
                        alt="TEST"
                    />
                </div>
                <div className="info">
                    <div className="content">
                        <h3>
                            About us
                        </h3>
                        <p>
                            Diese <Link to="https://github.com/CoolerTyp99/PaRaMeRoS-Frontend">Website </Link>
                            ist vom First Lego League Team „PaRaMeRoS“ der Pater Rupert Mayer Realschule.
                            Unser Team besteht aus einer Gruppe von engagierten Schülern, die sich für Robotik und
                            Technologie begeistern.
                            Wir haben viel gearbeitet, um unser Wissen und unsere Fähigkeiten zu erweitern und uns auf
                            die Wettbewerbe vorzubereiten.
                            In den letzten Jahren hat die Pater Rupert Mayer Realschule schon mit vielen Schülern an der
                            First Lego League teilgenommen und haben viele Erfolge erzielt.
                            Unsere Vorgänger haben bereits viele Preise gewonnen und Erfahrungen gesammelt. <Link
                            to="/about#about">Mehr</Link>
                        </p>
                    </div>
                    <img
                        src={About}
                        alt="Bild vom Team"
                    />
                </div>
                <div className="info">
                    <div className="content">
                        <h3>
                            Unsere Künstliche Intelligenz
                        </h3>
                        <p>
                            Die Künstliche Intelligenz (KI) in unserem System basiert auf einem linearen
                            Backpropagation-KNN-System (Künstliches Neuronales Netzwerk), das dazu dient,
                            das programmierte System kontinuierlich zu verbessern. Dieser intelligente Mechanismus
                            gewährleistet nicht nur eine ständige Optimierung, sondern sorgt auch dafür,
                            dass potenzielle Probleme, die durch Umwelteinflüsse wie Staub oder andere externe
                            Faktoren entstehen könnten, proaktiv erkannt und behoben werden. Durch den Einsatz von
                            Backpropagation kann die KI das Programm selbstständig anpassen und optimieren, indem
                            sie aus Erfahrungen lernt und die Leistungsfähigkeit steigert. Gleichzeitig wird eine
                            robuste Sicherheitsinfrastruktur gewährleistet, um potenzielle Störungen durch
                            Umwelteinflüsse zu minimieren. Diese fortschrittliche KI-Technologie geht über herkömmliche
                            Systeme hinaus, indem sie nicht nur die Effizienz steigert, sondern auch sicherstellt,
                            dass externe Einflüsse keinen negativen Einfluss auf die Funktionalität des Programms haben.
                            Somit ermöglicht unser linear Backpropagation-KNN-System eine zuverlässige und robuste Leistung
                            in unterschiedlichsten Umgebungen.
                        </p>
                    </div>
                    <img
                        src={Ai}
                        alt="Ai"
                    />
                </div>
                <div className="info">
                    <div className="content">
                        <h3>
                            Hobbies
                        </h3>
                        <p>
                            Wenn Sie derzeit nach neuen Hobbys suchen oder einfach mehr über verschiedene Freizeitaktivitäten
                            erfahren möchten, sind Sie hier genau richtig. In unserem Bereich finden Sie eine vielfältige
                            Auswahl an Hobbys, die Ihnen dabei helfen können, Ihre Freizeit sinnvoll und unterhaltsam zu gestalten.
                            Tauchen Sie ein und informieren Sie sich über die breite Palette an verfügbaren <Link to="/hobbies">Hobbies</Link>,
                            die von kreativen Handwerksaktivitäten über sportliche Betätigungen bis hin zu intellektuellen Interessen
                            reichen. Sollten Sie eigene Hobbys beisteuern wollen, haben Sie die Möglichkeit, dies einfach zu tun,
                            indem Sie den Anweisungen auf der Seite folgen. Wir begrüßen und ermutigen Ihre Mitwirkung, um eine
                            noch umfassendere Sammlung von Hobbys zu schaffen. Unser Ziel ist es, Ihnen bei der Entdeckung
                            neuer Interessen zu helfen und Ihnen die Möglichkeit zu bieten, Ihre Leidenschaften zu teilen.
                            Wir hoffen, dass diese Funktion für einige von Ihnen eine wertvolle Unterstützung darstellt und
                            Ihnen dabei hilft, die perfekte Freizeitbeschäftigung zu finden. Genießen Sie die Vielfalt der
                            vorgestellten Hobbys und lassen Sie sich von der Welt der Freizeitaktivitäten inspirieren!
                        </p>
                    </div>
                    <img
                        src={Hobbies}
                        alt="Hobbies"
                    />
                </div>
                <div className="info">
                    <div className="content">
                        <h3>
                            Login / Verwalung unsere KI
                        </h3>
                        <p>
                            Unser Login-Terminal bietet Teammitgliedern nicht nur die Möglichkeit, sich einzuloggen,
                            sondern auch eine Vielzahl von Funktionen zur aktiven Mitgestaltung unseres Teams. Hier
                            können Teammitglieder Hobbys und Events erstellen sowie bearbeiten, was einen kreativen
                            Austausch und eine effektive Planung von Aktivitäten ermöglicht. Dies fördert nicht nur
                            die Zusammenarbeit, sondern auch die Vielfalt an Interessen innerhalb des Teams. Darüber
                            hinaus dient das Terminal als zentrale Schnittstelle für die Verwaltung des Servers und
                            des Algorithmus, der auf <Link to="https://github.com/PaRaMeRoS/Algorithmus">GitHub </Link>
                            zu finden ist. Diese leistungsstarke Funktion ermöglicht eine effiziente Steuerung und
                            Überwachung sowohl des Serverbetriebs als auch des Algorithmus, der für unser Team von
                            entscheidender Bedeutung ist. Die gut erreichbare Schnittstelle erleichtert die Interaktion
                            mit dem Algorithmus und fördert eine reibungslose Kommunikation zwischen den Teammitgliedern.
                            Insgesamt schafft unser Login eine dynamische Plattform, die nicht nur die täglichen
                            Teamaktivitäten erleichtert, sondern auch die technologische Effizienz und Kommunikation
                            innerhalb unseres Teams optimiert.
                        </p>
                    </div>
                    <img
                        src={Login}
                        alt="Terminal"
                    />
                </div>
                <div className="info">
                    <div className="content">
                        <h3>
                            Unser Run vom letzeten Sasion
                        </h3>
                        <p>
                            Die Roboterwettbewerbe finden auf regionaler, nationaler und internationaler Ebene statt,
                            wobei sich die besten Teams für höhere Stufen qualifizieren. Der Wettbewerb bietet eine
                            herausfordernde, aber unterstützende Umgebung, um jungen Menschen eine frühe Einführung
                            in Wissenschaft und Technik zu ermöglichen und dabei ihre Kreativität und
                            Innovationsfähigkeiten zu fördern.
                        </p>
                    </div>
                    <video controls loop controlsList="play nodownload" src={Run} typeof="video/mp4" autoPlay playsinline/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default home;
