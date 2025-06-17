import Image from "next/image";

const OUR_SCHOOL_BADGES = [
    {
        imageSrc:"/placeholder.png",
        imageAlt:"International Tamil Academy",
        description:"We are affiliated to International Tamil Academy (ITA) whose misson is to teach Tamil language to the Diaspora Children and Youth."
    },
    {
        imageSrc:"/placeholder.png",
        imageAlt:"Dedicated volunteers",
        description:"Our school is entirely run by dedicated volunteers. Parents generously contribute their time, talents, and energy to help our community thrive."
    },
    {
        imageSrc:"/placeholder.png",
        imageAlt:"Non-Profit Organization",
        description:"SRTS is a Non-Profit Organization, registered in the state of California."
    },
]
const OurSchoolSection = () => {

    return (
        <section id="our-school">
            <h2>Our School</h2>
            <ul className="flex w-300 justify-self-center items-center">
                {OUR_SCHOOL_BADGES.map((badge, index) => {
                    return <li key={index} className="mx-10"><Image src={badge.imageSrc} alt={badge.imageAlt} width={250} height={250}/>{badge.description}</li>
                })}
            </ul>

        </section>
    );
}

export default OurSchoolSection;