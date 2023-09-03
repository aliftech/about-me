import { Card, Container, Stack } from 'react-bootstrap'
import Avatar from "./basic/Avatar";
import Name from './basic/Name';
 
function Header() {
    return (
        <>
            <Container fluid>
                <Card className='bg-primary'>
                    <Container fluid>
                        <Stack direction="horizontal" gap={2} className="col-md-5 mx-auto">
                            <Avatar></Avatar>
                            <Name></Name>
                        </Stack>
                    </Container>
                </Card>
            </Container>
        </>
    )
}

export default Header;