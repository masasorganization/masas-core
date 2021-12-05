import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import imagenLogo from '../../assets/logo.png'
import imagenLogoAlt from '../../assets/logoAlt.png'
import imagenFondo from '../../assets/svg-fondo.svg'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import Axios from 'axios';
import { useState, useEffect } from 'react'

// Contenedores de Texto
const Resaltado = styled('p')``
const Cuerpo = styled('p')``

// Texto en variables (¿porque no?)
const texto1 = 'Inicia sesión en tu '
const texto2 = 'cuenta:'

function Login() {
  const [botonActivo, setBotonActivo] = useState(true)

  useEffect(() => {
    document.title = 'má sas | Iniciar sesión'
  })

  const [usuario,setUsuario]=useState('')
  const [contrasena,setContrasena]=useState('')

  const login=async(e)=>{
    e.preventDefault();
    const datos={usuario,contrasena}
    const respuesta= await Axios.post('https://masasapp.herokuapp.com/usuarios/login',datos);
    console.log(respuesta);
    const mensaje=respuesta.data.mensaje

    if(mensaje!=='Bienvenido!')
    {
        Swal.fire({
          
        icon: 'error',
        title: mensaje,
        showConfirmButton: false,
        timer: 1500
          });
    }

    else{

        const token= respuesta.data.token
        const nombre= respuesta.data.nombre
        const idusuario=respuesta.data.id
        sessionStorage.setItem('token',token)
        sessionStorage.setItem('nombre',nombre)
        sessionStorage.setItem('idusuario',idusuario)
        
        Swal.fire({
          
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
              });

        setTimeout(()=>{ window.location.href='/welcome'},500)

    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      user: data.get('user'),
      password: data.get('password'),
    });
  };

  return (
    <div>
      {/* Fondo */}
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        sx={{ ...fondo }}
      >
        {/* Recubrimiento del fondo */}
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{ ...recubrimientoFondo }}
        >
          {/* Contenedor blanco del centro */}
          <Container
            align='center'
            fixed
            disableGutters={true}
            sx={{ ...contenedorBlanco }}
          >
            {/* Contenedor del logo */}
            <Box display='flex' sx={{ ...contenedorLogo }}>
              {/* logo */}
              <Box
                component={Link}
                alignSelf='center'
                sx={{ ...logo }}
                to='/'
              />
            </Box>
            {/* Texto de introducción */}
            {/* Contenedor del Texto */}
            <Box
              display='flex'
              flexDirection='row'
              justifyContent='center'
              sx={{
                pt: '36px',
                mb: '28px'
              }}
            >
              {/* Cuerpo del texto Nunito */}
              <Cuerpo sx={{ ...cuerpo }}>{texto1}</Cuerpo>
              {/* Texto resaltado Noto */}
              <Resaltado sx={{ ...resaltado }}>{texto2}</Resaltado>
            </Box>
            {/* Campos de Texto */}
            <Box component="form" onSubmit={handleSubmit,login} noValidate  >
            <Grid container>
              <Grid item xs={12} sx={{ mb: '20px' }}>
                <TextField
                  required
                  onChange={(e)=>setUsuario(e.target.value)}
                  id='username'
                  //helperText="Ingrese su nombre de usuario"
                  label='Nombre de usuario'
                  variant='standard'
                  sx={{ ...formulario }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  //helperText="Ingrese su contraseña"
                  required
                  onChange={(e)=>setContrasena(e.target.value)}
                  id='password'
                  label='Contraseña'
                  variant='standard'
                  type='password'
                  sx={{ ...formulario }}
                />
              </Grid>
            </Grid>
            <Box
              sx={{
                mt: '56px',
                mb: '36px'
              }}
            >
              <Button
                type= 'submit'
                variant='contained'
                color='primary'
                sx={{ ...botonLogin }}
                // disabled={botonActivo}
              >
                Inicio
              </Button>
            </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  )
}

export default Login

// Estilos como variables (¿constantes? 🥴)

const fondo = {
  bgcolor: '#05B3B2',
  backgroundImage: `url(${imagenFondo})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
  p: 0,
  m: 0
}

const recubrimientoFondo = {
  bgcolor: '#05B3B240',
  height: '100vh',
  width: '100vw',
  p: 0,
  m: 0
}

const contenedorBlanco = {
  bgcolor: 'white',
  height: '680px',
  width: '363px',
  borderRadius: '14px',
  p: '0'
}

const contenedorLogo = {
  height: '353px',
  width: '363px',
  borderRadius: '14px 14px 0 0'
}

const logo = {
  mx: 'auto',
  height: '288px',
  width: '267px',
  backgroundImage: `url(${imagenLogo})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  ':hover': {
    transition: 'transform .2s',
    backgroundImage: `url(${imagenLogoAlt})`,
    transform: 'scale(1.007)'
  }
}

const cuerpo = {
  fontFamily: 'Nunito, sans-serif',
  fontWeight: 300,
  fontSize: '1rem',
  whiteSpace: 'pre-wrap',
  m: 0,
  letterSpacing: '1.25px',
  lineHeight: '1rem'
}

const resaltado = {
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: 700,
  fontSize: '1rem',
  color: '#FF4E00',
  m: 0,
  letterSpacing: '1.25px',
  lineHeight: '14px'
}

const formulario = {
  '& .MuiInput-input': {
    fontFamily: 'Nunito, sans-serif',
    fontWeight: 300,
    fontSize: '1rem',
    letterSpacing: '1px'
  },
  '& .MuiInputLabel-root': {
    fontFamily: 'Noto Sans, sans-serif',
    fontSize: '1rem',
    fontWeight: 400,
    letterSpacing: '0.3px',
    '&.Mui-focused': {
      color: '#00928e'
    }
  },
  '& .MuiInput-root': {
    '&:after': {
      borderBottom: '2px solid #00928e'
    }
  }
}

const botonLogin = {
  backgroundColor: '#05B3B2',
  borderRadius: '10px',
  width: '278px',
  height: '39px',
  textTransform: 'none',
  fontFamily: 'Noto Sans, sans-serif',
  fontWeight: '700',
  fontSize: '1.125rem',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#00928e',
    boxShadow: 'none'
  }
}
