import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../about/AboutPage";
import { ChatPage } from "../chat/ChatPage";
import { ContactPage } from "../contact/ContactPage";
import { HomePage } from "../home/HomePage";
import { NeutralPage } from "../NeutralPage"
import { NotFound } from "../NotFoundPage";
import { ProfilePage } from "../profile/ProfilePage";
import { WordlePage } from "../wordle/WordlePage";

export const RoutesPage = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<NeutralPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/wordle" element={<WordlePage />}  />
            <Route path='/chat' element={<ChatPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        </>
    );
};