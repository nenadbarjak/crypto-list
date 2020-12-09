import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Profile = () => {
    const [toggled, setToggled] = useState(false)

    // Added timestamp to the end of the URL to bypass the image caching and get a different image each time
    
    //let imgUrl = toggled ? "https://api.hello-avatar.com/adorables/285?t=" + new Date().getTime() : "https://placehold.it/285";
    let imgUrl = toggled ? "https://picsum.photos/285?t=" + new Date().getTime() : "https://placehold.it/285";
    
    let btnVariant = toggled ? "info" : "primary";

    return (  
        <Container>
            <Card style={{maxWidth: '18rem', border: 'none'}} >
                <Card.Img src={imgUrl} />
                <Card.Body>
                    <Card.Title>Goran Urukalo</Card.Title>
                    <Card.Text className="d-flex flex-column">
                        <span>goran.urukalo@teletrader.com</span>
                        <span>http://goranurukalo.github.io</span>                       
                    </Card.Text>
                    <Button 
                        variant={btnVariant}
                        onClick={() => setToggled(!toggled)}
                    >
                        Toggle avatar
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
}
 
export default Profile;