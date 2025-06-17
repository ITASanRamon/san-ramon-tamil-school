const Header = () => {
  const links = [{
    name:"Mission",
    link:"/"
  },{
    name:"Our School",
    link:"/"
  },
    {
      name:"School Resgistration",
      link:"/"
    },
    {
      name:"HSCP Registration",
      link:"/"
    },
    {
      name:"Contact Us",
      link:"/"
    }]
  return(
    <nav>
      <ul className="flex">
          {links.map(
              (link, index) => {
                return(<li className="links m-5 w-100 h-10 cursor-pointer content-center text-center border-rounded" key={index}>
                  <span>{link.name}</span></li>)
              }
          )}
      </ul>
    </nav>
  )};

export default Header;