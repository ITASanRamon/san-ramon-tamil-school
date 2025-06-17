const Header = () => {
  const links = [{
    name:"Mission",
    link:"/"
  },{
    name:"Our School",
    href:"/"
  },
    {
      name:"School Resgistration",
      href:"https://www.catamilacademy.org/registration.html",
      target:"_blank"
    },
    {
      name:"HSCP Registration",
      href:"https://catamilacademy.org/CreditProgram.html",
      target:"_blank"
    },
    {
      name:"Contact Us",
      href:"/"
    }]
  return(
    <nav>
      <ul className="flex">
          {links.map(
              (link, index) => {
                return(

                  <a href={link.href} target={link.target || "_self"} className="links m-5 w-100 h-10 cursor-pointer content-center text-center border-rounded"  key={index}>{link.name}</a>)
              }
          )}
      </ul>
    </nav>
  )};

export default Header;