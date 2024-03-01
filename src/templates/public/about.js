import Navbar           from "../navbars/aboutNavbar";
import Footer           from "../footers/footer";
import Bild0            from "../../media/coaches.png";
import Bild1            from "../../media/2017-18.png";
import Bild2            from "../../media/2019-20.png";
import Bild3            from "../../media/2020-21.png";
import Bild4            from "../../media/2021-22.png";
import Bild5            from "../../media/2022-23.png";
import Bild6            from "../../media/2023-24.png";
import Roboter          from "../../media/roboter.mkv";
import                       "../../css/home.css";

const about = () => {
    return(
        <div className="about">
            <Navbar/>
            <div className="infos">
                <div className="info">
                    <div className="content">
                        <h3 id="about">
                            About us
                        </h3>
                        <p>
                            Diese Website ist vom First Lego League Team „PaRaMeRoS“ der Pater Rupert Mayer Realschule.
                            Unser Team besteht aus einer Gruppe von engagierten Schülern, die sich für Robotik und
                            Technologie begeistern.
                            Wir haben viel gearbeitet, um unser Wissen und unsere Fähigkeiten zu erweitern und uns auf
                            die Wettbewerbe vorzubereiten.
                            In den letzten Jahren hat die Pater Rupert Mayer Realschule schon mit vielen Schülern an der
                            First Lego League teilgenommen und viele Erfolge erzielt.
                            Unsere Vorgänger haben bereits viele Preise gewonnen und Erfahrungen gesammelt.<br/>
                            Unser Ziel ist es, uns ständig zu verbessern und immer anspruchsvollere Projekte in Angriff
                            zu nehmen. Das geht aber auch nur, da wir uns ständig mit alten Schülern unterhalten und
                            Erfahrung austauschen.
                            Wir lernen nicht nur technische Fähigkeiten, sondern auch wichtige Skills wie Teamarbeit,
                            Kommunikation und Zeitmanagement.
                            Wir sind stolz darauf, Teil dieses First Lego League Teams zu sein und zu zeigen, was
                            Realschüler auch/besser können.
                        </p>
                    </div>
                    <video controls controlsList="play nodownload" src={Roboter} typeof="video/mkv" autoPlay playsinline/>
                </div>
                <div className="info">
                    <div className="content">
                        <h3 id="about">
                            Unsere Coaches
                        </h3>
                        <p>
                            Unser Coach, Herr von Essen, ist die treibende Kraft hinter dem Erfolg der PaRaMeRoS und 
                            seit Beginn dabei. Hier ist ein kurzer Einblick in seine wichtige Rolle: <br/>
                            Herr von Essen ist seit der Gründung im Jahr 2017 ein erfahrener Mentor im 
                            PaRaMeRoS Team. Als engagierter Coach und erfahrener Experte in der Welt der 
                            Robotik leitet er nicht nur technische Fähigkeiten an, sondern fördert auch 
                            Teamarbeit und Leidenschaft.<br/>
                            Die Unterstützung unseres Co-Coaches, Frau Knauke, ist entscheidend für unseren Erfolg.
                            Sie arbeitet eng mit Herr von Essen zusammen, um das Team zu leiten und bei der 
                            Entwicklung von uns Schülern und als Team zu helfen. Sie trägt dazu bei, dass das 
                            PaRaMeRoS Team kontinuierlich wachsen und sich verbessern kann.<br/>
                            Herr von Essen und Frau Knauke bilden ein unschlagbares Team, das nicht nur Technologie
                            vermittelt, sondern auch die persönliche Entwicklung jedes Einzelnen fördert. Wir 
                            danken Herr von Essen und Frau Knauke für ihre großartige Arbeit und ihre bedeutende
                            Rolle in der Erfolgsgeschichte des Teams PaRaMeRoS.
                        </p>
                    </div>
                    <img
                        src={Bild0}
                        alt="Bild von den Coches"
                    />
                </div>
                <div className="info">
                    <div className="content">
                        <h3 id="about">
                            2017/18: Erster Schritt in die Welt der FIRST Lego League
                        </h3>
                        <p>
                            In der Saison 2017/18 wagten Benedikt, Jonas, Robert, Jakob, Clemens, Kilian, Dominic, Carl
                            & Sebastian als Teilnehmer der
                            PaRaMeRoS den ersten Schritt in die Welt der FIRST Lego League. Ihre Begeisterung für
                            Robotik entfaltete sich,
                            und gemeinsam legten sie den Grundstein für kommende Jahre.
                        </p>
                    </div>
                    <img
                        src={Bild1}
                        alt="Bild vom Team"
                    />
                </div>
                <div className="info">
                    <div className="content">
                        <h3 id="about">
                            2019/20: Kontinuierliche Verbesserung und Teamgeist
                        </h3>
                        <p>
                            Nachdem wir 2018/19 wegen eines Schneesturms nicht teilnehmen konnten, <br/>
                            konzentrierten sich Marcel, Kyan Amin, Konstantin, Markus, Moritz, Leonardo, Constantin,
                            Phillip & Raphael
                            in der Saison 2019/20 auf kontinuierliche Verbesserung und den Austausch von Erfahrungen.
                            Ihr Teamgeist wurde gestärkt, und sie erkannten den Wert von Fähigkeiten wie Teamarbeit und
                            Kommunikation.
                        </p>
                    </div>
                    <img
                        src={Bild2}
                        alt="Bild vom Team"
                    />
                </div>
                <div className="info">
                    <div className="content">
                        <h3 id="about">
                            2020/21: Herausforderungen meistern und wertvolle Erfahrungen sammeln
                        </h3>
                        <p>
                            Trotz globaler Herausforderungen im Jahr 2020/21 ließen sich die PaRaMeRoS nicht
                            entmutigen.
                            Lena, Romina, Simeon & Tobias meisterten Herausforderungen und sammelten wertvolle
                            Erfahrungen,
                            auch wenn keine spezifischen Preise gewonnen wurden.
                        </p>
                    </div>
                    <img
                        src={Bild3}
                        alt="Bild vom Team"
                    />
                </div>
                <div className="info">
                    <div className="content">
                        <h3 id="about">
                            2021/22: Triumph und Herausforderungen
                        </h3>
                        <p>
                            In der vorletzten Saison erzielten Lena, Romina, Simeon & Tobias herausragende Triumphe.
                            Mit ihrer beeindruckenden Leistung gewann das Team den <b>Hauptpreis in
                            Roboter-Design </b>
                            und den <b>3. Platz in Robot-Game & Grundwerte</b>.
                            Diese Auszeichnungen sind nicht nur Meilensteine, sondern auch eine Anerkennung für die
                            große Hingabe jedes Teilnehmers.
                            Nach dem erfolgreichen Meistern des regionalen Wettbewerbs und dem Feiern unserer Erfolge
                            erlebten wir jedoch auch Herausforderungen.
                            Trotz des vorzeitigen Ausscheidens nach dem regionalen Wettbewerb wegen eines dummen Fehlers
                            bleibt der Stolz auf das,
                            wir etwas erreicht haben, und die Erkenntnis, dass jede Hürde uns stärker macht.
                        </p>
                    </div>
                    <img
                        src={Bild4}
                        alt="Bild vom Team"
                    />
                </div>
                <div className="info">
                    <div className="content">
                        <h3 id="about">
                            2022/23: Aktuelles Team und zukünftige Herausforderungen
                        </h3>
                        <p>
                            In dieser Saison präsentieren sich Maximilian, David, Carl, Alex, Anna,
                            Maria, Livia, Noah & Sebastian
                            als das aktuelle Team der PaRaMeRoS. Gemeinsam setzen wir die Tradition der Exzellenz fort
                            und nehmen die Herausforderungen
                            der FIRST Lego League 2022/23 an. Unsere Hingabe und Leidenschaft für Technologie,
                            Teamarbeit und Triumph werden den Weg für neue Erfolge ebnen.
                        </p>
                    </div>
                    <img
                        src={Bild5}
                        alt="Bild vom Team"
                    />
                </div>
                <div className="info">
                    <div className="content">
                        <h3 id="about">
                            2023/24: Coming Soon
                        </h3>
                        <p>
                            Wir freuen uns darauf, euch bald die spannenden Entwicklungen und Erfolge unseres aktuellen Teams
                            Maximilian, David, Carl, Alex, Anna, Maria, Livia, Nathan, Noah & Sebastian
                            in der FIRST Lego League Saison 2023/24 vorstellen zu können. Stay tuned!
                        </p>
                    </div>
                    <img
                        src={Bild6}
                        alt="Bild vom Team"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default about;
