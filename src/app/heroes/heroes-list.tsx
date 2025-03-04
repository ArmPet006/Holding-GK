import HeroCard from "@/Components/HeroCard/hero-card";
import TestImage from "@/../public/assets/images/image.jpg";

const HeroesList = () => {
    const arr = Array(10).fill({
        image: TestImage,
        name: "Artur Petrosyan",
        label:
            "Programmer",
    });

    return (
        <div className="heroes_list">
            {arr.map((element, index) => (
                <HeroCard
                    key={index}
                    image={element.image}
                    name={element.name}
                    label={element.label}
                />
            ))}
        </div>
    );
};

export default HeroesList;
