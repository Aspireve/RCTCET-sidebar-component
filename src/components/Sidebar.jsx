import { useState } from "react";
import BurgerButton from "./BurgerButton";
import { HiOutlineXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { FaRegCircle, FaAngleDown } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import "./SideBar.css";
import SidebarDropdownMenu from "./SidebarDropdownMenu";

const SidebarContents = [
  { path: "/", name: "Home" },
  { path: "/HobbyBasedClubs", name: "Hobby Based Clubs" },
  { path: "/GetInvolved", name: "Get Involved" },
  { path: "/UpcomingEvents", name: "Upcoming Events" },
  {
    path: "/OurProjects",
    name: "Our Projects",
    subroutes: [
      { path: "/OurProjects/ClubService", name: "Club Service" },
      { path: "/OurProjects/CommunityService", name: "Community Service" },
      { path: "/OurProjects/Shiksha", name: "Shiksha" },
      {
        path: "/OurProjects/ProfessionalDevelopment",
        name: "Professional Development",
      },
      {
        path: "/OurProjects/InternationalService",
        name: "International Service",
      },
      {
        path: "/OurProjects/PublicRelationAndMarketing",
        name: "Public Relation And Marketing",
      },
      { path: "/OurProjects/Sports", name: "Sports" },
      {
        path: "/OurProjects/EnterprenurshipDepartment",
        name: "Enterprenurship Department",
      },
      { path: "/OurProjects/PartnerInService", name: "Partner In Service" },
      { path: "/OurProjects/EditorialService", name: "Editorial Service" },
      {
        path: "/OurProjects/DigitalCommunication",
        name: "Digital Communication",
      },
      {
        path: "/OurProjects/SocialMediaRelation",
        name: "Social Media Relation",
      },
      { path: "/OurProjects/MediaProduction", name: "Media Production" },
    ],
  },
  { path: "/ClubInsight", name: "Club Insight" },
  { path: "/Contact", name: "Contact" },
  { path: "/Member", name: "Member" },
  { path: "/MeetTheTeam", name: "Meet The Team" },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleSidebar() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="SideBar">
      <div className="BurgerButtonHolder" onClick={() => toggleSidebar()}>
        <BurgerButton />
      </div>
      {isOpen && (
        <div className="SideBarSlide">
          <div className="CrossAndLogo">
            <HiOutlineXMark className="XMark" onClick={() => toggleSidebar()} />
            <div className="LogoName">RCTCET</div>
          </div>
          <div className="menuList">
            {SidebarContents.map((route, index) => {
              if (route.subroutes != null) {
                return (
                  <SidebarDropdownMenu route = {route} isOpen = {isOpen} setIsOpen = {setIsOpen}/>
                );
              }
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="menuItems"
                  onClick={() => toggleSidebar()}
                >
                  <div className="icon">{<FaRegCircle />}</div>
                  <div className="text">{route.name}</div>
                </NavLink>
              );
            })}
          </div>
          <div className="socials">
            <AiOutlineInstagram className="socialImage" />
            <AiOutlineYoutube className="socialImage" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
