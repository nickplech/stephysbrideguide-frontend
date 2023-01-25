import styled from 'styled-components'

const Img = styled.img`
position: absolute;
opacity:.2;
margin-right: 10px;
margin-bottom: 50px;
z-index: 1;
transform: translateY(-10px);
`
const Div = styled.div`
width: 80%;
margin: 50px auto 0;
position: relative;
@media (min-width: 361px) and (max-width: 900px) {
width: 90%;
}
.lightwidget__lightbox-caption {
    font-family: 'Comfortaa';
}
iframe .lightwidget__lightbox-caption {
    font-family: 'Comfortaa';
}
p {
font-family: 'Comfortaa';
width: 80%;
opacity:.6;
letter-spacing: 3px;
color: ${props => props.theme.third};
margin-bottom:20px;
text-transform: uppercase;
}

.lightwidget__nav-button {
    z-index: 990;
}
`
const TheLink = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    font-family: 'Tomatoes';
    font-size: 18px;
    margin: 20px auto;
    z-index: 5;
    a {
        position: relative;

    z-index: 5;
    }
`

const styles = {
    width: "100%",
    border: 0,
}

export default function Instagram() {

    return (
        <>


        <Div>
<script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="https://cdn.lightwidget.com/widgets/8a7bafaa68d0564c98fd89d193228571.html"  scrolling="no" allowtransparency="true" className="lightwidget-widget" style={styles}></iframe>

    </Div>


    <TheLink>
      <Img  src='../static/instagram.svg' height="55px" alt="instagram logo" />
    <a href="https://www.instagram.com/stephysbrideguide" title="Check out My Instagram!">@stephysbrideguide</a>
    </TheLink>
    </>
    )
}
