import Profile from "./components/Profile";
import profileImg from "./assets/profile.jpeg"

export default function App() {
    return (
        <Profile avatar={profileImg} name="Raul Migliari" bio="Front-end Developer" tel="+5519981260262" email="raulmigliari5@gmail.com"/>
    )
}