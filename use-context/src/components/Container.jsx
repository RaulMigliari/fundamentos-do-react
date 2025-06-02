import UserInfo from "./UserInfo";

export default function Container({children}) {
    return (
        <div>
            <p>Container do App</p>
            <UserInfo/>
            {children}
        </div>
    )
}