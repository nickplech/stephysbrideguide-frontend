import styled from 'styled-components'

const Div = styled.div`
width: 80%;



margin: 50px auto;
position: relative;
margin-bottom:30px;
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
`
const styles = {
    width: "100%",
    border: 0,
    // overflow: "hidden"
}

export default function Instagram() {

    return (
        <Div>

<script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script><iframe src="//lightwidget.com/widgets/8a7bafaa68d0564c98fd89d193228571.html"  scrolling="no" allowtransparency="true" className="lightwidget-widget" style={styles}></iframe>
    </Div>
    )
}
