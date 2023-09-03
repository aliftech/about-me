import { Container, Card } from "react-bootstrap";
import FlushAccordeon from "./basic/Accordeon";

function Body() {
    return (
        <>
            <Container fluid>
                <Card>
                    <FlushAccordeon></FlushAccordeon>
                </Card>
            </Container>
        </>
    )
}


export default Body;