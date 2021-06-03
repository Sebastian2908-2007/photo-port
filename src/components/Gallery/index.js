import {capitalizeFirstLetter} from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg"
function Gallery() {

    const currentCatagory = {
        name: "commercial",
        description:
        "Photos of grocery stores, food trucks, aand other commercial projects",
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCatagory.name)}</h1>
            <p>{currentCatagory.name}</p>
            <div>
                <img src={photo}
                alt="Commercial Example"
                classname= "img-thumbnail mx-1"
                />
            </div>
        </section>
    );
}

export default Gallery;