import Logo from '../../Assets/Images/dd4k-logo-edited.png';
import './LogoBox.css';

const LogoBox = () => {
  return (
    <div className="logobox">
      <img className="logo" src={Logo} alt="logo" />
    </div>
  );
};

export default LogoBox;
