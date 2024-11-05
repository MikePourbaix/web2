import "./Header.css";

interface HeaderProps {
    urlLogo: string;
    children: React.ReactNode; 
};

const Header = (props: HeaderProps) => (
    <header className="header">
        <img src={props.urlLogo} alt="logo" className="logo" />
        {props.children}
    </header>
);

export default Header;