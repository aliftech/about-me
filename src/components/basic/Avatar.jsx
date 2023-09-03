import { Image } from 'react-bootstrap';
import ProfileImage from '../../assets/profile.jpg';

function Avatar() {
    return <Image src={ProfileImage} roundedCircle className='profile' />
}

export default Avatar;