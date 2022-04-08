import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../about/AboutPage";
import { ChatPage } from "../chat/ChatPage";
import { ContactPage } from "../contact/ContactPage";
import { NeutralPage } from "../home/HomePage"
import { NotFound } from "../NotFoundPage";
import { ProfilePage } from "../profile/ProfilePage";
import { SnakePage } from "../game/SnakePage";

export const RoutesPage = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<NeutralPage />} />
            <Route path="/snake" element={<SnakePage />}  />
            <Route path='/chat' element={<ChatPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </>
    );
};