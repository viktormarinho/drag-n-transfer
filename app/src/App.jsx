import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarDNT } from './components/Navbar'
import { FileContainer } from './components/FileContainer';

export default function App(){
  return (
    <>
      <NavbarDNT></NavbarDNT>
      <FileContainer></FileContainer>
    </>
  )
}