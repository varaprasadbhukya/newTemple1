import { SlTab, SlTabGroup, SlTabPanel } from '@shoelace-style/shoelace/dist/react';
import { useState } from 'react';
import Home from './Home';
import Rituals from './Rituals';
import Contact from './Contact';


function Tabs() {
    const [activeTab, setActiveTab] = useState('home')
    const handleTabActivate = (event) => {
        setActiveTab(event.detail.name)
      }
    return(
        <div className="form-floating"> 
        <SlTabGroup onSlTabShow={handleTabActivate}>
            <SlTab slot="nav" panel="home">
                <h3>Home</h3>
            </SlTab>
            <SlTab slot="nav" panel="rituals">
                <h3>Rituals</h3>
            </SlTab>
            <SlTab slot="nav" panel="contact">
                <h3>Contact us</h3>
            </SlTab>
            <SlTabPanel name="home">{activeTab === 'home' && <Home/>}</SlTabPanel>
            <SlTabPanel name="rituals">{activeTab === 'rituals' && <Rituals/>}</SlTabPanel>
            <SlTabPanel name="contact">{activeTab === 'contact' && <Contact/>}</SlTabPanel>
        </SlTabGroup>
    </div>
    )
}
export default Tabs