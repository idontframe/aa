/* src/components/MyCard.jsx */
import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({ tagText, tagColor }) => {
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://i.pinimg.com/736x/e4/80/a6/e480a65d531c4ad79d49c4a81177208b--knights-templar-teutonic-knights.jpg" className="card-img-fixed" />
                <Card.Body>
                    <Card.Title>Orden Teutónica</Card.Title>
                    <Card.Text>La Orden Teutónica es una orden medieval de carácter religioso-militar fundada en Palestina en 1190 en la Tercera Cruzada durante el asedio de la fortaleza de San Juan de Acre. En 1198 se convirtió en orden militar.</Card.Text> 
                    <Tags text="1190, 1198" color="#000000" />
                </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://2.bp.blogspot.com/-ZYRhpzNXOf0/TfCjmEa4RoI/AAAAAAAAAL4/B6Cqwy541L4/s1600/CaballeroTemplario06.jpg" className="card-img-fixed" />
                <Card.Body>
                    <Card.Title>Orden Templaria</Card.Title>
                    <Card.Text>La Orden de los Pobres Compañeros de Cristo del Templo de Salomón, también llamada la Orden del Templo, cuyos miembros son conocidos como caballeros templarios, fue una de las órdenes monásticas militares católicas más poderosas de la Edad Media.</Card.Text>
                    <Tags text="1119" color="#000000" />
                </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://foreignpolicy.com/wp-content/uploads/2019/09/GettyImages-452917354.jpg?w=1000" className="card-img-fixed" />
                <Card.Body>
                    <Card.Title>Al-Qaeda</Card.Title>
                    <Card.Text>Al Qaeda (“La base”, en árabe) fue creado en 1988 por el saudita Osama bin Laden con el objetivo de establecer un califato pan-islámico en todo el mundo musulmán, según la oficina del Director Nacional de Inteligencia de Estados Unidos, mediante una yihad (o “guerra santa”) global.</Card.Text>
                    <Tags text="1988" color="#000000" />
                </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://preview.redd.it/us-navy-seals-and-marines-train-consulate-evacuation-at-v0-xzvplz0z2qta1.jpg?auto=webp&s=6be3b2f3fa2450f8bb71dc2c1469e51ac9ac7591" className="card-img-fixed" />
                <Card.Body>
                    <Card.Title>Navy SEALS</Card.Title>
                    <Card.Text>Conocidos habitualmente como Navy SEALs, son la principal fuerza de operaciones especiales de la Armada de los Estados Unidos, siendo el componente marítimo del Mando de Operaciones Especiales de los Estados Unidos (USSOCOM).</Card.Text>
                    <Tags text="1962" color="#000000" />
                </Card.Body>
            </Card>
           
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://im.rediff.com/news/2014/jul/15isis1.jpg" className="card-img-fixed" />
                <Card.Body>
                    <Card.Title>ISIS</Card.Title>
                    <Card.Text>Comenzó como un grupo escindido de al Qaeda. También se conoce como Estado Islámico en Iraq y el Levante (ISIL, en inglés) y Estado Islámico (IS, en inglés). ISIS pretende crear un estado islámico llamado califato en todo Iraq, Siria y más allá.</Card.Text>
                    <Tags text="2006" color="#000000" />
                </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="https://www.habilian.ir/en/images/ISIS_Female_Members.jpg" className="card-img-fixed" />
                <Card.Body>
                    <Card.Title>Jihadi</Card.Title>
                    <Card.Text>El yihadismo hace referencia a una ideología caracterizada por la frecuente utilización del terrorismo en nombre de una pretendida yihad, a la cual sus seguidores llaman una «guerra santa» en el nombre de Alá.</Card.Text>
                    <Tags text="Yihad" color="#000000" />
                </Card.Body>
            </Card>
        </>
    );
};

export default MyCard;
