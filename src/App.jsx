import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HobbyBasedClubs from "./pages/HobbyBasedClubs";
import GetInvolved from "./pages/GetInvolved";
import AboutUs from "./pages/AboutUs";
import UpcomingEvents from "./pages/UpcomingEvents";
import ClubInsight from "./pages/ClubInsight";
import Contact from "./pages/Contact";
import Members from "./pages/Members";
import MeetTheTeam from "./pages/MeetTheTeam";

import ClubService from "./pages/OurProjects/ClubService";
import CommunityService from "./pages/OurProjects/CommunityService";
import Shiksha from "./pages/OurProjects/Shiksha";
import ProfessionalDevelopment from "./pages/OurProjects/ProfessionalDevelopment";
import InternationalService from "./pages/OurProjects/InternationalService";
import PublicRelationAndMarketing from "./pages/OurProjects/PublicRelationAndMarketing";
import Sports from "./pages/OurProjects/Sports";
import EnterprenurshipDepartment from "./pages/OurProjects/EnterprenurshipDepartment";
import PartnerInService from "./pages/OurProjects/PartnerInService";
import EditorialService from "./pages/OurProjects/EditorialService";
import DigitalCommunication from "./pages/OurProjects/DigitalCommunication";
import SocialMediaRelation from "./pages/OurProjects/SocialMediaRelation";
import MediaProduction from "./pages/OurProjects/MediaProduction";

function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ClubInsight" element={<ClubInsight />} />
          <Route path="/OurProjects/ClubService" element={<ClubService />} />
          <Route
            path="/OurProjects/CommunityService"
            element={<CommunityService />}
          />
          <Route path="/Contact" element={<Contact />} />
          <Route
            path="/OurProjects/DigitalCommunication"
            element={<DigitalCommunication />}
          />
          <Route
            path="/OurProjects/EditorialService"
            element={<EditorialService />}
          />
          <Route
            path="/OurProjects/EnterprenurshipDepartment"
            element={<EnterprenurshipDepartment />}
          />
          <Route path="/GetInvolved" element={<GetInvolved />} />
          <Route path="/HobbyBasedClubs" element={<HobbyBasedClubs />} />
          <Route
            path="/OurProjects/InternationalService"
            element={<InternationalService />}
          />
          <Route
            path="/OurProjects/MediaProduction"
            element={<MediaProduction />}
          />
          <Route path="/MeetTheTeam" element={<MeetTheTeam />} />
          <Route path="/Members" element={<Members />} />
          <Route
            path="/OurProjects/PartnerInService"
            element={<PartnerInService />}
          />
          <Route
            path="/OurProjects/ProfessionalDevelopment"
            element={<ProfessionalDevelopment />}
          />
          <Route
            path="/OurProjects/PublicRelationAndMarketing"
            element={<PublicRelationAndMarketing />}
          />
          <Route path="/OurProjects/Shiksha" element={<Shiksha />} />
          <Route
            path="/OurProjects/SocialMediaRelation"
            element={<SocialMediaRelation />}
          />
          <Route path="/OurProjects/Sports" element={<Sports />} />
          <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
          <Route path="/dl" element={<p>404 NOT FOUND</p>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
