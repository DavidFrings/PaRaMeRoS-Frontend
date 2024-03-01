import Navbar           from "../navbars/clearNavbar";
import Footer           from "../footers/footer";
import                       "../../css/home.css";

const impressum = () => {
    window.scroll(0, 0);

    return (
        <div className="impressum">
            <Navbar/>
            <br />
            <br />
            <br />
            <br />
            <br />
	    <br />
            <div id="impressum">
                <div id="impressum"></div>
                <h1>Impressum</h1>

                <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <p>Erzbischöfliche Pater-Rupert-Mayer Realschule<br/>
                    Wolfratshauserstr. 30<br/>
                    82049 Pullach im Isartal</p>

                <p><strong>Vertreten durch:</strong><br/>
                    Markus v. Essen<br/>
                    First Lego League Team PaRaMeRoS
	        </p>

		<br />
		<br />

                <h2>Kontakt</h2>
                <p>Telefon: 089/74426-182<br/>
                    Telefax: 089/74426-185<br/>
                    E-Mail: parameros@mein.gmx</p>

                {/*<h2>Redaktionell verantwortlich</h2>
                <p>Name Nachname</p>*/}
            </div>
            <Footer/>
        </div>
    );
}

export default impressum;
