import NavigationBar from "../components/navbar";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { fetchData } from '../services/AwsFunction';
import Graphicss from "./Graphics";

function Home() {
        // constructor(props) {
        //     super(props);
        //     this.state = { apiResponse: "" };
        // }

        // callAPI() {
        //     fetch("http://localhost:9000/testAPI")
        //     .then(res => res.text())
        //     .then(res => this.setState({ apiResponse: res }));
        // }

        // componentWillMount() {
        //     this.callAPI();
        // }
    // render(){
        const fetchDataFormDynamoDb = () => {
            fetchData('rfidTable');
          }
        // const information = fetchData('rfiTable');
        return (
            <>
            <NavigationBar></NavigationBar>
            {/* <p>{fetchData.luminosidade}</p> */}
            {/* <p>{fetchData.items[1].localizacao}</p> */}
            <Graphicss></Graphicss>
            <div>
                    <Button sx={{bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px',display:'inline-block', mt:'20px', ml:'95px' }}>
                        <Typography sx={{color:'#FFFFFF'}}>
                            Adicionar Dispositivo
                        </Typography>
                    </Button>
                    <Button sx={{bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', display:'inline-block', mt:'20px', ml:'95px'}}>
                        <Typography sx={{color:'#FFFFFF'}}>
                            Rastrear Dispositivos
                        </Typography>
                    </Button>
                    <Button sx={{bgcolor:"#0082AF", borderRadius:'90px', width:'337px', height:'69px', display:'inline-block', mt:'20px', ml:'95px'}} onClick={() => fetchDataFormDynamoDb()}>
                        <Typography sx={{color:'#FFFFFF'}}>
                            Gerar Relatórios
                        </Typography>
                    </Button>
            </div>
            </>
        );
    }
    
//   }
  
export default Home;