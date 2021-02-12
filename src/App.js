import './css/reset.css';
import './css/others.css';
import Container from './components/Container';
import Card from './components/Card';
import CardTop from './components/CardTop';
import Title from './components/Title';
import ProfileName from './components/ProfileName';
import ProfileNumbers from './components/ProfileNumbers';
import NumbersContainer from './components/NumbersContainer';

export default function App() {
  return (
    <Container>
      <Title>P R O F I L E  <br/>  C A R D</Title>
      <Card>
        <CardTop>
          <img 
            id="profile-image" 
            src="https://avatars.githubusercontent.com/u/64696298?s=460&u=62ac0201356fdab3ae5d61565dc7f6c15d57b488&v=4" 
            alt="profile"
          />
        </CardTop>

        <ProfileName>Kauan Lazzarin</ProfileName>

        <NumbersContainer>
          <ProfileNumbers>20 <br/> Repositories</ProfileNumbers>
          <ProfileNumbers>26 <br/> Stars</ProfileNumbers>
          <ProfileNumbers>16 <br/> Followers</ProfileNumbers>
        </NumbersContainer>
      </Card>
    </Container>
  );
};
