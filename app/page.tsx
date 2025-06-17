import Header from "@/app/sections/header";
import MissionSection from "@/app/sections/mission";
import OurSchoolSection from "@/app/sections/ourSchool";
import LocationAndHoursSection from "@/app/sections/locationAndHours";
import ContactUsSection from "@/app/sections/contactUs";
import Footer from "@/app/sections/footer";
import SanRamonTamilSchool from "@/app/sections/sanRamonTamilSchool";

export default function Home() {
  return (
      <div className="grid grid-rows-[auto,1fr,auto] grid-cols-1 w-full h-full">
        <header className="content-center justify-items-center container mx-auto px-4 sm:px-6 lg:px-8 ">
            <Header/>
        </header>
        <main className="content-center justify-items-start container mx-auto px-4 sm:px-6 lg:px-8 ">

            <SanRamonTamilSchool/>
            <MissionSection />
              <OurSchoolSection/>
              <LocationAndHoursSection/>
              <ContactUsSection/>

        </main>
        <footer className="mt-10 p-5 content-center justify-items-center">
  <Footer/>
        </footer>
      </div>
);
}
