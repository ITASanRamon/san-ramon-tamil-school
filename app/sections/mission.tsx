import Image from "next/image";

const MissionSection = () => {
    return (
        <section>
           <h2>Mission</h2>
            <div className="flex">
            <p> <b>San Ramon Tamil School (SRTS)</b> is dedicated to teaching the Tamil language and promoting Tamil culture to
                students of all ages and proficiency levels—from beginners to advanced learners. Our comprehensive
                program emphasizes fluency in reading, writing, and speaking Tamil, while also fostering a deep
                appreciation for Tamil literature, history, and traditions. Through interactive lessons and vibrant
                cultural events, We strive to create a supportive and inspiring environment where students can
                connect with their heritage and thrive.
            </p>
            <Image src="/placeholder.png" alt="map" width={250} height={250} className="ml-15"/>
            </div>
        </section>
    );
}

export default MissionSection;