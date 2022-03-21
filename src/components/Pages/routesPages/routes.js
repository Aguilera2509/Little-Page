import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../about/AboutPage";
import { ChatPage } from "../chat/ChatPage";
import { ContactPage } from "../contact/ContactPage";
import { HomePage } from "../home/HomePage";
import { NeutralPage } from "../NeutralPage"
import { NotFound } from "../NotFoundPage";
import { ProfilePage } from "../profile/ProfilePage";
import { SettingPage } from "../profile/Settings_a_Page";
import { WiddlePage } from "../widdle/WiddlePage";

export const RoutesPage = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<NeutralPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/widdle" element={<WiddlePage />} />
            <Route path='/chat' element={<ChatPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/settings-Account' element={<SettingPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </>
    );
};